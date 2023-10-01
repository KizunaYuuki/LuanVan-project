const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getAllAddress,
    getAllAddressByOrderId,
    getAddressById,
    updateAddressById,
    deleteAddressById,
    createAddress } = require("../controllers/address.controller.js");

const addressRouter = express.Router();

// Tao mot address
addressRouter.post("/", validateAccessToken, async (req, res) => {
    const { order_id, province, district, ward, type } = req.body;
    const result = await createAddress(order_id, province, district, ward, type);
    res.status(201).json(result);
});

// Lấy tất cả address
addressRouter.get("/", validateAccessToken, async (req, res) => {
    const result = await getAllAddress();
    res.status(201).json(result);
});

// Lay cac address cua mot order theo orderId
addressRouter.get("/order/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getAllAddressByOrderId(id);
    res.status(200).json(result);
});

// Lay mot address theo id
addressRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await getAddressById(id);
    res.status(200).json(result);
});

// Cap nhat mot address theo id
addressRouter.put("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const { province, district, ward } = req.body;
    const result = await updateAddressById(province, district, ward, id);
    res.status(200).json(result);
});

// Xoa mot address theo id
addressRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const result = await deleteAddressById(id);
    res.status(200).json(result);
});

module.exports = { addressRouter };
