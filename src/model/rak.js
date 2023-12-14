const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM rak where 	kode_rak ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchrak = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM rak  where 	kode_rak ilike '%${keyword}%'`);
};

const select = (kode_rak) => {
  return Pool.query(`SELECT * FROM rak  WHERE kode_rak='${kode_rak}'`);
};
const insert = (data) => {
  const { kode_rak, lokasi } = data;
  return Pool.query(`INSERT INTO rak ( kode_rak, lokasi) VALUES (${kode_rak},'${lokasi}')`);
};
const update = (data) => {
  const { kode_rak, lokasi} = data;
  return Pool.query(`UPDATE rak  SET lokasi='${lokasi}' WHERE id='${kode_rak}'`);
};
const deleteData = (kode_rak) => {
  return Pool.query(`DELETE FROM rak  WHERE kode_rak=${kode_rak}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM rak ");
};

const findId = (kode_rak) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT kode_rak FROM rak  WHERE kode_rak=${kode_rak}`, (error, result) => {
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
  selectSearchrak,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
