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
    SELECT services.id as service_id, carts.id as cart_id, services.name as service_name, providers.image as image, providers.name as provider_name, services.price as service_price
    FROM carts
    JOIN services ON carts.service_id = services.id
    JOIN service_types ON services.service_type_id = service_types.id
    JOIN providers ON service_types.providers_id = providers.id
    WHERE user_id = ? ORDER BY carts.id
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
    const [check] = await pool.query(`
    SELECT * 
    FROM carts
    WHERE carts.user_id = ? AND carts.service_id = ?
    `, [user_id, service_id])
    console.log(check[0]);
    if (!check[0]) {
        const [result] = await pool.query(`
        INSERT INTO carts 
        (user_id, service_id)
        VALUES (?, ?)
        `, [user_id, service_id])
        const id = result.insertId;
        return getCartById(id);
    } else {
        return "Giỏ hàng đã tồn tại";
    }
}

module.exports = {
    getCarts,
    getCartsByServiceId,
    getCartsByUserId,
    getCartById,
    deleteCartById,
    createCart
};
