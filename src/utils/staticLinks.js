import { STATIC_LINK_MAP } from "../data/linkCatalog";

let overrides = {};

export function applyStaticLinks(items) {
  const next = {};
  if (items && typeof items === "object") {
    for (const [key, value] of Object.entries(items)) {
      if (!STATIC_LINK_MAP[key] || !value || typeof value !== "object") continue;
      next[key] = {
        href: typeof value.href === "string" ? value.href : "",
        label: typeof value.label === "string" ? value.label : "",
      };
    }
  }
  overrides = next;
}

export function siteLink(key) {
  const slot = STATIC_LINK_MAP[key];
  if (!slot) return "";
  if (Object.prototype.hasOwnProperty.call(overrides, key)) return overrides[key].href;
  return slot.href || "";
}

export function siteLinkLabel(key) {
  const slot = STATIC_LINK_MAP[key];
  if (!slot) return "";
  const stored = overrides[key];
  if (stored && stored.label) return stored.label;
  return slot.label || "";
}

export function anchorProps(href) {
  const value = String(href || "").trim();
  if (!value || value === "#") {
    return {
      href: value || undefined,
      onClick: (event) => event.preventDefault(),
    };
  }
  const web = /^https?:/i.test(value);
  return {
    href: value,
    ...(web ? { target: "_blank", rel: "noopener noreferrer" } : {}),
  };
}
