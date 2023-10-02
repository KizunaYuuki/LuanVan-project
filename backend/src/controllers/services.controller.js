const { pool } = require("../models/db.js");

// Lay tat ca services
async function getServices() {
    // const [rows] = await pool.query("select * from services")
    const [rows] = await pool.query(`SELECT AVG(reviews.rate) AS average_rate, COUNT(reviews.id) as totalCount, total.service_id, total.service_name, total.description,
    total.delivery_date, total.weight, total.price, total.provider_id, total.provider_name, total.image
    FROM
    (SELECT services.id as service_id, services.name as service_name, services.description, 
    services.delivery_date, services.weight, services.price,
    providers.id as provider_id, providers.name as provider_name, providers.image
    FROM services
    JOIN service_types ON services.service_type_id = service_types.id
    JOIN providers ON service_types.providers_id = providers.id
    ORDER BY services.id) AS total
    LEFT JOIN reviews ON reviews.service_id = total.service_id
    GROUP BY total.service_id, total.service_name
    ORDER BY total.service_id`)
    return rows
}

// Lay cac services cua mot service_type theo serviceTypeId
async function getServicesByServiceTypeId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM services
    WHERE service_type_id = ?
    `, [id])
    return rows
}

// Lay mot services theo id
async function getServiceById(id) {
    const [rows] = await pool.query(`
    SELECT services.id as service_id, services.name as service_name, services.description, services.delivery_date, services.weight, services.price,
    providers.id as provider_id, providers.name as provider_name, providers.image
    FROM services
    JOIN service_types ON services.service_type_id = service_types.id
    JOIN providers ON service_types.providers_id = providers.id
    WHERE services.id = ?
    `, [id])
    return rows[0]
}

// Cap nhat mot services theo id
async function updateServiceById(service_type_id, name, description, delivery_date, weight, price, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE services
    SET service_type_id = ?, name = ?, description = ?, delivery_date = ?, weight = ?, price = ?
    WHERE id = ?
    `, [service_type_id, name, description, delivery_date, weight, price, id])
        return "Cập nhật Loại dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot services theo id
async function deleteServiceById(id) {
    try {
        await pool.query(`
    DELETE
    FROM services
    WHERE id = ?
    `, [id])
        return "Xoá Dịch vụ thành công"
    } catch (error) {
        return error;
    }
}

// Tao services
async function createService(service_type_id, name, description, delivery_date, weight, price) {
    const [result] = await pool.query(`
    INSERT INTO services 
    (service_type_id, name, description, delivery_date, weight, price)
    VALUES (?, ?, ?, ?, ?, ?)
    `, [service_type_id, name, description, delivery_date, weight, price])
    const id = result.insertId;
    return getServiceById(id);
}

module.exports = {
    getServices,
    getServicesByServiceTypeId,
    getServiceById,
    updateServiceById,
    deleteServiceById,
    createService
};
