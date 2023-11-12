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
    // console.log(email);
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

async function createUser(id, name, email, role, status, phone) {
    const [result] = await pool.query(`
    INSERT INTO users(id, name, email, role, status, phone)
    VALUES (?, ?, ?, ?, ?, ?)
    `, [id, name, email, role, status, phone])
    return getUserById(id);
}

const axios = require('axios');
// UNBLOCK USER
async function unblockUser(identifier) {
    let token = ''
    let result = false;
    let options = {
        method: 'POST',
        url: 'https://freight-service.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'VD0N6ZtZODkIfyolqZbmWarv9dqFRZ8K',
            client_secret: 'k7tuYdvkiyBA5m0wf4WCByNSWEm3E9J7zL6mDLuIX4RVIiq0rvhu6udpvsjc8e2_',
            audience: 'https://freight-service.us.auth0.com/api/v2/'
        })
    };
    // GET TOKEN
    await axios.default.request(options).then(async function (response) {
        
        // console.log(response.data.access_token);
        token = response.data.access_token;
        // UNBLOCK USER
        let data = JSON.stringify({
            "blocked": false
        });
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `https://freight-service.us.auth0.com/api/v2/users/${identifier}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        await axios.request(config)
            .then(async (response) => {
                // console.log(JSON.stringify(response.data));
                // UPDATE DATA ON MYSQL
                try {
                    await pool.query(`
                    UPDATE users
                    SET status = ?
                    WHERE id = ?
                    `, [1, identifier])
                    result = true;
                } catch (error) {
                    console.log(error);
                    result = false;
                }
            })
            .catch((error) => {
                console.log(error);
                result = false;
            });
    }).catch(function (error) {
        console.error(error);
        result = false;
    });
    return result;
}
// BLOCK USER
async function blockUser(identifier) {
    let token = ''
    let result = false;
    let options = {
        method: 'POST',
        url: 'https://freight-service.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'VD0N6ZtZODkIfyolqZbmWarv9dqFRZ8K',
            client_secret: 'k7tuYdvkiyBA5m0wf4WCByNSWEm3E9J7zL6mDLuIX4RVIiq0rvhu6udpvsjc8e2_',
            audience: 'https://freight-service.us.auth0.com/api/v2/'
        })
    };
    // GET TOKEN
    await axios.default.request(options).then(async function (response) {

        // console.log(response.data.access_token);
        token = response.data.access_token;
        // UNBLOCK USER
        let data = JSON.stringify({
            "blocked": true
        });
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `https://freight-service.us.auth0.com/api/v2/users/${identifier}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };
        await axios.request(config)
            .then(async (response) => {
                // console.log(JSON.stringify(response.data));
                // UPDATE DATA ON MYSQL
                try {
                    await pool.query(`
                    UPDATE users
                    SET status = ?
                    WHERE id = ?
                    `, [0, identifier])
                    result = true;
                } catch (error) {
                    console.log(error);
                    result = false;
                }
            })
            .catch((error) => {
                console.log(error);
                result = false;
            });
    }).catch(function (error) {
        console.error(error);
        result = false;
    });
    return result;
}
// DELETE USER
async function deleteUser(identifier) {
    let token = ''
    let result = false;
    let options = {
        method: 'POST',
        url: 'https://freight-service.us.auth0.com/oauth/token',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: 'VD0N6ZtZODkIfyolqZbmWarv9dqFRZ8K',
            client_secret: 'k7tuYdvkiyBA5m0wf4WCByNSWEm3E9J7zL6mDLuIX4RVIiq0rvhu6udpvsjc8e2_',
            audience: 'https://freight-service.us.auth0.com/api/v2/'
        })
    };
    // GET TOKEN
    await axios.default.request(options).then(async function (response) {
        // console.log(response.data.access_token);
        token = response.data.access_token;
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://freight-service.us.auth0.com/api/v2/users/${identifier}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        await axios.request(config)
            .then(async (response) => {
                // console.log(JSON.stringify(response.data));
                // UPDATE DATA ON MYSQL
                try {
                    await pool.query(`
                    DELETE
                    FROM users
                    WHERE id = ?
                    `, [identifier])
                    result = true;
                } catch (error) {
                    console.log(error);
                    result = false;
                }
            })
            .catch((error) => {
                console.log(error);
                result = false;
            });

    }).catch(function (error) {
        console.error(error);
        result = false;
    });
    return result;
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
    getQuantityUser,
    unblockUser,
    blockUser,
    deleteUser
};
