const express = require("express");
const router = express.Router();
const userController = require("./../controllers/user");
// const sneakerController = require('./../controllers/user')

router.get("/", (req, res) => {
  res.send("foo");
});

router.get("/sneakers/:cat", (req, res) => {
  res.send("bar");
});

router.get("/one-product/:id", (req, res) => {
  res.send("baz");
});

router.get("/signup", (req, res) => {
  res.send("sneak");
});

router.get("/signin", (req, res) => {
  res.send("love");
});

// router.delete('/user/:id/delete', userController.delete)

module.exports = router;
