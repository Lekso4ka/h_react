const path = require("node:path");
const exp = require("express");
const cors = require("cors");

const roomsRouter = require("./routes/rooms");
const uploadRouter = require("./routes/upload");
const authRouter = require("./routes/auth");
const createResourceRouter = require("./routes/resource");
const { authRequiredUnlessGet } = require("./middleware/auth");

const app = exp();
const PORT = process.env.PORT || 2026;

app.use(cors());
app.use(exp.json({ limit: "200mb" }));
app.use("/images", exp.static(path.join(__dirname, "images")));
app.use(exp.static("./static"));

app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
});

app.use("/api/auth", authRouter);

// Публичное чтение для сайта; запись — только с JWT
app.use("/api", authRequiredUnlessGet);

app.use("/api/rooms", roomsRouter);
app.use("/api/upload", uploadRouter);

app.use(
    "/api/activities",
    createResourceRouter({ fileName: "activities.json", kind: "object" })
);
app.use(
    "/api/hotels",
    createResourceRouter({ fileName: "hotels.json", kind: "object" })
);
app.use(
    "/api/venues",
    createResourceRouter({ fileName: "venues.json", kind: "object" })
);
app.use(
    "/api/affiche",
    createResourceRouter({ fileName: "affiche.json", kind: "array" })
);
app.use(
    "/api/doings",
    createResourceRouter({ fileName: "doings.json", kind: "array", idField: "id" })
);
app.use(
    "/api/stocks",
    createResourceRouter({ fileName: "stocks.json", kind: "array" })
);
app.use(
    "/api/vacancies",
    createResourceRouter({
        fileName: "vacancies.json",
        kind: "array",
    })
);
app.use(
    "/api/legal",
    createResourceRouter({ fileName: "legal.json", kind: "object" })
);

app.get("*splat", (_req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
