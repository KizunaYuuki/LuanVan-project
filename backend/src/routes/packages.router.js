const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware.js");

const { 
    getPackages,
    getOrdersByOrderId,
    getPackageById,
    deletePackageById,
    createPackage } = require("../controllers/packages.controller.js");

const packagesRouter = express.Router();

// Tạo package
packagesRouter.post("/", validateAccessToken, async (req, res) => {
    const { order_id, lenght, width, height, weight, price, description } = req.body;
    const packages = await createPackage(order_id, lenght, width, height, weight, price, description);
    res.status(201).json(packages);
});

// Lấy tất cả package
packagesRouter.get("/", validateAccessToken, async (req, res) => {
    const packages = await getPackages();
    res.status(200).json(packages);
});

// Lay cac goi hang cua mot đơn hàng theo orderId
packagesRouter.get("/order/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const packages = await getOrdersByOrderId(id);
    res.status(200).json(packages);
});

// Lay mot goi hang theo id
packagesRouter.get("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const packages = await getPackageById(id);
    res.status(200).json(packages);
});

// Xoá mot don hang theo id
packagesRouter.delete("/:id", validateAccessToken, async (req, res) => {
    const id = req.params.id;
    const packages = await deletePackageById(id);
    res.status(200).json(packages);
});

module.exports = { packagesRouter };
