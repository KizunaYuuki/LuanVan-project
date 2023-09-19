const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { getCarts, getCartById, createCart, deleteCartById } = require("../controllers/carts.controller.js");

const cartsRouter = express.Router();

// Tạo giỏ hàng
cartsRouter.post("/", validateAccessToken, async (req, res) => {
    const { userId, serviceId } = req.body;
    const cart = await createCart(userId, serviceId);
    res.status(201).json(cart);
});

// async function createCart(userId, serviceId) {
//     const [result] = await pool.query(`
//     INSERT INTO users(user_id, service_id)
//     VALUES (?, ?)
//     `, [userId, serviceId])
//     const id = result.insertId;
//     return getCartById(id);
// }

// // Xác thực quyền qua role
// cartsRouter.post("/auth-role", validateAccessToken, async (req, res) => {
//     const { email } = req.body;
//     const role = await getRoleByEmail(email);
//     res.status(200).json(role);
// });

// // Kiểm tra trạng thái của người dùng
// cartsRouter.post("/check-status", validateAccessToken, (req, res) => {
//     res.status(200).json('Kiểm tra trạng thái của người dùng');
// });

// // Cập nhật thông tin người dùng
// cartsRouter.put("/update-user", validateAccessToken, (req, res) => {
//     res.status(200).json('Cập nhật thông tin người dùng');
// });

// // Tìm người dùng theo email
// cartsRouter.post("/", validateAccessToken, async (req, res) => {
//     const { email } = req.body;
//     const user = await getUserByEmail(email);
//     res.status(200).json(user);
// });

// // Tìm người dùng theo id
// cartsRouter.get("/:id", validateAccessToken, async (req, res) => {
//     const id = req.params.id;
//     const user = await getUserById(id);
//     res.status(200).json(user);
// });

module.exports = { cartsRouter };
