import express from "express";

const app = express();

app.use(express.json())


const PORT = 10000;

let products = []

app.get("/products", (req, res) => {  
    res.json(products);
  })


app.post("/products", (req, res) => {
    const { id, name, price, description } = req.body;
    let x = { id, name, price, description }
    products.push(x);
    res.status(201).json({"message":"Product added successfully to cart", data: x});
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });