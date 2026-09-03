const express = require("express");
const { langFromQuery, otherLang } = require("../lib/lang");
const { readJsonLang, writeJsonLang } = require("../lib/jsonStore");
const { syncLocale, pickText } = require("../lib/localeSync");

const router = express.Router();
const ROOMS_FILE = "rooms.json";

const META_KEYS = new Set(["name", "variants", "id", "tour_link"]);

function readRoomsLang(lang) {
  return readJsonLang(ROOMS_FILE, lang);
}

function writeRoomsLang(lang, data) {
  return writeJsonLang(ROOMS_FILE, lang, data);
}

function decodeParam(value) {
  const raw = String(value ?? "");
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
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

function cloneJson(data) {
  return JSON.parse(JSON.stringify(data));
}

function syncRoomCategory(ruCat, enCat) {
  const en = enCat && typeof enCat === "object" ? enCat : {};
  const out = {};
  for (const key of Object.keys(ruCat || {})) {
    if (key === "name") {
      out.name = pickText(en.name, ruCat.name);
      continue;
    }
    if (META_KEYS.has(key) && key !== "name") {
      out[key] = cloneJson(ruCat[key]);
      continue;
    }
    if (ruCat[key] && typeof ruCat[key] === "object" && !Array.isArray(ruCat[key])) {
      out[key] = syncLocale(ruCat[key], en[key]);
      continue;
    }
    out[key] = cloneJson(ruCat[key]);
  }
  return out;
}

function overlayRooms(ruData, enData) {
  const out = {};
  for (const hotel of Object.keys(ruData || {})) {
    out[hotel] = {};
    const ruHotel = ruData[hotel] || {};
    const enHotel = enData?.[hotel] && typeof enData[hotel] === "object" ? enData[hotel] : {};
    for (const catKey of Object.keys(ruHotel)) {
      out[hotel][catKey] = syncRoomCategory(ruHotel[catKey], enHotel[catKey]);
    }
  }
  return out;
}

async function readRoomsOverlay(lang) {
  const data = await readRoomsLang(lang);
  if (lang !== "en") return data;
  return overlayRooms(await readRoomsLang("ru"), data);
}

function getVariantPayload(category, variantKey) {
  if (!category) return null;
  const payload = category[variantKey];
  if (!payload || typeof payload !== "object") return null;
  return payload;
}

router.get("/", async (req, res) => {
  try {
    const data = await readRoomsOverlay(langFromQuery(req));
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:hotel", async (req, res) => {
  try {
    const data = await readRoomsOverlay(langFromQuery(req));
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

router.get("/:hotel/:categoryKey/:variantKey", async (req, res) => {
  try {
    const data = await readRoomsOverlay(langFromQuery(req));
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

router.post("/:hotel", async (req, res) => {
  try {
    const lang = langFromQuery(req);
    const data = await readRoomsLang(lang);
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

    const created = {
      name,
      variants: variantList,
      [variantKey]: room,
    };
    data[hotel][categoryKey] = created;
    await writeRoomsLang(lang, data);

    const altLang = otherLang(lang);
    const altData = await readRoomsLang(altLang);
    if (altData[hotel] && !altData[hotel][categoryKey]) {
      altData[hotel][categoryKey] = JSON.parse(JSON.stringify(created));
      await writeRoomsLang(altLang, altData);
    }

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

router.put("/:hotel/:categoryKey/:variantKey", async (req, res) => {
  try {
    const lang = langFromQuery(req);
    const data = await readRoomsLang(lang);
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

    if (lang === "en") {
      const ruData = await readRoomsLang("ru");
      const ruCategory = ruData[hotel]?.[categoryKey];
      if (!ruCategory?.[variantKey]) {
        return res.status(404).json({ error: "Вариант номера не найден" });
      }

      const enData = data;
      const nextEn = {
        ...category,
        name: name || category.name,
      };
      if (room && typeof room === "object") {
        nextEn[variantKey] = room;
      }
      enData[hotel][categoryKey] = syncRoomCategory(ruCategory, nextEn);
      await writeRoomsLang("en", enData);

      const saved = enData[hotel][categoryKey];
      return res.json({
        hotel,
        categoryKey,
        variantKey,
        name: saved.name,
        variants: saved.variants || [],
        data: saved[variantKey],
      });
    }

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

      const enData = await readRoomsLang("en");
      const enCategory = enData[hotel]?.[categoryKey];
      if (enCategory?.[variantKey] && !enCategory[newVariantKey]) {
        enCategory[newVariantKey] = enCategory[variantKey];
        delete enCategory[variantKey];
        if (Array.isArray(enCategory.variants)) {
          enCategory.variants = enCategory.variants.map((item) =>
            item === variantKey ? newVariantKey : item
          );
        }
        await writeRoomsLang("en", enData);
      }
    }

    await writeRoomsLang("ru", data);

    const finalVariantKey = newVariantKey || variantKey;
    const enData = await readRoomsLang("en");
    if (enData[hotel]?.[categoryKey]) {
      enData[hotel][categoryKey] = syncRoomCategory(
        data[hotel][categoryKey],
        enData[hotel][categoryKey]
      );
      await writeRoomsLang("en", enData);
    }

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

router.post("/:hotel/:categoryKey/variants", async (req, res) => {
  try {
    const lang = langFromQuery(req);
    const data = await readRoomsLang(lang);
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

    await writeRoomsLang(lang, data);

    const altLang = otherLang(lang);
    const altData = await readRoomsLang(altLang);
    const altCategory = altData[hotel]?.[categoryKey];
    if (altCategory && !altCategory[variantKey]) {
      altCategory[variantKey] = JSON.parse(JSON.stringify(room));
      if (!Array.isArray(altCategory.variants)) {
        altCategory.variants = [];
      }
      if (!altCategory.variants.includes(variantKey) && variantKey !== "default") {
        altCategory.variants.push(variantKey);
      }
      await writeRoomsLang(altLang, altData);
    }

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

router.delete("/:hotel/:categoryKey/:variantKey", async (req, res) => {
  try {
    const lang = langFromQuery(req);
    const data = await readRoomsLang(lang);
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

    const removeVariant = (store) => {
      const cat = store[hotel]?.[categoryKey];
      if (!cat?.[variantKey]) return;
      delete cat[variantKey];
      if (Array.isArray(cat.variants)) {
        cat.variants = cat.variants.filter((item) => item !== variantKey);
      }
      const remainingVariants = Object.keys(cat).filter(
        (key) => !META_KEYS.has(key)
      );
      if (remainingVariants.length === 0) {
        delete store[hotel][categoryKey];
      }
    };

    removeVariant(data);
    await writeRoomsLang(lang, data);

    const altLang = otherLang(lang);
    const altData = await readRoomsLang(altLang);
    removeVariant(altData);
    await writeRoomsLang(altLang, altData);

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:hotel/:categoryKey", async (req, res) => {
  try {
    const lang = langFromQuery(req);
    const data = await readRoomsLang(lang);
    const { hotel, categoryKey } = req.params;

    if (!data[hotel]?.[categoryKey]) {
      return res.status(404).json({ error: "Категория номера не найдена" });
    }

    delete data[hotel][categoryKey];
    await writeRoomsLang(lang, data);

    const altLang = otherLang(lang);
    const altData = await readRoomsLang(altLang);
    if (altData[hotel]?.[categoryKey]) {
      delete altData[hotel][categoryKey];
      await writeRoomsLang(altLang, altData);
    }
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
