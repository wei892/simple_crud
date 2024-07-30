const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
//import route
const productRoutes = require("./routes/product.route.js")

//initializing express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

// TEST RES
app.get("/", (req, res) => {
  res.send("Hello from node api updated");
});

// Connecting to mongo db
mongoose
  .connect(
    "mongodb+srv://wlinli2403:ZLhI6smxoFLJxHlo@db1.nhbosge.mongodb.net/?retryWrites=true&w=majority&appName=DB1"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });