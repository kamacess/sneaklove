const mongoose = require('mongoose');
const sneakerModel = require("../models/Sneaker.js");
const sneakers = [
    {
        name: "test",
          ref: "1",
          sizes:[37,38,39,40,41,42,43,44,45,46],
          description: "shoes 1",
          image: "",
          price: 60,
          category: "men",
    },
    {
        name: "test",
          ref: "2",
          sizes:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
          description: "shoes 2",
          image: "",
          price: 20,
          category: "kids",
    },
    {
        name: "test",
          ref: "3",
          sizes:[35,36,37,38,39,40,41,42,43,44,45,46],
          description: "shoes 3",
          image: "",
          price: 50,
          category: "women",
    },
    {
        name: "test",
          ref: "4",
          sizes:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
          description: "shoes 4",
          image: "",
          price: 30,
          category: "kids"
    },
    {
        name: "test",
          ref: "5",
          sizes:[37,38,39,40,41,42,43,44,45,46],
          description: "shoes 5",
          image: "",
          price: 80,
          category: "men",
    },
    {
        name: "test",
          ref: "6",
          sizes:[36,37,38,39,40,41,42,43,44,45,46],
          description: "shoes 6",
          image: "",
          price: 70,
          category: "men",
    },
    {
        name: "test",
          ref: "7",
          sizes:[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],
          description: "shoes 7",
          image: "",
          price: 40,
          category: "kids",
    },
    {
        name: "test",
          ref: "8",
          sizes:[34,35,36,37,38,39,40,41,42,43],
          description: "shoes 8",
          image: "",
          price: 90,
          category: "women"
    }
];

mongoose
    .connect('mongodb://localhost/sneakerlove', { useNewUrlParser: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

sneakerModel
    .insertMany(sneakers)
    .then(dbSuccess => {
        console.log("movies inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("OH NO !", dbErr);
    })