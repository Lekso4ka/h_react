const express = require("express");
const { langFromQuery, otherLang } = require("../lib/lang");
const {
  readJsonLang,
  writeJsonLang,
  cloneJson,
  decodeParam,
  slugify,
} = require("../lib/jsonStore");
const { syncLocale } = require("../lib/localeSync");

function readLocalized(fileName, lang) {
  const data = readJsonLang(fileName, lang);
  if (lang !== "en") return data;
  return syncLocale(readJsonLang(fileName, "ru"), data);
}

/**
 * kind: "object" | "array"
 * idField: for arrays — property used as id when present (e.g. "id")
 */
function createResourceRouter({ fileName, kind, idField = null }) {
  const router = express.Router();

  if (kind === "singleton") {
    router.get("/", (req, res) => {
      try {
        const data = readLocalized(fileName, langFromQuery(req));
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
        const lang = langFromQuery(req);
        if (lang === "en") {
          const ruItem = readJsonLang(fileName, "ru");
          const synced = syncLocale(ruItem, item);
          writeJsonLang(fileName, "en", synced);
          return res.json({ item: synced });
        }

        writeJsonLang(fileName, "ru", item);
        const enItem = readJsonLang(fileName, "en");
        writeJsonLang(fileName, "en", syncLocale(item, enItem));
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

  router.get("/", (req, res) => {
    try {
      const data = readLocalized(fileName, langFromQuery(req));
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
      const data = readLocalized(fileName, langFromQuery(req));
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
      const lang = langFromQuery(req);
      const data = readJsonLang(fileName, lang);
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
        writeJsonLang(fileName, lang, data);

        const altLang = otherLang(lang);
        const altData = readJsonLang(fileName, altLang);
        if (!altData[id]) {
          altData[id] = cloneJson(item);
          writeJsonLang(fileName, altLang, altData);
        }
        return res.status(201).json({ id, item });
      }

      if (idField && item[idField] == null && rawId) {
        item[idField] = rawId;
      }

      data.push(item);
      writeJsonLang(fileName, lang, data);

      const altLang = otherLang(lang);
      const altData = readJsonLang(fileName, altLang);
      altData.push(cloneJson(item));
      writeJsonLang(fileName, altLang, altData);

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
      const lang = langFromQuery(req);
      const data = readJsonLang(fileName, lang);
      const id = decodeParam(req.params.id);
      const { item, newId } = req.body;

      if (!item || typeof item !== "object") {
        return res.status(400).json({ error: "Нужно поле item" });
      }

      if (kind === "object") {
        const ruData = lang === "ru" ? data : readJsonLang(fileName, "ru");
        const enData = lang === "en" ? data : readJsonLang(fileName, "en");

        if (!ruData[id]) {
          return res.status(404).json({ error: "Запись не найдена" });
        }

        let finalId = id;
        if (newId && newId !== id && lang === "ru") {
          if (ruData[newId]) {
            return res.status(400).json({ error: "Ключ уже существует" });
          }
          ruData[newId] = item;
          delete ruData[id];
          finalId = newId;
          if (enData[id] && !enData[newId]) {
            enData[newId] = enData[id];
            delete enData[id];
          }
        } else if (lang === "ru") {
          ruData[id] = item;
        }

        if (lang === "en") {
          if (!ruData[id]) {
            return res.status(404).json({ error: "Запись не найдена" });
          }
          const synced = syncLocale(ruData[id], item);
          enData[id] = synced;
          writeJsonLang(fileName, "en", enData);
          return res.json({ id, item: synced });
        }

        writeJsonLang(fileName, "ru", ruData);
        const ruItem = ruData[finalId];
        if (enData[finalId]) {
          enData[finalId] = syncLocale(ruItem, enData[finalId]);
        } else {
          enData[finalId] = cloneJson(ruItem);
        }
        writeJsonLang(fileName, "en", enData);
        return res.json({ id: finalId, item: ruItem });
      }

      const index = findArrayIndex(data, id);
      if (index === -1) {
        return res.status(404).json({ error: "Запись не найдена" });
      }

      if (lang === "en") {
        const ruData = readJsonLang(fileName, "ru");
        const ruIndex = findArrayIndex(ruData, id);
        if (ruIndex === -1) {
          return res.status(404).json({ error: "Запись не найдена" });
        }
        const synced = syncLocale(ruData[ruIndex], item);
        data[index] = synced;
        writeJsonLang(fileName, "en", data);
        return res.json({
          id: idField && synced[idField] != null ? String(synced[idField]) : String(index),
          index,
          item: synced,
        });
      }

      data[index] = item;
      writeJsonLang(fileName, "ru", data);

      const enData = readJsonLang(fileName, "en");
      const enIndex = idField ? findArrayIndex(enData, id) : index;
      if (enIndex !== -1) {
        enData[enIndex] = syncLocale(item, enData[enIndex]);
      } else {
        enData.push(cloneJson(item));
      }
      writeJsonLang(fileName, "en", enData);

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
      const lang = langFromQuery(req);
      const data = readJsonLang(fileName, lang);
      const id = decodeParam(req.params.id);

      if (kind === "object") {
        if (!data[id]) {
          return res.status(404).json({ error: "Запись не найдена" });
        }
        delete data[id];
        writeJsonLang(fileName, lang, data);

        const altLang = otherLang(lang);
        const altData = readJsonLang(fileName, altLang);
        if (altData[id]) {
          delete altData[id];
          writeJsonLang(fileName, altLang, altData);
        }
        return res.json({ ok: true });
      }

      const index = findArrayIndex(data, id);
      if (index === -1) {
        return res.status(404).json({ error: "Запись не найдена" });
      }

      data.splice(index, 1);
      writeJsonLang(fileName, lang, data);

      const altLang = otherLang(lang);
      const altData = readJsonLang(fileName, altLang);
      const altIndex = idField ? findArrayIndex(altData, id) : index;
      if (altIndex !== -1) {
        altData.splice(altIndex, 1);
        writeJsonLang(fileName, altLang, altData);
      }
      res.json({ ok: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = createResourceRouter;
