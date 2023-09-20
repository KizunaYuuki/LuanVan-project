const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const {
    getReviews,
    getReviewsByServiceId,
    getReviewsByUserId,
    getReviewById,
    updateReviewById,
    deleteReviewById,
    createReview } = require("../controllers/reviews.controller.js");

const reviewsRouter = express.Router();

// Tạo reviews
reviewsRouter.post("/", validateAccessToken, async (req, res) => {
    const { user_id, service_id, rate, comment } = req.body;
    const result = await createReview(user_id, service_id, rate, comment);
    res.status(201).json(result);
});

// Lấy tất cả reviews
reviewsRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getReviews();
    res.status(201).json(result);
});

// Lay cac reviews cua mot service theo serviceId
reviewsRouter.get("/service/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getReviewsByServiceId(id);
    res.status(200).json(result);
});

// Lay cac reviews cua mot user theo userId
reviewsRouter.get("/user/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getReviewsByUserId(id);
    res.status(200).json(result);
});


// Lay mot reviews theo id
reviewsRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getReviewById(id);
    res.status(200).json(result);
});

// Cap nhat mot reviews theo id
reviewsRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { rate, comment } = req.body;
    const result = await updateReviewById(rate, comment, id);
    res.status(200).json(result);
});

// Xoa mot reviews theo id
reviewsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteReviewById(id);
    res.status(200).json(result);
});

module.exports = { reviewsRouter };
