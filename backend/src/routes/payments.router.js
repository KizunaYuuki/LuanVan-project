const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getPayments,
    getPaymentById,
    deletePaymentById,
    createPayment } = require("../controllers/payments.controller.js");

const paymentsRouter = express.Router();

// Tạo payments
paymentsRouter.post("/", validateAccessToken, async (req, res) => {
    const { name } = req.body;
    const result = await createPayment(name);
    res.status(201).json(result);
});

// Lấy tất cả payments
paymentsRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getPayments();
    res.status(200).json(result);
});

// Tìm payments theo id
paymentsRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getPaymentById(id);
    res.status(200).json(result);
});

// Xoá payments
paymentsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deletePaymentById(id);
    res.status(200).json(result);
});

module.exports = { paymentsRouter };
