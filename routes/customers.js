const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });

    // Attach enquiry count to each customer
    const customersWithCounts = await Promise.all(
      customers.map(async (customer) => {
        const totalEnquiries = await Enquiry.countDocuments({ customerId: customer._id });
        return {
          ...customer.toObject(),
          totalEnquiries,
        };
      })
    );

    res.json(customersWithCounts);
  } catch (err) {
    console.error("Failed to fetch customers:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

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
