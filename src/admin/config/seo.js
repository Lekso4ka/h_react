export const seoFields = {
  title: { type: "string", label: "Title" },
  description: { type: "textarea", label: "Description" },
  keywords: { type: "string", label: "Keywords" },
};

export function seoSection(key = "seo") {
  return {
    title: "SEO",
    key,
    fields: seoFields,
  };
}

export function splitSeoSchema(schema) {
  const sections = schema?.sections || [];
  return {
    seoSchema: {
      sections: sections.filter((section) => section.title === "SEO"),
    },
    restSchema: {
      fields: schema?.fields,
      sections: sections.filter((section) => section.title !== "SEO"),
    },
  };
}
