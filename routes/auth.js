const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const userController = require("./../controllers/user");
const sneakerController = require("./../controllers/sneaker");
const tagController = require("./../controllers/tag");

// *********************************
// ROUTES PAS PREFIXÉES
// *********************************/

// action : registering
router.get("/signup", (req, res) => {
  res.render("prod_management/signup");
});

router.post("/signup", userController.create);

// action : loging in
router.get("/signin", (req, res) => {
  res.render("prod_management/signin");
});

router.post("/signin", (req, res) => {
    res.render("prod_management/products_manage")
})

router.get("/products_manage", (req, res) => {
    res.render("prod_management/products_manage")
})


// action : logging out

module.exports = router;
