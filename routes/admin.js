const express           = require("express");
const router            = new express.Router();
const db                = require("./../controllers/dbHelper");
const sneakerController = require("./../controllers/sneaker");
const fileUploader      = require("./../config/cloudinary");

// à gérer avec ajax 
// const tagController     = require("./../controllers/tag");


// Product Dahsboard
router.get("/prod-manage", async (req, res) => {
  const sneakers = await db.sneakerViewAll();
  res.render("prod_management/products_manage", { sneakers: sneakers, scripts: ["admin.js"] });
});

// Add Product
router.get("/prod-add", (req, res) => {
  res.render("prod_management/products_add");
});

router.post("/prod-add", fileUploader.single("image"), sneakerController.create);



module.exports = router;
