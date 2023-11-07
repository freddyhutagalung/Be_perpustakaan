const express = require("express");
const router = express.Router();
const anggotaController = require("../controller/anggota");
// const { protect } = require("../middlewares/auth");
const upload = require("../middlewares/upload");
// const { hitCacheProductDetail, clearCacheProductDetail } = require("../middlewares/redis");
// const { validate, myCors } = require("../middlewares/common");

router
  .get("/", anggotaController.getAllAnggota)
  .get("/search/", anggotaController.getSearchAnggota)
  .get("/:id", anggotaController.getDetailAnggota)
  .post("/", upload, anggotaController.createAnggota)
  .put("/:id", upload, anggotaController.updateAnggota)
  .delete("/:id", anggotaController.deleteAnggota);

module.exports = router;
