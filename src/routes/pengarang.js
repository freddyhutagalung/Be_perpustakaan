const express = require("express");
const router = express.Router();
const pengarangController = require("../controller/pengarang");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", pengarangController.getAllpengarang)
  .get("/search/", pengarangController.getSearchpengarang)
  .get("/:id", pengarangController.getDetailpengarang)
  .post("/", upload, pengarangController.createpengarang)
  .put("/:id", upload, pengarangController.updatepengarang)
  .delete("/:id", pengarangController.deletepengarang);

module.exports = router;
