const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getPriceLists,
    getPriceListsByServiceTypeId,
    getPriceListById,
    updatePriceListById,
    deletePriceListById,
    createPriceList } = require("../controllers/priceLists.controller.js");

const priceListsRouter = express.Router();

// Tạo price_lists
priceListsRouter.post("/", validateAccessToken, async (req, res) => {
    const { service_type_id, start_weight, end_weight, basic_price, special_price,
        intra_province_price, inter_provincial_price, inter_domain_price } = req.body;
    const result = await createPriceList(service_type_id, start_weight, end_weight, basic_price, special_price,
        intra_province_price, inter_provincial_price, inter_domain_price);
    res.status(201).json(result);
});

// Lấy tất cả price_lists
priceListsRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getPriceLists();
    res.status(201).json(result);
});

// Lay cac price_lists cua mot service_type theo serviceTypeId
priceListsRouter.get("/service-type/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getPriceListsByServiceTypeId(id);
    res.status(200).json(result);
});

// Lay mot price_lists theo id
priceListsRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getPriceListById(id);
    res.status(200).json(result);
});

// Cap nhat mot price_lists theo id
priceListsRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { service_type_id, start_weight, end_weight, basic_price, special_price,
        intra_province_price, inter_provincial_price, inter_domain_price } = req.body;
    const result = await updatePriceListById(service_type_id, start_weight, end_weight, basic_price, special_price,
        intra_province_price, inter_provincial_price, inter_domain_price, id);
    res.status(200).json(result);
});

// Xoa mot price_lists theo id
priceListsRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deletePriceListById(id);
    res.status(200).json(result);
});

module.exports = { priceListsRouter };
