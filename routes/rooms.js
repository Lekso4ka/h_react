const path = require("path");
const fs = require("fs");
const express = require("express");

const router = express.Router();
const DATA_PATH = path.join(__dirname, "..", "data", "rooms.json");

const META_KEYS = new Set(["name", "variants", "id", "tour_link"]);

function decodeParam(value) {
  const raw = String(value ?? "");
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function readRooms() {
  const raw = fs.readFileSync(DATA_PATH, "utf8");
  return JSON.parse(raw);
}

function writeRooms(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf8");
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\wа-яё_-]/gi, "")
    .replace(/_+/g, "_");
}

function listEntries(data, hotel) {
  const hotelData = data[hotel];
  if (!hotelData) return null;

  const entries = [];

  for (const [categoryKey, category] of Object.entries(hotelData)) {
    if (!category || typeof category !== "object") continue;

    const variants = Array.isArray(category.variants) ? category.variants : [];
    const variantKeys =
      variants.length > 0
        ? variants
        : Object.keys(category).filter((key) => !META_KEYS.has(key));

    if (variantKeys.length === 0) {
      entries.push({
        hotel,
        categoryKey,
        variantKey: "default",
        name: category.name || categoryKey,
        variantLabel: null,
      });
      continue;
    }

    for (const variantKey of variantKeys) {
      entries.push({
        hotel,
        categoryKey,
        variantKey,
        name: category.name || categoryKey,
        variantLabel: variantKey === "default" ? null : variantKey,
      });
    }
  }

  return entries;
}

function getVariantPayload(category, variantKey) {
  if (!category) return null;
  const payload = category[variantKey];
  if (!payload || typeof payload !== "object") return null;
  return payload;
}

router.get("/", (_req, res) => {
  try {
    const data = readRooms();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:hotel", (req, res) => {
  try {
    const data = readRooms();
    const hotel = req.params.hotel;

    if (!data[hotel]) {
      return res.status(404).json({ error: "Отель не найден" });
    }

    res.json({
      hotel,
      rooms: data[hotel],
      list: listEntries(data, hotel),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:hotel/:categoryKey/:variantKey", (req, res) => {
  try {
    const data = readRooms();
    const hotel = decodeParam(req.params.hotel);
    const categoryKey = decodeParam(req.params.categoryKey);
    const variantKey = decodeParam(req.params.variantKey);
    const category = data[hotel]?.[categoryKey];

    if (!category) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    const variant = getVariantPayload(category, variantKey);
    if (!variant) {
      return res.status(404).json({ error: "Вариант номера не найден" });
    }

    res.json({
      hotel,
      categoryKey,
      variantKey,
      name: category.name || categoryKey,
      variants: category.variants || [],
      id: category.id || null,
      data: variant,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/:hotel", (req, res) => {
  try {
    const data = readRooms();
    const { hotel } = req.params;

    if (!data[hotel]) {
      return res.status(404).json({ error: "Отель не найден" });
    }

    const {
      categoryKey: rawCategoryKey,
      name,
      variantKey = "default",
      variants = [],
      room,
    } = req.body;

    if (!name || !room) {
      return res.status(400).json({ error: "Нужны поля name и room" });
    }

    let categoryKey = rawCategoryKey || slugify(name);
    if (!categoryKey) {
      return res.status(400).json({ error: "Некорректный ключ категории" });
    }

    if (data[hotel][categoryKey]) {
      let suffix = 2;
      while (data[hotel][`${categoryKey}_${suffix}`]) suffix += 1;
      categoryKey = `${categoryKey}_${suffix}`;
    }

    const variantList =
      Array.isArray(variants) && variants.length > 0
        ? variants
        : variantKey === "default"
          ? []
          : [variantKey];

    data[hotel][categoryKey] = {
      name,
      variants: variantList,
      [variantKey]: room,
    };

    writeRooms(data);

    res.status(201).json({
      hotel,
      categoryKey,
      variantKey,
      name,
      data: room,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:hotel/:categoryKey/:variantKey", (req, res) => {
  try {
    const data = readRooms();
    const hotel = decodeParam(req.params.hotel);
    const categoryKey = decodeParam(req.params.categoryKey);
    const variantKey = decodeParam(req.params.variantKey);
    const category = data[hotel]?.[categoryKey];

    if (!category) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    if (!category[variantKey]) {
      return res.status(404).json({ error: "Вариант номера не найден" });
    }

    const { name, room, variants, newVariantKey } = req.body;

    if (name) {
      category.name = name;
    }

    if (Array.isArray(variants)) {
      category.variants = variants;
    }

    if (room && typeof room === "object") {
      category[variantKey] = room;
    }

    if (newVariantKey && newVariantKey !== variantKey) {
      if (category[newVariantKey]) {
        return res.status(400).json({ error: "Вариант с таким ключом уже есть" });
      }

      category[newVariantKey] = category[variantKey];
      delete category[variantKey];

      if (Array.isArray(category.variants)) {
        category.variants = category.variants.map((item) =>
          item === variantKey ? newVariantKey : item
        );
      }
    }

    writeRooms(data);

    const finalVariantKey = newVariantKey || variantKey;

    res.json({
      hotel,
      categoryKey,
      variantKey: finalVariantKey,
      name: category.name,
      variants: category.variants || [],
      data: category[finalVariantKey],
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/:hotel/:categoryKey/variants", (req, res) => {
  try {
    const data = readRooms();
    const { hotel, categoryKey } = req.params;
    const category = data[hotel]?.[categoryKey];

    if (!category) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    const { variantKey, room } = req.body;
    if (!variantKey || !room) {
      return res.status(400).json({ error: "Нужны поля variantKey и room" });
    }

    if (category[variantKey]) {
      return res.status(400).json({ error: "Вариант уже существует" });
    }

    category[variantKey] = room;
    if (!Array.isArray(category.variants)) {
      category.variants = [];
    }
    if (!category.variants.includes(variantKey) && variantKey !== "default") {
      category.variants.push(variantKey);
    }

    writeRooms(data);

    res.status(201).json({
      hotel,
      categoryKey,
      variantKey,
      data: room,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:hotel/:categoryKey/:variantKey", (req, res) => {
  try {
    const data = readRooms();
    const hotel = decodeParam(req.params.hotel);
    const categoryKey = decodeParam(req.params.categoryKey);
    const variantKey = decodeParam(req.params.variantKey);
    const category = data[hotel]?.[categoryKey];

    if (!category) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    if (!category[variantKey]) {
      return res.status(404).json({ error: "Вариант номера не найден" });
    }

    delete category[variantKey];

    if (Array.isArray(category.variants)) {
      category.variants = category.variants.filter((item) => item !== variantKey);
    }

    const remainingVariants = Object.keys(category).filter(
      (key) => !META_KEYS.has(key)
    );

    if (remainingVariants.length === 0) {
      delete data[hotel][categoryKey];
    }

    writeRooms(data);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:hotel/:categoryKey", (req, res) => {
  try {
    const data = readRooms();
    const { hotel, categoryKey } = req.params;

    if (!data[hotel]?.[categoryKey]) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    delete data[hotel][categoryKey];
    writeRooms(data);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
