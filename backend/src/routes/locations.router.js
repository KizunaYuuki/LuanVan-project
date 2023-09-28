const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getLocations,
    getLocationsByServicId,
    getLocationById,
    updateLocationById,
    deleteLocationById,
    createLocation } = require("../controllers/locations.controller.js");

const locationsRouter = express.Router();

// Tạo locations
locationsRouter.post("/", validateAccessToken, async (req, res) => {
    const { service_id, domain, province, district, type } = req.body;
    const result = await createLocation(service_id, domain, province, district, type);
    res.status(201).json(result);
});

// Lấy tất cả locations
locationsRouter.get("/", async (req, res) => {
    const result = await getLocations();
    res.status(201).json(result);
});

// Lay cac locations cua mot service theo serviceId
locationsRouter.get("/service/:id", async (req, res) => {
    const id = req.params.id;
    const result = await getLocationsByServicId(id);
    res.status(200).json(result);
});

// Lay mot locations theo id
locationsRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getLocationById(id);
    res.status(200).json(result);
});

// Cap nhat mot locations theo id
locationsRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { service_id, domain, province, district, type } = req.body;
    const result = await updateLocationById(service_id, domain, province, district, type, id);
    res.status(200).json(result);
});

// Xoa mot locations theo id
locationsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteLocationById(id);
    res.status(200).json(result);
});

module.exports = { locationsRouter };
