const express = require("express");
const router = express.Router();
const bukuController = require("../controller/buku");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", bukuController.getAllbuku)
  .get("/search/", bukuController.getSearchbuku)
  .get("/:id", bukuController.getDetailbuku)
  .post("/", upload, bukuController.createbuku)
  .put("/:id", upload, bukuController.updatebuku)
  .delete("/:id", bukuController.deletebuku);

module.exports = router;
