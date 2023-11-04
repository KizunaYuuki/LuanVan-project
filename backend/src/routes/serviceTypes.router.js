const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const {
    getServiceTypes,
    getServiceTypesByProviderId,
    getServiceTypeById,
    updateServiceTypeById,
    deleteServiceTypeById,
    createServiceType } = require("../controllers/serviceTypes.controller.js");

const serviceTypesRouter = express.Router();

// Tạo service_type
serviceTypesRouter.post("/", validateAccessToken, async (req, res) => {
    const {
        providers_id, name, area, break_weight,
        intra_province_min_time, intra_province_max_time,
        inter_provincial_min_time, inter_provincial_max_time,
        inter_domain_min_time, inter_domain_max_time,
        intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price } = req.body;
    const result = await createServiceType(
        providers_id, name, area, break_weight,
        intra_province_min_time, intra_province_max_time,
        inter_provincial_min_time, inter_provincial_max_time,
        inter_domain_min_time, inter_domain_max_time,
        intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price);
    res.status(201).json(result);
});

// Lấy tất cả service_type
serviceTypesRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getServiceTypes();
    res.status(201).json(result);
});

// Lay cac service_type cua mot provider theo providerId
serviceTypesRouter.get("/provider/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getServiceTypesByProviderId(id);
    res.status(200).json(result);
});

// Lay mot service_type theo id
serviceTypesRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getServiceTypeById(id);
    res.status(200).json(result);
});

// Cap nhat mot service_type theo id
serviceTypesRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const {
        providers_id, name, area, break_weight,
        intra_province_min_time, intra_province_max_time,
        inter_provincial_min_time, inter_provincial_max_time,
        inter_domain_min_time, inter_domain_max_time,
        intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price
    } = req.body;
    const result = await updateServiceTypeById(
        providers_id, name, area, break_weight,
        intra_province_min_time, intra_province_max_time,
        inter_provincial_min_time, inter_provincial_max_time,
        inter_domain_min_time, inter_domain_max_time,
        intra_province_extra_price, inter_provincial_extra_price, inter_domain_extra_price, id);
    res.status(200).json(result);
});

// Xoa mot service_type theo id
serviceTypesRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteServiceTypeById(id);
    res.status(200).json(result);
});

module.exports = { serviceTypesRouter };
