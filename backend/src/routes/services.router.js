const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getServices,
    getServicesByServiceTypeId,
    getServiceById,
    updateServiceById,
    deleteServiceById,
    createService } = require("../controllers/services.controller.js");

const servicesRouter = express.Router();

// Tạo services
servicesRouter.post("/", validateAccessToken, async (req, res) => {
    const { service_type_id, name, description, delivery_date, weight, price } = req.body;
    const result = await createService(service_type_id, name, description, delivery_date, weight, price);
    res.status(201).json(result);
});

// Lấy tất cả services
servicesRouter.get("/", async (req, res) => {
    const result = await getServices();
    res.status(201).json(result);
});

// Lay cac services cua mot service_type theo serviceTypeId
servicesRouter.get("/service-type/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getServicesByServiceTypeId(id);
    res.status(200).json(result);
});

// Lay mot services theo id
servicesRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getServiceById(id);
    res.status(200).json(result);
});

// Cap nhat mot services theo id
servicesRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { service_type_id, name, description, delivery_date, weight, price } = req.body;
    const result = await updateServiceById(service_type_id, name, description, delivery_date, weight, price, id);
    res.status(200).json(result);
});

// Xoa mot services theo id
servicesRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteServiceById(id);
    res.status(200).json(result);
});

module.exports = { servicesRouter };
