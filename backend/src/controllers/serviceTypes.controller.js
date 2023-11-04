const { pool } = require("../models/db.js");

// Lay tat ca service_type
async function getServiceTypes() {
    const [rows] = await pool.query("select * from service_types")
    return rows
}

// Lay cac service_type cua mot provider theo providerId
async function getServiceTypesByProviderId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM service_types
    WHERE providers_id = ?
    `, [id])
    return rows
}

// Lay mot service_type theo id
async function getServiceTypeById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM service_types
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot service_type theo id
async function updateServiceTypeById(providers_id, name, area, break_weight,
    intra_province_min_time, intra_province_max_time,
    inter_provincial_min_time, inter_provincial_max_time,
    inter_domain_min_time, inter_domain_max_time,
    intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE service_types
    SET providers_id = ?, name = ?, area = ?, break_weight = ?, 
    intra_province_min_time = ?, intra_province_max_time = ?,
    inter_provincial_min_time = ?, inter_provincial_max_time = ?,
    inter_domain_min_time = ?, inter_domain_max_time = ?,
    intra_province_extra_price = ?, inter_provincial_extra_price = ?, inter_domain_extra_price = ?
    WHERE id = ?
    `, [providers_id, name, area, break_weight,
            intra_province_min_time, intra_province_max_time,
            inter_provincial_min_time, inter_provincial_max_time,
            inter_domain_min_time, inter_domain_max_time,
            intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price, id])
        return "Cập nhật Loại dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot service_type theo id
async function deleteServiceTypeById(id) {
    try {
        await pool.query(`
    DELETE
    FROM service_types
    WHERE id = ?
    `, [id])
        return "Xoá Loại dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Tao service_type
async function createServiceType(providers_id, name, area, break_weight,
    intra_province_min_time, intra_province_max_time,
    inter_provincial_min_time, inter_provincial_max_time,
    inter_domain_min_time, inter_domain_max_time,
    intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price) {
    const [result] = await pool.query(`
    INSERT INTO service_types 
    (providers_id, name, area, break_weight,
    intra_province_min_time, intra_province_max_time,
    inter_provincial_min_time, inter_provincial_max_time,
    inter_domain_min_time, inter_domain_max_time,
    intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [providers_id, name, area, break_weight,
        intra_province_min_time, intra_province_max_time,
        inter_provincial_min_time, inter_provincial_max_time,
        inter_domain_min_time, inter_domain_max_time,
        intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price])
    const id = result.insertId;
    return getServiceTypeById(id);
}

module.exports = {
    getServiceTypes,
    getServiceTypesByProviderId,
    getServiceTypeById,
    updateServiceTypeById,
    deleteServiceTypeById,
    createServiceType
};
