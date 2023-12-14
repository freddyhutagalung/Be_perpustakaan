const express = require("express");
const router = express.Router();
const peminjaman_detailController = require("../controller/peminjaman_detail");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const pengembalian_detailController = require("../controller/pengembalian_detail");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", pengembalian_detailController.getAllpengembalian_detail)
  .get("/search/", pengembalian_detailController.getSearchpengembalian_detail)
  .get("/:id", pengembalian_detailController.getDetailpengembalian_detail)
  .post("/", upload, pengembalian_detailController.createpengembalian_detail)
  .put("/:id", upload, pengembalian_detailController.updatepengembalian_detail)
  .delete("/:id", pengembalian_detailController.deletepengembalian_detail);

module.exports = router;
