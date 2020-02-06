const express = require("express");
const router = express.Router();
const userController = require("./../controllers/user");
// const sneakerController = require('./../controllers/user')


router.get("/", (req, res) => {
  res.send("This is the home page");
});

// router.get("/sneakers/:cat", (req, res) => {
//   res.send("bar");
// });

// router.get("/one-product/:id", (req, res) => {
//   res.send("baz");
// });



// router.delete('/user/:id/delete', userController.delete)

module.exports = router;
