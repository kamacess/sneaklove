const express = require("express");
const router = new express.Router();

// Product Dahsboard
router.get("/admin", (req, res) => {
  res.render("prod_management/products_manage");
});

module.exports = router;
