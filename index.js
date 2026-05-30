const path = require("node:path");
const exp = require("express")
const app = exp()
app.use(exp.static("./static"))

app.get("*", (q, s) => s.sendFile(path.join(__dirname, "static", "index.html")))

app.listen(2026)
