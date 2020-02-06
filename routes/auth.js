const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");

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
