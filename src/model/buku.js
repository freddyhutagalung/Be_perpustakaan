const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM buku where 	judul ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchbuku = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM buku  where 	judul ilike '%${keyword}%'`);
};

const select = (id_buku) => {
  return Pool.query(`SELECT * FROM buku  WHERE id_buku='${id_buku}'`);
};
const insert = (data) => {
  const { id_buku, judul, tahun_terbit, jumlah, isbn, pengarang_id, penerbit_id, rak_kode_rak, foto } = data;
  return Pool.query(`INSERT INTO buku ( id_buku, judul, tahun_terbit, jumlah, isbn, pengarang_id, penerbit_id, rak_kode_rak, foto) VALUES (${id_buku},'${judul}','${tahun_terbit}','${jumlah}','${isbn}','${pengarang_id}','${penerbit_id}','${rak_kode_rak}','${foto}')`);
};
const update = (data) => {
  const { id_buku, judul, tahun_terbit, jumlah, isbn, pengarang_id, penerbit_id, rak_kode_rak, foto } = data;
  return Pool.query(`UPDATE buku  SET judul='${judul}', tahun_terbit='${tahun_terbit}', jumlah='${jumlah}', isbn='${isbn}',pengarang_id='${pengarang_id}',rak_kode_rak='${rak_kode_rak}' WHERE id='${id_buku}'`);
};
const deleteData = (id_buku) => {
  return Pool.query(`DELETE FROM buku  WHERE id_buku=${id_buku}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM buku ");
};

const findId = (id_buku) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_buku FROM buku  WHERE id_buku=${id_buku}`, (error, result) => {
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
  selectSearchbuku,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
