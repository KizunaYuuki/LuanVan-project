const { pool } = require("../models/db.js");

// Lay tat ca reviews
async function getReviews() {
    const [rows] = await pool.query("select * from reviews")
    return rows
}

// Lay cac reviews cua mot service theo serviceId
async function getReviewsByServiceId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM reviews
    WHERE service_id = ?
    `, [id])
    return rows
}

// Lay cac reviews cua mot user theo userId
async function getReviewsByUserId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM reviews
    WHERE user_id = ?
    `, [id])
    return rows
}

// Lay mot reviews theo id
async function getReviewById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM reviews
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot reviews theo id
async function updateReviewById(rate, comment, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE reviews
    SET rate = ?, comment = ?
    WHERE id = ?
    `, [rate, comment, id])
        return "Cập nhật Đánh giá thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot reviews theo id
async function deleteReviewById(id) {
    try {
        await pool.query(`
    DELETE
    FROM reviews
    WHERE id = ?
    `, [id])
        return "Xoá Đánh giá thành công"
    } catch (error) {
        return error;
    }
}

// Tao reviews
async function createReview(user_id, service_id, rate, comment) {
    const [result] = await pool.query(`
    INSERT INTO reviews 
    (user_id, service_id, rate, comment)
    VALUES (?, ?, ?, ?)
    `, [user_id, service_id, rate, comment])
    const id = result.insertId;
    return getReviewById(id);
}

module.exports = {
    getReviews,
    getReviewsByServiceId,
    getReviewsByUserId,
    getReviewById,
    updateReviewById,
    deleteReviewById,
    createReview
};
