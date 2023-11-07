const Pool = require("../config/db");

const cerate = (data) => {
  const { id_petugas, username, passwordHash, nama, telepon, email } = data;
  return new Promise((resolve, reject) =>
    Pool.query(`INSERT INTO petugas ( id_petugas, username ,password,nama,telepon,email) VALUES('${id_petugas}','${username}','${passwordHash}','${nama}','${telepon}','${email}')`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

const findEmail = (email) => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM petugas WHERE email = '${email}' `, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  cerate,
  findEmail,
};
