const express = require("express");
const router = new express.Router();
const userController = require("../controllers/user");

router.get("/", userController.viewAll);

router.get("/:id", userController.view);

router.post("/", userController.create);

router.patch("/:id/edit", userController.edit);

router.delete("/:id/delete", userController.delete);

module.exports = router;
