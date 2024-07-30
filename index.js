const express = require('express');
const mongoose = require('mongoose');
const Product = require("./model/product.model.js")

const app = express();
app.use(express.json());


// TEST RES
app.get("/", (req, res) => {
    res.send("Hello from node api updated");
});

// Connecting to mongo db
mongoose.connect("mongodb+srv://wlinli2403:ZLhI6smxoFLJxHlo@db1.nhbosge.mongodb.net/?retryWrites=true&w=majority&appName=DB1")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("Connection failed");
});

// POST request
app.post('/api/products', async (req,res) =>{
    // console.log(req.body);
    // // res.send("hello");
    // res.send(req.body);

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET ALL Request
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//GET individual item
app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.find({id});
        res.status(200).json(product);
    }
    catch (error){
        res.status(500).json({message : error.message});
    }
})