const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getAllStatus,
    getStatusById,
    createStatus,
    deleteStatusById } = require("../controllers/status.controller.js");

const statusRouter = express.Router();

// Tạo status
statusRouter.post("/", validateAccessToken, async (req, res) => {
    const { name } = req.body;
    const result = await createStatus(name);
    res.status(201).json(result);
});

// Lấy tất cả status
statusRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getAllStatus();
    res.status(201).json(result);
});

// Tìm trạng thái theo id
statusRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getStatusById(id);
    res.status(200).json(result);
});

// Xoá trạng thái
statusRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteStatusById(id);
    res.status(200).json(result);
});

module.exports = { statusRouter };
