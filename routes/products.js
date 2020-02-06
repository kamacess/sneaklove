const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker")
const tagModel = require("../models/Tag")

// *********************************
// ROUTES PREFIXEES AVEC "/products"
// *********************************/

router.get("/collection", (req, res, next) => {
    // sneakerModel
    //     .find()
    //     .then(dbResults => {
    //         res.render("products.hbs", {
    //             products: dbResults
    //         });
    //     })
    //     .catch(next);
    res.render("products")
})

router.get("/men", (req, res, next) => {
    // sneakerModel
    //     .find()
    //     .then(dbResults => {
    //         res.render("products.hbs", {
    //             products: dbResults
    //         });
    //     })
    //     .catch(next);
    res.render("products-men")
})

router.get("/women", (req, res, next) => {
    // sneakerModel
    //     .find()
    //     .then(dbResults => {
    //         res.render("products.hbs", {
    //             products: dbResults
    //         });
    //     })
    //     .catch(next);
    res.render("products-women")
})

router.get("/kids", (req, res, next) => {
    // sneakerModel
    //     .find()
    //     .then(dbResults => {
    //         res.render("products.hbs", {
    //             products: dbResults
    //         });
    //     })
    //     .catch(next);
    res.render("products-kids")
})

router.get("/one/:id", (req, res, next) => {
    // sneakerModel
    //     .findById(req.params.id)
    //     .then(dbResult => {
    //         res.render("one_product", {
    //             product: dbResult
    //         });
    //     })
    //     .catch(next);
    res.send("Only one pair of shoes")
})



module.exports = router;
