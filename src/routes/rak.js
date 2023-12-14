const express = require("express");
const router = express.Router();
const rakController = require("../controller/rak");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");


router
  .get("/", rakController.getAllrak)
  .get("/search/", rakController.getSearchrak)
  .get("/:id", rakController.getDetailrak)
  .post("/", upload, rakController.createrak)
  .put("/:id", upload, rakController.updaterak)
  .delete("/:id", rakController.deleterak);

module.exports = router;
