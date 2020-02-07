const express = require("express");
const router = new express.Router();
const db = require("./../controllers/dbHelper");

// Product Dahsboard
router.get("/prod-manage", async (req, res) => {
  const sneakers = await db.sneakerViewAll();
  res.render("prod_management/products_manage", { sneakers: sneakers, scripts: ["admin.js"] });
});

// Add Product
router.get("/prod-add", (req, res) => {
  res.render("prod_management/products_add");
});

module.exports = router;
