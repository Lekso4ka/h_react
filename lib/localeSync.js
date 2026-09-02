function clone(value) {
  return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
}

const SHARED_KEYS = new Set([
  "id",
  "key",
  "link",
  "href",
  "url",
  "src",
  "img",
  "image",
  "images",
  "pic",
  "banner",
  "bg",
  "preview",
  "video",
  "phone",
  "date",
  "time",
  "start",
  "end",
  "pos",
  "position",
  "order",
  "type",
  "layout",
  "variant",
  "hotel",
  "hotels",
  "stars",
  "size",
  "guests",
  "rooms",
  "plan",
  "plan_rotate",
  "digit",
  "default_season",
  "hasMenu",
  "show_formats",
  "tour_link",
  "menu_link",
  "room_link",
  "events_link",
  "subLink",
  "subImage",
  "variants",
  "winter_video",
  "summer_video",
  "winter_video_preview",
  "summer_video_preview",
  "video_src",
  "video_preview",
  "video_link",
  "preview_image",
  "image_1",
  "image_2",
  "image_3",
  "image_4",
  "image_5",
  "img_1",
  "img_2",
  "reservation_period",
  "dates_of_stay",
]);

const TEXT_KEYS = new Set([
  "name",
  "title",
  "label",
  "text",
  "tooltip",
  "caption",
  "tagline",
  "subtitle",
  "description",
  "keywords",
  "address",
  "beds",
  "view",
  "additional",
  "listIntro",
  "textAfter",
  "freeTitle",
  "paidTitle",
  "downloadLabel",
  "pageTitle",
  "docTitle",
  "seasonLabel",
  "subTitle",
  "subText",
  "img_text",
  "name_tooltip",
  "guests_tooltip",
  "caption_tooltip",
  "mobile_address",
  "mobile_address_title",
  "winter_title",
  "summer_title",
  "title_accent",
  "text_accent",
  "text_1",
  "text_2",
  "text_top",
  "text_bottom",
  "caption_1",
  "caption_2",
  "season_label_winter",
  "season_label_summer",
  "season_text",
  "tooltip_main",
]);

function isSharedKey(key) {
  if (SHARED_KEYS.has(key)) return true;
  if (/(_link|_src|_preview)$/.test(key) && key !== "img_text") return true;
  if (/^(video_|winter_video|summer_video)/.test(key)) return true;
  if (/^image_\d+$/.test(key) || /^img_\d+$/.test(key)) return true;
  return false;
}

function isTextKey(key) {
  if (TEXT_KEYS.has(key)) return true;
  if (/(_title|_text|_accent|_tooltip|_label)$/.test(key)) return true;
  if (/^(caption_|text_|season_label_)/.test(key)) return true;
  return false;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function looksSharedString(value) {
  if (typeof value !== "string" || value === "") return false;
  if (
    /^(https?:)?\/\//.test(value) ||
    value.startsWith("/") ||
    value.startsWith("#") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:")
  ) {
    return true;
  }
  if (/\.(jpe?g|png|gif|webp|svg|mp4|webm|mov)(\?|$)/i.test(value)) return true;
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i.test(value)) {
    return true;
  }
  if (/^\+?\d[\d\s()-]{5,}$/.test(value)) return true;
  return false;
}

function pickText(enVal, ruVal) {
  if (typeof ruVal === "string") {
    if (typeof enVal === "string" && enVal.trim() !== "") return enVal;
    return ruVal;
  }
  if (isStringArray(ruVal)) {
    return ruVal.map((item, index) => {
      const enItem = isStringArray(enVal) ? enVal[index] : undefined;
      if (typeof enItem === "string" && enItem.trim() !== "") return enItem;
      return item;
    });
  }
  if (ruVal && typeof ruVal === "object") {
    return syncLocale(ruVal, enVal);
  }
  return clone(ruVal);
}

function syncLocaleAtKey(key, ruVal, enVal) {
  if (isSharedKey(key)) {
    if (ruVal && typeof ruVal === "object") {
      if (isStringArray(ruVal)) return clone(ruVal);
      if (Array.isArray(ruVal)) {
        return ruVal.map((item, index) => {
          const enItem = Array.isArray(enVal) ? enVal[index] : undefined;
          if (item && typeof item === "object" && !Array.isArray(item)) {
            return syncLocale(item, enItem);
          }
          return clone(item);
        });
      }
      return syncLocale(ruVal, enVal);
    }
    return clone(ruVal);
  }

  if (isTextKey(key)) {
    return pickText(enVal, ruVal);
  }

  if (typeof ruVal === "number" || typeof ruVal === "boolean" || ruVal == null) {
    return ruVal;
  }

  if (typeof ruVal === "string") {
    if (looksSharedString(ruVal) || looksSharedString(enVal)) return ruVal;
    return pickText(enVal, ruVal);
  }

  if (Array.isArray(ruVal) || (ruVal && typeof ruVal === "object")) {
    return syncLocale(ruVal, enVal);
  }

  return clone(ruVal);
}

/**
 * Structure, media, checkboxes and other shared fields come from `ru`.
 * Displayed text comes from `en` when present.
 */
function syncLocale(ru, en) {
  if (ru == null) return ru;

  if (Array.isArray(ru)) {
    if (isStringArray(ru)) {
      if (ru.some(looksSharedString) || (isStringArray(en) && en.some(looksSharedString))) {
        return clone(ru);
      }
      return pickText(en, ru);
    }
    return ru.map((item, index) =>
      syncLocale(item, Array.isArray(en) ? en[index] : undefined)
    );
  }

  if (typeof ru === "object") {
    const source = en && typeof en === "object" && !Array.isArray(en) ? en : {};
    const out = {};
    for (const key of Object.keys(ru)) {
      out[key] = syncLocaleAtKey(key, ru[key], source[key]);
    }
    return out;
  }

  return clone(ru);
}

module.exports = {
  syncLocale,
  isSharedKey,
  isTextKey,
  pickText,
};
