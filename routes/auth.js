const express = require("express");
const router = new express.Router();
const bcrypt = require("bcryptjs");

// *********************************
// ROUTES PAS PREFIXÉES
// *********************************/

router.get("/signup", (req, res) => {
  res.send("This is where the user signs up");
});

router.get("/signin", (req, res) => {
  res.send("This is where the user signs in");
});

// action : registering

// action : loging in

// action : logging out





module.exports = router;
