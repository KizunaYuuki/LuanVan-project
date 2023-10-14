const { pool } = require("../models/db.js");

// Lay tat ca promotions
async function getPromotions() {
    const [rows] = await pool.query("select * from promotions")
    return rows
}

// Lay mot promotions theo id
async function getPromotionById(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM promotions
    WHERE promotions.id = ?
    `, [id])
    return rows[0]
}

// // Cap nhat mot promotions theo id
// async function updatePromotionById(service_type_id, name, description, delivery_date, weight, price, id) {
//     try {
//         const [rows] = await pool.query(`
//     UPDATE promotions
//     SET service_type_id = ?, name = ?, description = ?, delivery_date = ?, weight = ?, price = ?
//     WHERE id = ?
//     `, [service_type_id, name, description, delivery_date, weight, price, id])
//         return "Cập nhật Loại dịch vụ thành công"
//     } catch (error) {
//         return error;
//     }
// }

// Xoa mot promotions theo id
async function deletePromotionById(id) {
    try {
        await pool.query(`
        DELETE
        FROM promotions
        WHERE id = ?
        `, [id])
        return "Xoá Dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Tao promotions
async function createPromotion(service_id, name, description, price, start, end) {
    const [result] = await pool.query(`
    INSERT INTO promotions 
    (service_id, name, description, price, start, end)
    VALUES (?, ?, ?, ?, ?, ?)
    `, [service_id, name, description, price, start, end])
    const id = result.insertId;
    return getPromotionById(id);
}

module.exports = {
    getPromotions,
    getPromotionById,
    deletePromotionById,
    createPromotion,
}
