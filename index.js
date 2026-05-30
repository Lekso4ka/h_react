const path = require("node:path");
const exp = require("express")
const app = exp()
app.use(exp.static("./static"))

app.get("*", (q, s) => s.sendFile(path.resolve(process.cwd(), "static", "index.html")))

app.listen(2026)