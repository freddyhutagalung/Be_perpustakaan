const express = require("express");
const router = express.Router();
const peminjaman_detailController = require("../controller/peminjaman_detail");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", peminjaman_detailController.getDetailpeminjaman_detail)
  .get("/search/", peminjaman_detailController.getSearchpeminjaman_detail)
  .get("/:id", peminjaman_detailController.getDetailpeminjaman_detail)
  .post("/", upload, peminjaman_detailController.createpeminjaman_detail)
  .put("/:id", upload, peminjaman_detailController.updatepeminjaman_detail)
  .delete("/:id", peminjaman_detailController.deletepeminjaman_detail);

module.exports = router;
