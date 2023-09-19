const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { getStatusById, createStatus, deleteStatusById } = require("../controllers/status.controller.js");

const statusRouter = express.Router();

// Tạo trạng thái
statusRouter.post("/", validateAccessToken, async (req, res) => {
    const { name } = req.body;
    const status = await createStatus(name);
    res.status(201).json(status);
});

// Tìm trạng thái theo id
statusRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const status = await getStatusById(id);
    res.status(200).json(status);
});

// Xoá trạng thái
statusRouter.post("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const status = await deleteStatusById(id);
    res.status(200).json(status);
});

module.exports = { statusRouter };
