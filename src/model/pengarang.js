const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM pengarang where 	nama ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpengarang = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM pengarang  where 	id_pengarang ilike '%${keyword}%'`);
};

const select = (id_pengarang) => {
  return Pool.query(`SELECT * FROM pengarang  WHERE id_pengarang='${id_pengarang}'`);
};
const insert = (data) => {
  const { id_pengarang, nama, alamat, telepon} = data;
  return Pool.query(`INSERT INTO pengarang ( id_pengarang,nama,alamat,telepon ) VALUES (${id_pengarang},'${nama}','${alamat}','${telepon}')`);
};
const update = (data) => {
  const { id_pengarang, nama, alamat, telepon } = data;
  return Pool.query(`UPDATE pengarang  SET nama='${nama}', alamat='${alamat}', telepon='${telepon}' WHERE id='${id_pengarang}'`);
};
const deleteData = (id_pengarang) => {
  return Pool.query(`DELETE FROM pengarang  WHERE id_pengarang=${id_pengarang}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM pengarang ");
};

const findId = (id_pengarang) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT id_pengarang FROM pengarang  WHERE id_pengarang=${id_pengarang}`, (error, result) => {
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
  selectSearchpengarang,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
