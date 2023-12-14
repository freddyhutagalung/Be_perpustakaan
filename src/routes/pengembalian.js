const express = require("express");
const router = express.Router();
const pengembalianController = require("../controller/pengembalian");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", pengembalianController.getAllpengembalian)
  .get("/search/", pengembalianController.getSearchpengembalian)
  .get("/:id", pengembalianController.getDetailpengembalian)
  .post("/", upload, pengembalianController.createpengembalian)
  .put("/:id", upload, pengembalianController.updatepengembalian)
  .delete("/:id", pengembalianController.deletepengembalian);

module.exports = router;
