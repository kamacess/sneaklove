const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");

// *********************************
// ROUTES PREFIXEES AVEC "/products"
// *********************************/

router.get("/collection", (req, res, next) => {
  sneakerModel
    .find()
    .then(sneakers => {
      res.render("products", {
        products: sneakers
      });
    })
    .catch(next);
});

router.get("/men", (req, res, next) => {
  sneakerModel
    .find({ category: "men" })
    .then(sneakers => {
      res.render("products-men", {
        products: sneakers
      });
    })
    .catch(next);
});

router.get("/women", (req, res, next) => {
  sneakerModel
    .find({ category: "women" })
    .then(dbResults => {
      res.render("products-women", {
        products: dbResults
      });
    })
    .catch(next);
});

router.get("/kids", (req, res, next) => {
  sneakerModel
    .find({ category: "kids" })
    .then(dbResults => {
      res.render("products-kids", {
        products: dbResults
      });
    })
    .catch(next);
});

router.get("/one-product/:id", (req, res, next) => {
  sneakerModel
    .findById(req.params.id)
    .then(dbResult => {
      res.render("one_product", {
        product: dbResult
      });
    })
    .catch(next);
});

router.get("/product-edit/:id", (req, res, next) => {
  sneakerModel
    .findById(req.params.id)
    .then(dbRes => {
      res.render("prod_management/product_edit", { product: dbRes });
    })
    .catch(next);
});

module.exports = router;
