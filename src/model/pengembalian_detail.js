const Pool = require("../config/db");
const selectAll = ({ limit, offset, sort, sortby, keyword }) => {
  return Pool.query(`SELECT * FROM pengembalian_detail where 	buku_id ilike '%${keyword}%' ORDER BY ${sortby} ${sort} LIMIT ${limit} OFFSET ${offset}`);
};

const selectSearchpengembalian_detail = ({ keyword, sort }) => {
  return Pool.query(`SELECT * FROM pengembalian_detail  where 	buku_id ilike '%${keyword}%'`);
};

const select = (pengembalian_id) => {
  return Pool.query(`SELECT * FROM pengembalian_detail  WHERE pengembalian_id='${pengembalian_id}'`);
};
const insert = (data) => {
  const { pengembalian_id, buku_id } = data;
  return Pool.query(`INSERT INTO pengembalian_detail ( pengembalian_id, buku_id) VALUES (${pengembalian_id},'${buku_id}')`);
};
const update = (data) => {
  const { pengembalian_id, buku_id} = data;
  return Pool.query(`UPDATE pengembalian_detail  SET buku_id='${buku_id}' WHERE id='${pengembalian_id}'`);
};
const deleteData = (pengembalian_id) => {
  return Pool.query(`DELETE FROM pengembalian_detail  WHERE pengembalian_id=${pengembalian_id}`);
};

const countData = () => {
  return Pool.query("SELECT COUNT(*) FROM pengembalian_detail ");
};

const findId = (pengembalian_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT pengembalian_id FROM pengembalian_detail  WHERE pengembalian_id=${pengembalian_id}`, (error, result) => {
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
  selectSearchpengembalian_detail,
  select,
  insert,
  update,
  deleteData,
  countData,
  findId,
};
