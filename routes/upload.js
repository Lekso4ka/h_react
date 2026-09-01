const express = require("express");
const { uploadImage, uploadVideo } = require("../middleware/upload");

const router = express.Router();

router.post("/", uploadImage.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Файл не получен" });
  }

  res.status(201).json({
    filename: req.file.filename,
    url: `/images/${req.file.filename}`,
    originalName: req.file.originalname,
    type: "image",
  });
});

router.post("/multiple", uploadImage.array("images", 20), (req, res) => {
  if (!req.files?.length) {
    return res.status(400).json({ error: "Файлы не получены" });
  }

  res.status(201).json({
    files: req.files.map((file) => ({
      filename: file.filename,
      url: `/images/${file.filename}`,
      originalName: file.originalname,
      type: "image",
    })),
  });
});

router.post("/video", uploadVideo.single("video"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Видеофайл не получен" });
  }

  res.status(201).json({
    filename: req.file.filename,
    url: `/images/${req.file.filename}`,
    originalName: req.file.originalname,
    type: "video",
  });
});

module.exports = router;
