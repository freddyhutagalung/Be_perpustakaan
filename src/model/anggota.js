const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM anggota where 	title ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchAnggota = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM anggota  where 	title ilike '%${keyword}%'`);
};

const select = (id) => {
  return Pool.query(`SELECT * FROM anggota  WHERE id='${id}'`);
};
const insert = (data) => {
  const { id_anggota, nim_nidn, nama, jenis_kelamin, telepon, email, foto } = data;
  return Pool.query(`INSERT INTO anggota ( id_anggota,nim_nidn,nama,jenis_kelamin,telepon,email,foto ) VALUES (${id_anggota},'${nim_nidn}','${nama}','${jenis_kelamin}','${telepon}','${email}','${foto}')`);
};
const update = (data) => {
  const { id_anggota, nim_nidn, nama, jenis_kelamin, telepon, email, foto } = data;
  return Pool.query(`UPDATE anggota  SET nim_nidn='${nim_nidn}', nama='${nama}', jenis_kelamin='${jenis_kelamin}', telepon='${telepon}',email='${email}',foto='${foto}' WHERE id='${id_anggota}'`);
};
const deleteData = (id) => {
  return Pool.query(`DELETE FROM anggota  WHERE id=${id}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM anggota ");
};

const findId = (id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id FROM anggota  WHERE id=${id}`, (error, result) => {
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
  selectSearchAnggota,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
