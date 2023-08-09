import mysql from 'mysql2'
import { dbconfig } from '../config/db.config.js'

const pool = mysql.createPool({
    host: dbconfig.db.HOST,
    user: dbconfig.db.USER,
    password: dbconfig.db.PASSWORD,
    database: dbconfig.db.DB,
}).promise()

pool.getConnection()
    .then(async (connection) => {
        console.log('Hệ thống đã kết nối thành công với MySQL.');

        // Ví dụ truy vấn
        const query = 'SELECT * FROM notes';
        try {
            const results = await connection.query(query);
            // console.log('Kết quả truy vấn: ', results);
            connection.release(); // Trả kết nối vào pool sau khi sử dụng xong
            pool.end(); // Đóng pool sau khi sử dụng xong (nếu không cần kết nối nữa)
        } catch (err) {
            console.error('Lỗi truy vấn: ', err);
            connection.release(); // Trả kết nối vào pool nếu xảy ra lỗi
            pool.end(); // Đóng pool nếu xảy ra lỗi
        }
    })
    .catch((err) => {
        console.error('Lỗi kết nối: ', err);
        pool.end(); // Đóng pool nếu không thể kết nối
    });

export async function getNotes() {
    const [rows] = await pool.query("select * from notes")
    return rows
}

export async function getNote(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM notes
    WHERE id = ?
    `, [id])
    return rows[0]
}

export async function createNote(title, contents) {
    const [result] = await pool.query(`
    INSERT INTO notes (title, contents)
    VALUES (?, ?)
    `, [title, contents])
    const id = result.insertId;
    return getNote(id);
}
