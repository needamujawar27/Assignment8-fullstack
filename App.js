const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const usernameModel = require("./model/usernameModel");
const productlistsModel = require("./model/productlistsModel");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productsdb")
    .then(() => {
        console.log("Mongodb is connected!!!")
    });

app.get("/product", async (req, res) => {
    const result = await productlistsModel.find({});
    res.json(result)
});

app.post("/addproduct",async (req, res) => {
    const result = await new productlistsModel(req.body)
    result.save();
    res.json("Product is Added Successfully")
});

app.get("/user", async (req, res) => {
    const result = await usernameModel.find({});
    res.json(result)
});

app.post("/adduser", async (req, res) => {
    const result = new usernameModel(req.body)
    await result.save();
    res.json("User is Added Successfully")
})

app.listen(4040, () => {
    console.log("API is runinng Port Number 4040")
})