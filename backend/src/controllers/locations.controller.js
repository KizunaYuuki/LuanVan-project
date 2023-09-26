const { pool } = require("../models/db.js");

// Lay tat ca locations
async function getLocations() {
    const [rows] = await pool.query("select * from locations")
    return rows
}

// Lay cac locations cua mot service theo serviceId
async function getLocationsByServicId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM locations
    WHERE service_id = ?
    `, [id])
    return rows
}

// Lay mot locations theo id
async function getLocationById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM locations
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot locations theo id
async function updateLocationById(service_id, domain, province, district, type, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE locations
    SET service_id = ?, domain = ?, province = ?, district = ?, type = ?
    WHERE id = ?
    `, [service_id, domain, province, district, type, id])
        return "Cập nhật Địa chỉ thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot locations theo id
async function deleteLocationById(id) {
    try {
        await pool.query(`
    DELETE
    FROM locations
    WHERE id = ?
    `, [id])
        return "Xoá Địa chỉ thành công"
    } catch (error) {
        return error;
    }
}

// Tao locations
async function createLocation(service_id, domain, province, district, type) {
    const [result] = await pool.query(`
    INSERT INTO locations 
    (service_id, domain, province, district, type)
    VALUES (?, ?, ?, ?, ?)
    `, [service_id, domain, province, district, type])
    const id = result.insertId;
    return getLocationById(id);
}

module.exports = {
    getLocations,
    getLocationsByServicId,
    getLocationById,
    updateLocationById,
    deleteLocationById,
    createLocation
};
