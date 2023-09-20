const { pool } = require("../models/db.js");

// Lay tat ca status
async function getAllStatus() {
    const [rows] = await pool.query("select * from status order by id")
    return rows
}

async function getStatusById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM status
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function deleteStatusById(id) {
    try {
        await pool.query(`
    DELETE
    FROM status
    WHERE id = ?
    `, [id])
        return "Xoá Trạng Thái thành công"
    } catch (error) {
        return error;
    }
}

async function createStatus(name) {
    const [result] = await pool.query(`
    INSERT INTO status(name)
    VALUES (?)
    `, [name])
    const id = result.insertId;
    return getStatusById(id);
}

module.exports = {
    getAllStatus,
    getStatusById,
    createStatus,
    deleteStatusById
};
