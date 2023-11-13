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
    getUsers,
    getQuantityUser,
    unblockUser,
    blockUser,
    deleteUser,
    updateUser } = require("../controllers/users.controller.js");

const usersRouter = express.Router();

// Lấy tất cả người dùng
usersRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getUsers();
    res.status(201).json(result);
});

// Lấy số lượng người dùng
usersRouter.get("/quantity", validateAccessToken, async (req, res) => {
    const result = await getQuantityUser();
    res.status(201).json(result);
});

// Đăng ký người dùng
usersRouter.post("/", validateAccessToken, async (req, res) => {
    const { id, name, email, phone } = req.body;
    // Theo mặc định tài khoản mới tạo sẽ có role là 1, chỉ có quyền của Khách hàng
    // status mặc định là 1, cho biết tài khoản được kích hoạt/mở
    const role = 1;
    const status = 1;
    const user = await createUser(id, name, email, role, status, phone);
    res.status(201).json(user);
});

// BLOCK USER
usersRouter.get("/user-blocks/block/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await blockUser(id);
    res.status(200).json(result);
});
// UNBLOCK USER
usersRouter.get("/user-blocks/unblock/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await unblockUser(id);
    res.status(200).json(result);
});
// DELETE USER
usersRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteUser(id);
    res.status(200).json(result);
});
// UPDATE USER
usersRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { name, phone } = req.body;
    const result = await updateUser(name, phone, id);
    res.status(200).json(result);
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
