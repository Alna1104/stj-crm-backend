const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// // GET /api/customers → Returns all customers
// router.get("/", async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.json(customers);
//   } catch (error) {
//     console.error("Error fetching customers:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// POST /api/customers → Add a new customer
router.post("/", async (req, res) => {
  try {
    console.log("Received POST:", req.body); // 🔍 Add this
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error creating customer:", error);
    res.status(400).json({ message: "Bad request" });
  }
});

module.exports = router;
