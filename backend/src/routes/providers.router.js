const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getProviders,
    getProviderById,
    deleteProviderById,
    createProviders,
    updateProvidersById } = require("../controllers/providers.controller.js");

const providersRouter = express.Router();

// Tạo providers
providersRouter.post("/", validateAccessToken, async (req, res) => {
    const { name, phone, email, address, image, } = req.body;
    const result = await createProviders(name, phone, email, address, image,);
    res.status(201).json(result);
});

// Update mot provider theo id
providersRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { name, phone, email, address, image } = req.body;
    const result = await updateProvidersById(name, phone, email, address, image, id);
    res.status(200).json(result);
});

// Lấy tất cả providers
providersRouter.get("/", validateAccessToken, async (req, res) => {
    const providers = await getProviders();
    res.status(201).json(providers);
});

// Lay mot providers theo id
providersRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const providers = await getProviderById(id);
    res.status(200).json(providers);
});

// Xoá mot providers theo id
providersRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const providers = await deleteProviderById(id);
    res.status(200).json(providers);
});

module.exports = { providersRouter };
