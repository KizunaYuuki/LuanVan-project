const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const {
    getCarts,
    getCartsByServiceId,
    getCartsByUserId,
    getCartById,
    deleteCartById,
    createCart } = require("../controllers/carts.controller.js");

const cartsRouter = express.Router();

// Tạo carts
cartsRouter.post("/", validateAccessToken, async (req, res) => {
    const { user_id, service_id } = req.body;
    const result = await createCart(user_id, service_id);
    res.status(201).json(result);
});

// Lấy tất cả carts
cartsRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getCarts();
    res.status(201).json(result);
});

// Lay cac carts cua mot service theo serviceId
cartsRouter.get("/service/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getCartsByServiceId(id);
    res.status(200).json(result);
});

// Lay cac carts cua mot user theo userId
cartsRouter.get("/user/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getCartsByUserId(id);
    res.status(200).json(result);
});

// Lay mot carts theo id
cartsRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getCartById(id);
    res.status(200).json(result);
});

// Xoa mot carts theo id
cartsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteCartById(id);
    res.status(200).json(result);
});

module.exports = { cartsRouter };
