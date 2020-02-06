const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const userController = require("./../controllers/user");
const sneakerController = require("./../controllers/sneaker");
const tagController = require("./../controllers/tag");

// *********************************
// ROUTES PREFIXEES AVEC "/auth"
// *********************************/

router.get("/signup", (req, res) => {
  res.send("This is where the user signs up");
});

router.get("/signin", (req, res) => {
  res.send("This is where the user signs in");
});

module.exports = router;
