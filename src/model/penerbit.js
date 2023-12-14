const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM penerbit where 	id_penerbit ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpenerbit = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM penerbit  where 	id_penerbit ilike '%${keyword}%'`);
};

const select = (id_penerbit) => {
  return Pool.query(`SELECT * FROM penerbit  WHERE id_penerbit='${id_penerbit}'`);
};
const insert = (data) => {
  const { id_penerbit, nama, alamat, telepon} = data;
  return Pool.query(`INSERT INTO penerbit ( id_penerbit,nama,alamat,telepon ) VALUES (${id_penerbit},'${nama}','${alamat}','${telepon}')`);
};
const update = (data) => {
  const { id_penerbit, nama, alamat, telepon } = data;
  return Pool.query(`UPDATE penerbit  SET nama='${nama}', alamat='${alamat}', telepon='${telepon}' WHERE id='${id_penerbit}'`);
};
const deleteData = (id_penerbit) => {
  return Pool.query(`DELETE FROM penerbit  WHERE id_penerbit=${id_penerbit}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM penerbit ");
};

const findId = (id_penerbit) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_penerbit FROM penerbit  WHERE id_penerbit=${id_penerbit}`, (error, result) => {
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
  selectSearchpenerbit,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
