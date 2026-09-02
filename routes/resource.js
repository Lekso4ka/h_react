const express = require("express");
const { readJson, writeJson, decodeParam, slugify } = require("../lib/jsonStore");

/**
 * kind: "object" | "array"
 * idField: for arrays — property used as id when present (e.g. "id")
 */
function createResourceRouter({ fileName, kind, idField = null }) {
  const router = express.Router();

  if (kind === "singleton") {
    router.get("/", (_req, res) => {
      try {
        const data = readJson(fileName);
        res.json({ kind, data });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    router.put("/", (req, res) => {
      try {
        const { item } = req.body;
        if (!item || typeof item !== "object" || Array.isArray(item)) {
          return res.status(400).json({ error: "Нужно поле item" });
        }
        writeJson(fileName, item);
        res.json({ item });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    return router;
  }

  function listItems(data) {
    if (kind === "object") {
      return Object.entries(data).map(([key, value]) => ({
        id: key,
        item: value,
      }));
    }

    return data.map((item, index) => ({
      id: idField && item?.[idField] != null ? String(item[idField]) : String(index),
      index,
      item,
    }));
  }

  function findArrayIndex(data, id) {
    if (idField) {
      const byField = data.findIndex(
        (item) => item && String(item[idField]) === String(id)
      );
      if (byField !== -1) return byField;
    }

    const asNumber = Number(id);
    if (!Number.isNaN(asNumber) && asNumber >= 0 && asNumber < data.length) {
      return asNumber;
    }

    return -1;
  }

  router.get("/", (_req, res) => {
    try {
      const data = readJson(fileName);
      res.json({
        kind,
        list: listItems(data).map(({ id, item, index }) => ({
          id,
          index,
          label:
            item?.name ||
            item?.title ||
            item?.tooltip ||
            item?.variant ||
            id,
          item,
        })),
        data,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/:id", (req, res) => {
    try {
      const data = readJson(fileName);
      const id = decodeParam(req.params.id);

      if (kind === "object") {
        if (!data[id]) {
          return res.status(404).json({ error: "Запись не найдена" });
        }
        return res.json({ id, item: data[id] });
      }

      const index = findArrayIndex(data, id);
      if (index === -1) {
        return res.status(404).json({ error: "Запись не найдена" });
      }

      res.json({
        id: idField && data[index]?.[idField] != null
          ? String(data[index][idField])
          : String(index),
        index,
        item: data[index],
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/", (req, res) => {
    try {
      const data = readJson(fileName);
      const { id: rawId, item } = req.body;

      if (!item || typeof item !== "object") {
        return res.status(400).json({ error: "Нужно поле item" });
      }

      if (kind === "object") {
        let id = rawId || slugify(item.name || item.title || "item");
        if (!id) id = `item-${Date.now()}`;
        if (data[id]) {
          let n = 2;
          while (data[`${id}-${n}`]) n += 1;
          id = `${id}-${n}`;
        }
        data[id] = item;
        writeJson(fileName, data);
        return res.status(201).json({ id, item });
      }

      if (idField && item[idField] == null && rawId) {
        item[idField] = rawId;
      }

      data.push(item);
      writeJson(fileName, data);
      const index = data.length - 1;
      res.status(201).json({
        id: idField && item[idField] != null ? String(item[idField]) : String(index),
        index,
        item,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/:id", (req, res) => {
    try {
      const data = readJson(fileName);
      const id = decodeParam(req.params.id);
      const { item, newId } = req.body;

      if (!item || typeof item !== "object") {
        return res.status(400).json({ error: "Нужно поле item" });
      }

      if (kind === "object") {
        if (!data[id]) {
          return res.status(404).json({ error: "Запись не найдена" });
        }

        let finalId = id;
        if (newId && newId !== id) {
          if (data[newId]) {
            return res.status(400).json({ error: "Ключ уже существует" });
          }
          data[newId] = item;
          delete data[id];
          finalId = newId;
        } else {
          data[id] = item;
        }

        writeJson(fileName, data);
        return res.json({ id: finalId, item });
      }

      const index = findArrayIndex(data, id);
      if (index === -1) {
        return res.status(404).json({ error: "Запись не найдена" });
      }

      data[index] = item;
      writeJson(fileName, data);
      res.json({
        id: idField && item[idField] != null ? String(item[idField]) : String(index),
        index,
        item,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.delete("/:id", (req, res) => {
    try {
      const data = readJson(fileName);
      const id = decodeParam(req.params.id);

      if (kind === "object") {
        if (!data[id]) {
          return res.status(404).json({ error: "Запись не найдена" });
        }
        delete data[id];
        writeJson(fileName, data);
        return res.json({ ok: true });
      }

      const index = findArrayIndex(data, id);
      if (index === -1) {
        return res.status(404).json({ error: "Запись не найдена" });
      }

      data.splice(index, 1);
      writeJson(fileName, data);
      res.json({ ok: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = createResourceRouter;
