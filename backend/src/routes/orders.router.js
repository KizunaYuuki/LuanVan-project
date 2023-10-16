const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getOrders,
    getOrdersByUserId,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    createOrders,
    getSales,
    getWaitOrders,
    getCompleteOrders } = require("../controllers/orders.controller.js");

const ordersRouter = express.Router();

// Tạo order
ordersRouter.post("/", validateAccessToken, async (req, res) => {
    const { user_id, status_id, service_id, payment_id, total_amount, email, phone, user_name } = req.body;
    const orders = await createOrders(user_id, status_id, service_id, payment_id, total_amount, email, phone, user_name);
    res.status(201).json(orders);
});

// Lấy doanh thu theo khoảng thời gian by created của order
ordersRouter.get("/sales", validateAccessToken, async (req, res) => {
    const orders = await getSales(req.query.startDate, req.query.endDate);
    res.status(201).json(orders);
});

// Lấy đơn hàng theo khoảng thời gian by created của order với trạng thái đã đăng ký
ordersRouter.get("/complete-order", validateAccessToken, async (req, res) => {
    const orders = await getCompleteOrders(req.query.startDate, req.query.endDate);
    res.status(201).json(orders);
});

// Lấy số đơn hàng đang trờ xác nhận
ordersRouter.get("/wait-order", validateAccessToken, async (req, res) => {
    const orders = await getWaitOrders();
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
    const { status_id } = req.body;
    const orders = await updateOrderById(status_id, id);
    res.status(200).json(orders);
});

// Xoá mot don hang theo id
ordersRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const orders = await deleteOrderById(id);
    res.status(200).json(orders);
});

module.exports = { ordersRouter };
