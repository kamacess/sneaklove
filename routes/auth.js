const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const userController = require("./../controllers/user");
const sneakerController = require("./../controllers/sneaker");
const tagController = require("./../controllers/tag");
const db = require("./../controllers/dbHelper");

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

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("----------", req.body);
  console.log(email, password);

  if (!email || !password) {
    console.log("Missing inputs");
    return res.redirect("/signin");
  }
  const user = await db.userFindByEmail(email);
  if (!user) {
    console.log("User does not exist");
    return res.redirect("/signin");
  }
  if (bcrypt.compareSync(user.password, password)) {
    console.log("Password does not match");
    return res.redirect("/signin");
  }
  return res.render("prod_management/products_manage");
});

router.get("/products_manage", (req, res) => {
  res.render("prod_management/products_manage");
});

// action : logging out

module.exports = router;
