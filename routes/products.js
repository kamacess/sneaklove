const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)
const sneakerModel = require("../models/Sneaker");
const tagModel = require("../models/Tag");

// *********************************
// ROUTES PREFIXEES AVEC "/products"
// *********************************/

// const displayTags = tagModel
//   .find()
//   .then(tags=> {
//     res
//   })

// router.get("/collection", (req, res, next) => {
//   sneakerModel
//     .find()
//     .then(sneakers => {
//       tagModel
//         .find()
//         .then(tags => {
//           res.render("products", {
//             products: sneakers,
//             tags
//           });
//         })
//         .catch(next);
//     })
//     .catch(next);
// });

router.get("/collection", (req, res, next) => {
  Promise.all([sneakerModel.find(), tagModel.find()])
    .then(dbRes => {
      const products = dbRes[0];
      const tags = dbRes[1];
      res.render("products", {
        products,
        tags,
        scripts: ["admin.js"]
      });
    })
    .catch(next);
});

router.get("/:category", (req, res, next) => {
  Promise.all([sneakerModel.find({ category: req.params.category }), tagModel.find()])
    .then(dbRes => {
      const products = dbRes[0];
      const tags = dbRes[1];
      res.render("products", {
        products,
        tags,
        scripts: ["admin.js"]
      });
    })
    .catch(next);
});

// router.get("/:category", (req, res, next) => {
//   sneakerModel
//     .find({ category: req.params.category })
//     .then(sneakers => {
//       res.render("products", {
//         products: sneakers
//       });
//     })
//     .catch(next);
// });

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
      res.render("prod_management/product_edit", {
        product: dbRes,
        testMen: dbRes.category === "men",
        testKids: dbRes.category === "kids",
        testWomen: dbRes.category === "women"
      });
    })
    .catch(next);
});

router.post("/product-edit/:id", (req, res, next) => {
  const { name, ref, sizes, description, image, price, category, tags } = req.body;

  sneakerModel
    .findByIdAndUpdate(req.params.id, {
      name,
      ref,
      sizes,
      description,
      image,
      price,
      category,
      tags
    })
    .then(dbRes => {
      res.redirect("/prod-manage");
    })
    .catch(next);
});

module.exports = router;
