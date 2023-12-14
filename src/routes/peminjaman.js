const express = require("express");
const router = express.Router();
const peminjamanController = require("../controller/peminjaman");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", peminjamanController.getAllpeminjaman)
  .get("/search/", peminjamanController.getSearchpeminjaman)
  .get("/:id", peminjamanController.getDetailpeminjaman)
  .post("/", upload, peminjamanController.createpeminjaman)
  .put("/:id", upload, peminjamanController.updatepeminjaman)
  .delete("/:id", peminjamanController.deletepeminjaman);

module.exports = router;
