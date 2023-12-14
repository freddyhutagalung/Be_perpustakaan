const express = require("express");
const router = express.Router();
const AnggotaRouter = require("./anggota");
const bukuRouter = require("./buku");
const peminjamanRouter = require("./peminjaman");
const pengembalianRouter = require("./pengembalian");
const peminjaman_detailRouter = require("./peminjaman_detail");
const pengembalian_detailRouter = require("./pengembalian_detail");
const pengarangRouter = require("./pengarang");
const penerbitRouter = require("./penerbit");
const CatagoryRouter = require("../routes/catagorys");
const UsersRouter = require("./users");
const rakRouter = require("./rak");

router.use("/anggota", AnggotaRouter);
router.use("/buku", bukuRouter);
router.use("/peminjaman", peminjamanRouter);
router.use("/pengembalian", pengembalianRouter);
router.use("/peminjaman_detail", peminjaman_detailRouter);
router.use("/pengembalian_detail", pengembalian_detailRouter);
router.use("/pengarang", pengarangRouter);
router.use("/penerbit", penerbitRouter);
router.use("/catagorys", CatagoryRouter);
router.use("/users", UsersRouter);
router.use("/rak", rakRouter);

module.exports = router;
