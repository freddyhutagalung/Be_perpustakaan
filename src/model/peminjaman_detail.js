const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM peminjaman_detail where 	buku_id ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpeminjaman_detail = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM peminjaman_detail  where 	buku_id ilike '%${keyword}%'`);
};

const select = (id_peminjaman_detail) => {
  return Pool.query(`SELECT * FROM peminjaman_detail  WHERE id_peminjaman_detail='${id_peminjaman_detail}'`);
};
const insert = (data) => {
  const { id_peminjaman_detail, buku_id } = data;
  return Pool.query(`INSERT INTO peminjaman_detail ( id_peminjaman_detail, buku_id) VALUES (${id_peminjaman_detail},'${buku_id}')`);
};
const update = (data) => {
  const { id_peminjaman_detail, buku_id} = data;
  return Pool.query(`UPDATE peminjaman_detail  SET buku_id='${buku_id}' WHERE id='${id_peminjaman_detail}'`);
};
const deleteData = (id_peminjaman_detail) => {
  return Pool.query(`DELETE FROM peminjaman_detail  WHERE id_peminjaman_detail=${id_peminjaman_detail}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM peminjaman_detail ");
};

const findId = (id_peminjaman_detail) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_peminjaman_detail FROM peminjaman_detail  WHERE id_peminjaman_detail=${id_peminjaman_detail}`, (error, result) => {
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
  selectSearchpeminjaman_detail,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
