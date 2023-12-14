const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM peminjaman where 	tanggal_kembali ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpeminjaman = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM peminjaman  where 	tanggal_kembali ilike '%${keyword}%'`);
};

const select = (id_peminjaman) => {
  return Pool.query(`SELECT * FROM peminjaman  WHERE id_peminjaman='${id_peminjaman}'`);
};
const insert = (data) => {
  const { id_peminjaman, tanggal_kembali, nama, anggota_id, petugas_id } = data;
  return Pool.query(`INSERT INTO peminjaman ( id_peminjaman, tanggal_kembali, nama, anggota_id, petugas_id) VALUES (${id_peminjaman},'${tanggal_kembali}','${nama}','${anggota_id}','${petugas_id}')`);
};
const update = (data) => {
  const { id_peminjaman, tanggal_kembali, nama, anggota_id, petugas_id } = data;
  return Pool.query(`UPDATE peminjaman  SET tanggal_kembali='${tanggal_kembali}', nama='${nama}', anggota_id='${anggota_id}', petugas_id='${petugas_id}' WHERE id='${id_peminjaman}'`);
};
const deleteData = (id_peminjaman) => {
  return Pool.query(`DELETE FROM peminjaman  WHERE id_peminjaman=${id_peminjaman}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM peminjaman ");
};

const findId = (id_peminjaman) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_peminjaman FROM peminjaman  WHERE id_peminjaman=${id_peminjaman}`, (error, result) => {
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
  selectSearchpeminjaman,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
