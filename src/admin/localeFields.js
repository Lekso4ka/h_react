const SHARED_FIELD_TYPES = new Set([
  "image",
  "images",
  "video",
  "boolean",
  "number",
  "checkboxList",
  "select",
]);

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
  "reservation_period",
  "dates_of_stay",
]);

export function isSharedKey(key) {
  if (SHARED_KEYS.has(key)) return true;
  if (/(_link|_src|_preview)$/.test(key) && key !== "img_text") return true;
  if (/^(video_|winter_video|summer_video)/.test(key)) return true;
  if (/^image_\d+$/.test(key) || /^img_\d+$/.test(key)) return true;
  return false;
}

export function isSharedField(key, def) {
  if (!def) return isSharedKey(key);
  if (SHARED_FIELD_TYPES.has(def.type)) return true;
  if (def.type === "stringList" && isSharedKey(key)) return true;
  if ((def.type === "string" || def.type === "textarea") && isSharedKey(key)) {
    return true;
  }
  return false;
}
