const { pool } = require("../models/db.js");

// Lay tat ca price_lists
async function getPriceLists() {
    const [rows] = await pool.query("select * from price_lists")
    return rows
}

// Lay cac price_lists cua mot service_type theo serviceTypeId
async function getPriceListsByServiceTypeId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM price_lists
    WHERE service_type_id = ?
    ORDER BY price_lists.start_weight ASC
    `, [id])
    return rows
}

// Lay mot price_lists theo id
async function getPriceListById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM price_lists
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot price_lists theo id
async function updatePriceListById(service_type_id, start_weight, end_weight, basic_price, special_price,
    intra_province_price, inter_provincial_price, inter_domain_price, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE price_lists
    SET service_type_id = ?, start_weight = ?, end_weight = ?, basic_price = ?, special_price = ?, 
    intra_province_price = ?, intra_province_price = ?, intra_province_price = ?
    WHERE id = ?
    `, [service_type_id, start_weight, end_weight, basic_price, special_price,
            intra_province_price, inter_provincial_price, inter_domain_price, id])
        return "Cập nhật Bảng giá thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot price_lists theo id
async function deletePriceListById(id) {
    try {
        await pool.query(`
    DELETE
    FROM price_lists
    WHERE id = ?
    `, [id])
        return "Xoá Bảng giá thành công"
    } catch (error) {
        return error;
    }
}

// Tao price_lists
async function createPriceList(service_type_id, start_weight, end_weight, basic_price, special_price,
    intra_province_price, inter_provincial_price, inter_domain_price) {
    const [result] = await pool.query(`
    INSERT INTO price_lists 
    (service_type_id, start_weight, end_weight, basic_price, special_price,
    intra_province_price, inter_provincial_price, inter_domain_price)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [service_type_id, start_weight, end_weight, basic_price, special_price,
        intra_province_price, inter_provincial_price, inter_domain_price])
    const id = result.insertId;
    return getPriceListById(id);
}

module.exports = {
    getPriceLists,
    getPriceListsByServiceTypeId,
    getPriceListById,
    updatePriceListById,
    deletePriceListById,
    createPriceList
};
