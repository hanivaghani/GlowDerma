import express from 'express';
const app = express();
let PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to GlowDerma - Your Skincare Journey Begins Here")
})
app.get("/about", (req, res) => {
    res.send("<h3>We are a premium skincare brand committed to bringing you dermatologist-approved, clean beauty products</h3>")
})
app.get("/contact", (req, res) => {
    res.send({
  "email": "care@glowderma.com",
  "instagram": "http://instagram.com/glowderma",
  "consultation": "http://glowderma.com/book-appointment"
})
})
app.get("/services", (req, res) => {
    res.send("Services provided by Skinfinity")
})
app.get("/products", (req, res) => {
    res.send("Product page")
})
let items = [
    {
        id: 1,
        name: "Face Wash",
        price: "200",
        description: "Daily face wash for glowing skin"
    },
    {
        id: 2,
        name: "Face Cream",
        price: "300",
        description: "Moisturizing face cream for soft skin"
    },
    {
        id: 3,
        name: "Body Lotion",
        price: "250",
        description: "Hydrating body lotion for soft skin"
    },
    {
        id: 4,
        name: "Sunscreen",
        price: "350",
        description: "Protects skin from UV rays"
    },
    {
        id: 5,
        name: "Face Pack",
        price: "400",
        description: "Face pack for glowing skin"
    },
    {
        id: 6,
        name: "Face Scrub",
        price: "300",
        description: "Face scrub for removing dead skin cells"
    },
    {
        id: 7,
        name: "Hair Oil",
        price: "200",
        description: "Nourishing hair oil for healthy hair"
    },
    {
        id: 8,
        name: "Shampoo",
        price: "250",
        description: "Gentle shampoo for all hair types"
    },
    {
        id: 9,
        name: "Conditioner",
        price: "300",
        description: "Moisturizing conditioner for soft hair"
    },
    {
        id: 10,
        name: "Hair Serum",
        price: "400",
        description: "Hair serum for shiny and healthy hair"
    }
]
app.get("/products/:pid", (req, res) => {
    let pid = parseInt(req.params.pid)
    let product = items.find(item => item.id === pid)
    if (product) {
        res.status(200).json({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description
        })
    }
    else {
        res.status(400).send("Product not found")
    }
})
app.get("/policy", (req, res) => {
    res.send("Policy Information")
})
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found" });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})