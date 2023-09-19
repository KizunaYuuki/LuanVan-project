const { pool } = require("../models/db.js");

// Lay tat ca cart cua mot user
async function getCarts(id) {
    const [rows] = await pool.query("select * from carts")
    return rows
}

async function getCartById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function createCart(userId, serviceId) {
    const [result] = await pool.query(`
    INSERT INTO carts(user_id, service_id)
    VALUES (?, ?)
    `, [userId, serviceId])
    const id = result.insertId;
    return getCartById(id);
}

async function deleteCartById(id) {
    try {
        await pool.query(`
    DELETE * 
    FROM carts
    WHERE id = ?
    `, [id])
        return "Xoá Giỏ hàng thành công"

    } catch (error) {
        return error;
    }
}


module.exports = {
    getCarts,
    getCartById,
    createCart,
    deleteCartById
};
