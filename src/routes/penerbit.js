const express = require("express");
const router = express.Router();
const penerbitController = require("../controller/penerbit");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", penerbitController.getAllpenerbit)
  .get("/search/", penerbitController.getSearchpenerbit)
  .get("/:id", penerbitController.getDetailpenerbit)
  .post("/", upload, penerbitController.createpenerbit)
  .put("/:id", upload, penerbitController.updatepenerbit)
  .delete("/:id", penerbitController.deletepenerbit);

module.exports = router;
