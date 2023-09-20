const { pool } = require("../models/db.js");

// Lay tat ca goi hàng
async function getPackages() {
    const [rows] = await pool.query("select * from packages")
    return rows
}

// Lay cac goi hang cua mot đơn hàng theo orderId
async function getOrdersByOrderId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM packages
    WHERE order_id = ?
    `, [id])
    return rows
}

// Lay mot goi hang theo id
async function getPackageById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM packages
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Xoa mot goi hang theo id
async function deletePackageById(id) {
    try {
        await pool.query(`
    DELETE
    FROM packages
    WHERE id = ?
    `, [id])
        return "Xoá Gói hàng thành công"
    } catch (error) {
        return error;
    }
}

// Tao don hang
async function createPackage(order_id, lenght, width, height, weight, price, description) {
    const [result] = await pool.query(`
    INSERT INTO packages (order_id, lenght, width, height, weight, price, description)
    VALUES (?, ?, ?, ?, ?, ?, ?)
    `, [order_id, lenght, width, height, weight, price, description])
    const id = result.insertId;
    return getPackageById(id);
}

module.exports = {
    getPackages,
    getOrdersByOrderId,
    getPackageById,
    deletePackageById,
    createPackage
};
