const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const {
    getPromotions,
    getPromotionById,
    deletePromotionById,
    createPromotion, } = require("../controllers/promotions.controller.js");

const promotionsRouter = express.Router();

// Tạo promotions
promotionsRouter.post("/", validateAccessToken, async (req, res) => {
    const { service_id, name, description, price, start, end } = req.body;
    const result = await createPromotion(service_id, name, description, price, start, end);
    res.status(201).json(result);
});

// Lấy tất cả promotions
promotionsRouter.get("/", async (req, res) => {
    const result = await getPromotions();
    res.status(201).json(result);
});


// Lay mot service theo id
promotionsRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const result = await getPromotionById(id);
    res.status(200).json(result);
});

// Xoa mot promotions theo id
promotionsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deletePromotionById(id);
    res.status(200).json(result);
});

module.exports = { promotionsRouter };