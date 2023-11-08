const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM anggota where 	nama ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchAnggota = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM anggota  where 	nama ilike '%${keyword}%'`);
};

const select = (id_anggota) => {
  return Pool.query(`SELECT * FROM anggota  WHERE id_anggota='${id_anggota}'`);
};
const insert = (data) => {
  const { id_anggota, nim_nidn, nama, jenis_kelamin, telepon, email, foto } = data;
  return Pool.query(`INSERT INTO anggota ( id_anggota,nim_nidn,nama,jenis_kelamin,telepon,email,foto ) VALUES (${id_anggota},'${nim_nidn}','${nama}','${jenis_kelamin}','${telepon}','${email}','${foto}')`);
};
const update = (data) => {
  const { id_anggota, nim_nidn, nama, jenis_kelamin, telepon, email, foto } = data;
  return Pool.query(`UPDATE anggota  SET nim_nidn='${nim_nidn}', nama='${nama}', jenis_kelamin='${jenis_kelamin}', telepon='${telepon}',email='${email}',foto='${foto}' WHERE id='${id_anggota}'`);
};
const deleteData = (id_anggota) => {
  return Pool.query(`DELETE FROM anggota  WHERE id_anggota=${id_anggota}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM anggota ");
};

const findId = (id_anggota) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_anggota FROM anggota  WHERE id_anggota=${id_anggota}`, (error, result) => {
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
