const mongoose = require('mongoose');
const sneakerModel = require("../models/Sneaker.js");
const sneakers = [
    {
        name: "converse",
          ref: "1",
          sizes:39,
          description: "Chuck Taylor All Star Ox W - Bleu",
          image: "https://cdn.sarenza.net/_img/productsv4/0000010185/0000010185_7239_09_504x690.jpg?201812212345&v=20200207103834&interpolation=lanczos-none&fit=inside|650:890",
          price: 129,
          category: "women",
    },
    {
        name: "test",
          ref: "2",
          sizes:22,
          description: "shoes 2",
          image: "",
          price: 20,
          category: "kids",
    },
    {
        name: "test",
          ref: "3",
          sizes:37,
          description: "shoes 3",
          image: "",
          price: 50,
          category: "women",
    },
    {
        name: "test",
          ref: "4",
          sizes:26,
          description: "shoes 4",
          image: "",
          price: 30,
          category: "kids"
    },
    {
        name: "test",
          ref: "5",
          sizes:40,
          description: "shoes 5",
          image: "",
          price: 80,
          category: "men",
    },
    {
        name: "test",
          ref: "6",
          sizes:44,
          description: "shoes 6",
          image: "",
          price: 70,
          category: "men",
    },
    {
        name: "test",
          ref: "7",
          sizes:21,
          description: "shoes 7",
          image: "",
          price: 40,
          category: "kids",
    },
    {
        name: "test",
          ref: "8",
          sizes:38,
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