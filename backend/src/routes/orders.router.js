const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getOrders, 
    getOrdersByUserId, 
    getOrderById, 
    updateOrderById, 
    deleteOrderById,
    createOrders } = require("../controllers/orders.controller.js");

const ordersRouter = express.Router();

// Tạo order
ordersRouter.post("/", validateAccessToken, async (req, res) => {
    const { user_id, status_id, serivce_id, total_amount, payment_type, email, phone } = req.body;
    const orders = await createOrders(user_id, status_id, serivce_id, total_amount, payment_type, email, phone);
    res.status(201).json(orders);
});

// Lấy tất cả order
ordersRouter.get("/", validateAccessToken, async (req, res) => {
    const orders = await getOrders();
    res.status(201).json(orders);
});

// Lay cac don hang cua mot khach hang theo userId
ordersRouter.get("/user/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const orders = await getOrdersByUserId(id);
    res.status(200).json(orders);
});

// Lay mot don hang theo id
ordersRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const orders = await getOrderById(id);
    res.status(200).json(orders);
});

// Cap nhat trang thai mot don hang theo id
ordersRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { payment_type } = req.body;
    const orders = await updateOrderById(payment_type, id);
    res.status(200).json(orders);
});

// Xoá mot don hang theo id
ordersRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const orders = await deleteOrderById(id);
    res.status(200).json(orders);
});

module.exports = { ordersRouter };
