const mysql = require('mysql2');
const { dbconfig } = require("../config/db.config.js")

const pool = mysql.createPool({
    host: dbconfig.db.HOST,
    user: dbconfig.db.USER,
    password: dbconfig.db.PASSWORD,
    database: dbconfig.db.DB,
}).promise()

pool.getConnection()
    .then(async (connection) => {
        console.log('Server đã kết nối thành công với MySQL.');
    })
    .catch((err) => {
        console.error('Lỗi kết nối khi kết nối với MySQL: ', err);
        pool.end(); // Đóng pool nếu không thể kết nối
    });

module.exports = {
    pool
};