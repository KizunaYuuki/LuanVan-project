const { pool } = require("../models/db.js");

// Lay tat ca carts
async function getCarts() {
    const [rows] = await pool.query("select * from carts")
    return rows
}

// Lay cac carts cua mot service theo serviceId
async function getCartsByServiceId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM carts
    WHERE service_id = ?
    `, [id])
    return rows
}

// Lay cac carts cua mot user theo userId
async function getCartsByUserId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM carts
    WHERE user_id = ?
    `, [id])
    return rows
}

// Lay mot carts theo id
async function getCartById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM carts
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Xoa mot carts theo id
async function deleteCartById(id) {
    try {
        await pool.query(`
    DELETE
    FROM carts
    WHERE id = ?
    `, [id])
        return "Xoá Giỏ hàng thành công"
    } catch (error) {
        return error;
    }
}

// Tao carts
async function createCart(user_id, service_id) {
    const [result] = await pool.query(`
    INSERT INTO carts 
    (user_id, service_id)
    VALUES (?, ?)
    `, [user_id, service_id])
    const id = result.insertId;
    return getCartById(id);
}

module.exports = {
    getCarts,
    getCartsByServiceId,
    getCartsByUserId,
    getCartById,
    deleteCartById,
    createCart
};
