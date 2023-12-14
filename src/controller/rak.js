const createError = require("http-errors");
const { selectAll, selectSearchrak, select, insert, update, deleteData, countData, findId } = require("../model/rak");
const commonHelper = require("../helper/common");
const cloudinary = require("../middlewares/cloudinary");

const Joi = require("joi");
// const user = require('../controller/users')
const rakController = {
  getAllrak: async (req, res, next) => {
    try {
      const keyword = req.query.keyword || "";
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const sortby = req.query.sortby || "kode_rak";
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
  getSearchrak: async (req, res, next) => {
    try {
      const sort = req.query.sort || "ASC";
      const keyword = req.query.keyword || "";
      const result = await selectSearchrak({ keyword, sort });
      // res.send(result)
      commonHelper.response(res, result.rows, 200, "get data success");
    } catch (error) {
      console.log(error);
    }
  },
  getDetailrak: async (req, res, next) => {
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
  createrak: async (req, res, next) => {
    const { lokasi } = req.body;
    const Schema = Joi.object({
      lokasi: Joi.string().required()
    });
    const results = Schema.validate(req.body);
    const { value, error } = results;

    if (error) {
      return commonHelper.response(res, results.rows, 422, error.message);
    }

    const {
      rows: [count],
    } = await countData();
    const kode_rak = Number(count.count) + 1;

    const PORT = process.env.PORT || 4000;
    const DB_HOST = process.env.DB_HOST || "localhost";

    const data = {
      kode_rak,
      lokasi
    };
    // console.log(data)
    insert(data)
      .then((result) => commonHelper.response(res, data, 201, "Product created", {}))
      .catch((err) => res.send(err));
  },
  updaterak: async (req, res, next) => {
    try {
      const PORT = process.env.PORT || 4000;
      const DB_HOST = process.env.DB_HOST || "localhost";
      const id = Number(req.params.id);
      const result = await cloudinary.uploader.upload(req.file.path);
      const foto = result.secure_url;
      // const cloudinary_id = result.public_id;
      const { lokasi} = req.body;

      const Schema = Joi.object({
      lokasi: Joi.string().required()
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
        kode_rak,
        lokasi
      };
      console.log(data);
      update(data)
        .then((result) => commonHelper.response(res, data, 200, "Articel updated", {}))
        .catch((err) => res.send(err));
    } catch (error) {
      console.log(error);
    }
  },
  deleterak: async (req, res, next) => {
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

module.exports = rakController;
