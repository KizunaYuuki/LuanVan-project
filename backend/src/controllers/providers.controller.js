const { pool } = require("../models/db.js");

// Lay tat ca providers
async function getProviders() {
    const [rows] = await pool.query("select * from providers")
    return rows
}

// Lay mot providers theo id
async function getProviderById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM providers
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Xoa mot providers theo id
async function deleteProviderById(id) {
    try {
        await pool.query(`
    DELETE
    FROM providers
    WHERE id = ?
    `, [id])
        return "Xoá Nhà cung cấp dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Tao providers
async function createProviders(name, phone, email, address, image_url) {
    const [result] = await pool.query(`
    INSERT INTO providers (name, phone, email, address, image_url)
    VALUES (?, ?, ?, ?, ?)
    `, [name, phone, email, address, image_url])
    const id = result.insertId;
    return getProviderById(id);
}

module.exports = {
    getProviders,
    getProviderById,
    deleteProviderById,
    createProviders
};
