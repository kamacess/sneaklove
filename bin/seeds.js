const mongoose = require('mongoose');
const sneakerModel = require("../models/Sneaker.js");
const tagModel = require("../models/Tag.js");

const tags = [
    { name: boots },
    { name: ballerine },
    { name: sneakers },
    { name: blue },
    { name: red },
]


const sneakers = [
    {
        name: "converse",
        ref: "1",
        sizes: 39,
        description: "Chuck Taylor All Star Ox W - Bleu",
        image: "https://cdn.sarenza.net/_img/productsv4/0000010185/0000010185_7239_09_504x690.jpg?201812212345&v=20200207103834&interpolation=lanczos-none&fit=inside|650:890",
        price: 129,
        category: "women",
    },
    {
        name: "New Balance",
        ref: "2",
        sizes: 22,
        description: "KL574 J - Rouge",
        image: "https://cdn.sarenza.net/_img/productsv4/0000126886/0000126886_313834_09_504x690.jpg?201812212345&v=20200207103833&interpolation=lanczos-none&fit=inside|650:890",
        price: 48,
        category: "kids",
    },
    {
        name: "Clarks",
        ref: "3",
        sizes: 26,
        description: "Dance Puff Jnr - Bleu",
        image: "https://cdn.sarenza.net/_img/productsv4/0000131707/0000131707_293281_09_504x690.jpg?201812211523&v=20200207103833&interpolation=lanczos-none&fit=inside|650:890",
        price: 45,
        category: "kids",
    },
    {
        name: "converse",
        ref: "4",
        sizes: 26,
        description: "Star Player Suede Ox W - Noir",
        image: "https://cdn.sarenza.net/_img/productsv4/0000049429/0000049429_410664_09_504x690.jpg?201910081747&v=20200207103836&interpolation=lanczos-none&fit=inside|650:890",
        price: 38,
        category: "women"
    },
    {
        name: "Nike",
        ref: "5",
        sizes: 44,
        description: "Classic Cortez Nylon - Bleu",
        image: "https://cdn.sarenza.net/_img/productsv4/0000130239/0000130239_258793_09_504x690.jpg?201901181123&v=20200207103835&interpolation=lanczos-none&fit=inside|650:890",
        price: 64,
        category: "men",
    },
    {
        name: "Adidas original",
        ref: "6",
        sizes: 44,
        description: "Superstar - Blanc",
        image: "https://cdn.sarenza.net/_img/productsv4/0000003350/0000003350_210404_09_504x690.jpg?201901181123&v=20200207103834&interpolation=lanczos-none&fit=inside|650:890",
        price: 70,
        category: "men",
    },
    {
        name: "Aster",
        ref: "7",
        sizes: 21,
        description: "Mocadi - Bleu",
        image: "https://cdn.sarenza.net/_img/productsv4/0000130665/0000130665_431126_09_504x690.jpg?201912301041&v=20200207103833&interpolation=lanczos-none&fit=inside|650:890",
        price: 69,
        category: "kids",
    },
    {
        name: "Puma",
        ref: "8",
        sizes: 42,
        description: "Suede Classic + - Bleu",
        image: "https://cdn.sarenza.net/_img/productsv4/0000044034/0000044034_214022_09_504x690.jpg?201901181123&v=20200207103834&interpolation=lanczos-none&fit=inside|650:890",
        price: 80,
        category: "men"
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
        console.log("sneakers inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("OH NO !", dbErr);
    })

tagModel
    .insertMany(tags)
    .then(dbSuccess => {
        console.log("tags inserted successfully", dbSuccess);
    })
    .catch(dbErr => {
        console.log("OH NO !", dbErr);
    })