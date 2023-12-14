const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM pengembalian where tanggal_pengembalian ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpengembalian = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM pengembalian  where 	tanggal_pengembalian  ilike '%${keyword}%'`);
};

const select = (id_pengembalian) => {
  return Pool.query(`SELECT * FROM pengembalian  WHERE id_pengembalian='${id_pengembalian}'`);
};
const insert = (data) => {
  const { id_pengembalian, tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id } = data;
  return Pool.query(`INSERT INTO pengembalian ( id_pengembalian, tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id) VALUES (${id_pengembalian},'${tanggal_pengembalian}','${denda}','${peminjaman_id}','${anggota_id}','${petugas_id}')`);
};
const update = (data) => {
  const { id_pengembalian, tanggal_pengembalian, denda, peminjaman_id, anggota_id, petugas_id  } = data;
  return Pool.query(`UPDATE pengembalian  SET tanggal_pengembalian='${tanggal_pengembalian}', denda='${denda}', peminjaman_id='${peminjaman_id}', anggota_id='${anggota_id}', petugas_id='${petugas_id}' WHERE id='${id_pengembalian}'`);
};
const deleteData = (id_pengembalian) => {
  return Pool.query(`DELETE FROM pengembalian  WHERE id_pengembalian=${id_pengembalian}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM pengembalian ");
};

const findId = (id_pengembalian) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_pengembalian FROM pengembalian  WHERE id_pengembalian=${id_pengembalian}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  selectAll,
  selectSearchpengembalian,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
