const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const imagesDir = path.join(__dirname, "..", "images");

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, imagesDir);
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || "";
    cb(null, `${uuidv4()}${ext}`);
  },
});

const uploadImage = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/^image\//.test(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error("Only image files are allowed"));
  },
});

const uploadVideo = multer({
  storage,
  limits: { fileSize: 200 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (/^video\//.test(file.mimetype)) {
      cb(null, true);
      return;
    }
    cb(new Error("Only video files are allowed"));
  },
});

module.exports = {
  uploadImage,
  uploadVideo,
};
