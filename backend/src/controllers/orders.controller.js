const { pool } = require("../models/db.js");

// Lay tat ca don hang
async function getOrders() {
    const [rows] = await pool.query(`
    SELECT orders.id as order_id, orders.created as order_created, orders.total_amount, payments.name as payments_name, 
    status.name as status_name, orders.email, orders.phone, packages.weight, packages.price as package_price
    FROM orders
    JOIN status ON orders.status_id = status.id
    JOIN payments ON orders.payment_id = payments.id
    JOIN packages ON orders.id = packages.order_id
    ORDER BY orders.created DESC
    `)
    return rows
}

// Lay cac don hang cua mot khach hang theo userId
async function getOrdersByUserId(id) {
    const [rows] = await pool.query(`
    SELECT orders.id as order_id, orders.created as order_created, orders.total_amount, payments.name as payments_name, 
    status.name as status_name, orders.email, orders.phone, packages.weight, packages.price as package_price
    FROM orders
    JOIN status ON orders.status_id = status.id
    JOIN payments ON orders.payment_id = payments.id
    JOIN packages ON orders.id = packages.order_id
    WHERE orders.user_id = ?
    ORDER BY orders.created DESC
    `, [id])
    return rows
}

// Lấy doanh thu theo khoảng thời gian by created của order
async function getSales(startDate, endDate) {
    const [rows] = await pool.query(`
    SELECT SUM(orders.total_amount) AS sales
    FROM orders
    WHERE created BETWEEN ? AND ? AND orders.status_id = 3
    `, [startDate, endDate])
    return rows[0]
}

// Lấy đơn hàng theo khoảng thời gian by created của order với trạng thái đã đăng ký
async function getCompleteOrders(startDate, endDate) {
    const [rows] = await pool.query(`
    SELECT *
    FROM orders
    WHERE created BETWEEN ? AND ? AND orders.status_id = 3
    ORDER BY created ASC
    `, [startDate, endDate])
    return rows
}

// Lấy số đơn hàng đang trờ xác nhận
async function getWaitOrders(startDate, endDate) {
    const [rows] = await pool.query(`
    SELECT COUNT(orders.id) AS quantity
    FROM orders
    WHERE orders.status_id = 1`)
    return rows[0]
}

// Lay mot don hang theo id
async function getOrderById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM orders
    WHERE id = ?
    `, [id])
    return rows[0]
}

// Cap nhat trang thai mot don hang theo id
async function updateOrderById(status_id, id) {
    try {
        const [rows] = await pool.query(`
    UPDATE orders
    SET status_id = ?
    WHERE id = ?
    `, [status_id, id])
        return "Cập nhật Trạng thái đơn hàng thành công"
    } catch (error) {
        return error;
    }
}

// Xoa mot don hang theo id
async function deleteOrderById(id) {
    try {
        await pool.query(`
        DELETE
        FROM orders
        WHERE id = ?
        `, [id])
        return "Xoá Đơn hàng thành công"
    } catch (error) {
        return error;
    }
}

// Tao don hang
async function createOrders(user_id, status_id, service_id, payment_id, total_amount, email, phone, user_name) {
    const [result] = await pool.query(`
    INSERT INTO orders (user_id, status_id, service_id, payment_id, total_amount, email, phone, user_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [user_id, status_id, service_id, payment_id, total_amount, email, phone, user_name])
    const id = result.insertId;
    return getOrderById(id);
}

module.exports = {
    getOrders,
    getOrdersByUserId,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    createOrders,
    getSales,
    getWaitOrders,
    getCompleteOrders
};
