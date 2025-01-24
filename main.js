import express from "express";
import hbs from "hbs";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.static('public'));  
app.set("view engine", "hbs");
app.set("views", "views"); 
hbs.registerHelper("formatDate", function (date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
});
hbs.registerHelper("renderStars", function (rating) {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
});
hbs.registerHelper("isUnavailable", function (available) {
    return available ? "" : "unavailable";
  });
    app.get("/doctors", (req, res) => {
    res.render("doctors", { title: "Our Expert Doctors" });
  });
    app.get("/services", (req, res) => {
    const category = req.query.category || "General";
    res.render("services", { title: `${category} Services, category `});
  });
app.post("/book-appointment", (req, res) => {
    const { name, email, service, preferredDate, preferredTime } = req.body;
    res.render("appointment", {
      title: "Appointment Confirmation",
      appointment: {
        name,
        email,
        service,
        preferredDate,
        preferredTime,
      },
    });
  });
app.get("/offerings", (req, res) => {
    const offerings = [
      {
        name: "Anti-Aging Treatment",
        price: 5000,
        duration: "60 mins",
        description: "Advanced treatment to reduce fine lines and wrinkles",
        available: true,
      },
      {
        name: "Acne Treatment",
        price: 3000,
        duration: "45 mins",
        description: "Specialized treatment for acne-prone skin",
        available: true,
      },
      {
        name: "Chemical Peel",
        price: 4000,
        duration: "30 mins",
        description: "Skin resurfacing treatment for even tone",
        available: false,
      },
    ];
  
    res.render("offerings", { title: "Our Offerings", offerings });
  });
app.get("/testimonials", (req, res) => {
    const testimonials = [
      {
        name: "Hani Vaghani",
        rating: 5,
        comment: "Excellent service!",
        date: "2024-01-20",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Very professional staff",
        date: "2024-01-18",
      },
    ];  
    res.render("testimonials", { title: "Testimonials", testimonials });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});