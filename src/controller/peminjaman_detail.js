const createError = require("http-errors");
const { selectAll, selectSearchpeminjaman_detail, select, insert, update, deleteData, countData, findId } = require("../model/peminjaman_detail");
const commonHelper = require("../helper/common");
const cloudinary = require("../middlewares/cloudinary");

const Joi = require("joi");
// const user = require('../controller/users')
const peminjaman_detailController = {
  getAllpeminjaman_detail: async (req, res, next) => {
    try {
      const keyword = req.query.keyword || "";
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "id_peminjaman_detail";
      const sort = req.query.sort || "ASC";
      const result = await selectAll({ limit, offset, sort, sortby, keyword });
      const {
        rows: [count],
      } = await countData();
      const totalData = parseInt(count.count);
      const totalPage = Math.ceil(totalData / limit);
      const pagination = {
        currentPage: page,
        limit: limit,
        totalData: totalData,
        totalPage: totalPage,
      };
      // res.send(result)
      commonHelper.response(res, result.rows, 200, "get data success", pagination);
    } catch (error) {
      console.log(error);
    }
  },
  getSearchpeminjaman_detail: async (req, res, next) => {
    try {
      const sort = req.query.sort || "ASC";
      const keyword = req.query.keyword || "";
      const result = await selectSearchpeminjaman_detail({ keyword, sort });
      // res.send(result)
      commonHelper.response(res, result.rows, 200, "get data success");
    } catch (error) {
      console.log(error);
    }
  },
  getDetailpeminjaman_detail: async (req, res, next) => {
    const id = Number(req.params.id);
    const { rowCount } = await findId(id);
    if (!rowCount) {
      return next(createError(403, "ID is Not Found"));
    }
    select(id)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, "get data success from database", {});
      })
      .catch((err) => res.send(err));
  },
  createpeminjaman_detail: async (req, res, next) => {
    const { buku_id } = req.body;
    const Schema = Joi.object({
      buku_id: Joi.string().required()
    });
    const results = Schema.validate(req.body);
    const { value, error } = results;

    if (error) {
      return commonHelper.response(res, results.rows, 422, error.message);
    }

    const {
      rows: [count],
    } = await countData();
    const id_peminjaman_detail = Number(count.count) + 1;

    const PORT = process.env.PORT || 4000;
    const DB_HOST = process.env.DB_HOST || "localhost";

    const data = {
      id_peminjaman_detail,
      buku_id
    };
    // console.log(data)
    insert(data)
      .then((result) => commonHelper.response(res, data, 201, "Product created", {}))
      .catch((err) => res.send(err));
  },
  updatepeminjaman_detail: async (req, res, next) => {
    try {
      const PORT = process.env.PORT || 4000;
      const DB_HOST = process.env.DB_HOST || "localhost";
      const id = Number(req.params.id);
      const result = await cloudinary.uploader.upload(req.file.path);
      const foto = result.secure_url;
      // const cloudinary_id = result.public_id;
      const { buku_id} = req.body;

      const Schema = Joi.object({
      buku_id: Joi.string().required()
      });
      const results = Schema.validate(req.body);
      const { value, error } = results;

      if (error) {
        return commonHelper.response(res, results.rows, 422, error.message);
      }

      const { rowCount } = await findId(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      const data = {
        id_peminjaman_detail,
        buku_id
      };
      console.log(data);
      update(data)
        .then((result) => commonHelper.response(res, data, 200, "Articel updated", {}))
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deletepeminjaman_detail: async (req, res, next) => {
    try {
      const id = Number(req.params.id);
      const { rowCount } = await findId(id);
      if (!rowCount) {
        return next(createError(403, "ID is Not Found"));
      }
      deleteData(id)
        .then((result) => commonHelper.response(res, result.rows, 200, "Product deleted", {}))
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = peminjaman_detailController;
