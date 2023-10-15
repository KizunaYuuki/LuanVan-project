const { pool } = require("../models/db.js");

async function getUsers() {
    const [rows] = await pool.query(`select * from users order by id`)
    return rows
}

async function getUserById(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function getQuantityUser(id) {
    const [rows] = await pool.query(`
    SELECT COUNT(users.id) AS user_quantity FROM users`)
    return rows[0]
}

async function getUserByEmail(email) {
    console.log(email);
    const [rows] = await pool.query(`
    SELECT * 
    FROM users
    WHERE email = ?
    `, [email])
    return rows[0]
}

async function getRoleByEmail(email) {
    const user = await getUserByEmail(email);
    return user.role;
}

async function getStatusByEmail(email) {
    const user = await getUserByEmail(email);
    return user.status;
}

// Trả về false nếu user bị khoá, true nếu không
async function validateStatus(email) {
    const user = await getUserByEmail(email);
    // Nếu có user
    if (user) {
        // Kiểm tra status xem tài khoản có bị khoá không?
        if (user.status == '1') {
            return true
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Trả về true nếu admin, fasle nếu user
async function validateRole(email) {
    const user = await getUserByEmail(email);
    // Kiểm tra tài khoản này có quyền gì (admin/user)
    if (user.role == '0') {
        return true;
    } else {
        return false;
    }
}

async function createUser(name, email, role, status) {
    const [result] = await pool.query(`
    INSERT INTO users(name, email, role, status)
    VALUES (?, ?, ?, ?)
    `, [name, email, role, status])
    const id = result.insertId;
    return getUserById(id);
}

module.exports = {
    getUserById,
    createUser,
    getUserByEmail,
    getRoleByEmail,
    getStatusByEmail,
    validateStatus,
    validateRole,
    getUsers,
    getQuantityUser
};
