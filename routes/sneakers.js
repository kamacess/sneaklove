const express = require("express");
const router = new express.Router();
const sneakerController = require("../controllers/sneaker");

router.get("/", sneakerController.viewAll);

router.get("/:id", sneakerController.view);

router.post("/", sneakerController.create);

router.patch("/:id/edit", sneakerController.edit);

router.delete("/:id/delete", sneakerController.delete);

module.exports = router;
