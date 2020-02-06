const express = require("express");
const router = new express.Router();

// Product Dahsboard
router.get("/prod-manage", (req, res) => {
  res.render("prod_management/products_manage");
});

// Add Product
router.get("/prod-add", (req, res) => {
  res.render("prod_management/products_add");
});

module.exports = router;
