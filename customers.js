const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

const Customer = require("../models/Customer");
const Enquiry = require("../models/Enquiry");

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });

    const customersWithCounts = await Promise.all(
      customers.map(async (customer) => {
        const enquiryCount = await Enquiry.countDocuments({ customerId: customer._id });
        return {
          ...customer.toObject(),
          enquiryCount,
        };
      })
    );

    res.json(customersWithCounts);
  } catch (err) {
    console.error("Failed to fetch customers:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const saved = await customer.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

router.put("/:id", async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
});

module.exports = router;
