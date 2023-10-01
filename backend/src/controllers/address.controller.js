const { pool } = require("../models/db.js");

// Lay tat ca address
async function getAllAddress() {
    const [rows] = await pool.query("select * from address")
    return rows
}

// Lay cac address cua mot order theo orderId
async function getAllAddressByOrderId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM address
    WHERE order_id = ?
    `, [id])
    return rows
}

// Lay mot address theo id
async function getAddressById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM address
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot address theo id
async function updateAddressById(province, district, ward, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE address
    SET province = ?, district = ?, ward = ?
    WHERE id = ?
    `, [province, district, ward, id])
        return "Cập nhật Địa chỉ thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot address theo id
async function deleteAddressById(id) {
    try {
        await pool.query(`
        DELETE
        FROM address
        WHERE id = ?
        `, [id])
        return "Xoá Địa chỉ thành công"
    } catch (error) {
        return error;
    }
}

// Tao mot address
async function createAddress(order_id, province, district, ward, type) {
    const [result] = await pool.query(`
    INSERT INTO address (order_id, province, district, ward, type)
    VALUES (?, ?, ?, ?, ?)
    `, [order_id, province, district, ward, type])
    const id = result.insertId;
    return getAddressById(id);
}

module.exports = {
    getAllAddress,
    getAllAddressByOrderId,
    getAddressById,
    updateAddressById,
    deleteAddressById,
    createAddress
};
