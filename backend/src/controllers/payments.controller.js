const { pool } = require("../models/db.js");

// Lay tat ca payments
async function getPayments() {
    const [rows] = await pool.query("select * from payments")
    return rows
}

async function getPaymentById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM payments
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function deletePaymentById(id) {
    try {
        await pool.query(`
    DELETE
    FROM payments
    WHERE id = ?
    `, [id])
        return "Xoá Phương thức thanh toán thành công"
    } catch (error) {
        return error;
    }
}

async function createPayment(name) {
    const [result] = await pool.query(`
    INSERT INTO payments(name)
    VALUES (?)
    `, [name])
    const id = result.insertId;
    return getPaymentById(id);
}

module.exports = {
    getPayments,
    getPaymentById,
    deletePaymentById,
    createPayment
};
