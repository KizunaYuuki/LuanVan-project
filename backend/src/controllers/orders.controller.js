const { pool } = require("../models/db.js");

// Lay tat ca don hang
async function getOrders() {
    const [rows] = await pool.query("select * from orders")
    return rows
}

// Lay cac don hang cua mot khach hang theo userId
async function getOrdersByUserId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM orders
    WHERE user_id = ?
    `, [id])
    return rows
}

// Lay mot don hang theo id
async function getOrderById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM orders
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat trang thai mot don hang theo id
async function updateOrderById(payment_type, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE orders
    SET payment_type = ?
    WHERE id = ?
    `, [payment_type, id])
        return "Cập nhật Đơn hàng thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot don hang theo id
async function deleteOrderById(id) {
    try {
        await pool.query(`
    DELETE
    FROM orders
    WHERE id = ?
    `, [id])
        return "Xoá Đơn hàng thành công"
    } catch (error) {
        return error;
    }
}

// Tao don hang
async function createOrders(user_id, status_id, serivce_id, total_amount, payment_type, email, phone) {
    const [result] = await pool.query(`
    INSERT INTO orders (user_id, status_id, serivce_id, total_amount, payment_type, email, phone)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [user_id, status_id, serivce_id, total_amount, payment_type, email, phone])
    const id = result.insertId;
    return getOrderById(id);
}

module.exports = {
    getOrders,
    getOrdersByUserId,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    createOrders
};
