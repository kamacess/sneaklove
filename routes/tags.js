const express = require("express");
const router = new express.Router();
const tagController = require("../controllers/tag");

router.get("/", tagController.viewAll);

router.get("/:id", tagController.view);

router.post("/", tagController.create);

router.patch("/:id/edit", tagController.edit);

router.delete("/:id/delete", tagController.delete);

module.exports = router;
