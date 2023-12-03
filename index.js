const express = require('express');
const punycode = require('punycode');
const app = express();
const mongoose = require('mongoose');
const { createProduct, getProduct, deleteProduct, updateProduct } = require("./prodoperation")
app.use(express.json());


     mongoose.connect('mongodb://localhost:27017').then(async () => { // fro local server
    console.log("Connection to MogoDB Successful");
    let getProducts = await getProduct();
    console.log(getProducts);
    // let product = await createProduct("Lenovo" , "YogaBook" , "100000");
    // console.log(product);
    }).catch((err) => {
    console.log("Connection Failed");
    console.log(err);
});

app.listen(3200)