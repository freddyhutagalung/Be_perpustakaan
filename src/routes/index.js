const express = require("express");
const router = express.Router();
const AnggotaRouter = require("./anggota");
const CatagoryRouter = require("../routes/catagorys");
const UsersRouter = require("./users");

router.use("/anggota", AnggotaRouter);
router.use("/catagorys", CatagoryRouter);
router.use("/users", UsersRouter);

module.exports = router;
