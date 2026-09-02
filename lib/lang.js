function langFromQuery(req) {
  return req?.query?.lang === "en" ? "en" : "ru";
}

function otherLang(lang) {
  return lang === "en" ? "ru" : "en";
}

function fileNameFor(fileName, lang) {
  if (lang === "en") {
    return String(fileName).replace(/\.json$/i, "_en.json");
  }
  return fileName;
}

module.exports = {
  langFromQuery,
  otherLang,
  fileNameFor,
};
