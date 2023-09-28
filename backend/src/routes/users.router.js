const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getUserById,
    createUser,
    getUserByEmail,
    getRoleByEmail,
    getStatusByEmail,
    validateStatus,
    validateRole,
    getUsers } = require("../controllers/users.controller.js");

const usersRouter = express.Router();

// Đăng ký người dùng
usersRouter.post("/", validateAccessToken, async (req, res) => {
    const { name, email } = req.body;
    // Theo mặc định tài khoản mới tạo sẽ có role là 1, chỉ có quyền của Khách hàng
    // status mặc định là 1, cho biết tài khoản được kích hoạt/mở
    const role = 1;
    const status = 1;
    const user = await createUser(name, email, role, status);
    res.status(201).json(user);
});

// Xác thực quyền qua role
usersRouter.get("/auth-role", validateAccessToken, async (req, res) => {
    const { email } = req.body;
    const role = await getRoleByEmail(email);
    res.status(200).json(role);
});

// Kiểm tra trạng thái của người dùng
usersRouter.post("/check-status", validateAccessToken, (req, res) => {
    res.status(200).json('Kiểm tra trạng thái của người dùng');
});

// Cập nhật thông tin người dùng
usersRouter.put("/update-user", validateAccessToken, (req, res) => {
    res.status(200).json('Cập nhật thông tin người dùng');
});

// Tìm người dùng theo email
usersRouter.post("/email", validateAccessToken, async (req, res) => {
    const { email } = req.body;
    const user = await getUserByEmail(email);
    res.status(200).json(user);
});

// Tìm người dùng theo id
usersRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const user = await getUserById(id);
    res.status(200).json(user);
});

module.exports = { usersRouter };
