const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
  try {
    const { customerId, description, quantity, type, operation } = req.body;

    if (!customerId || !description || !quantity || !type || !operation) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newEnquiry = new Enquiry({
      customerId,
      description,
      quantity,
      type,
      operation,
    });

    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry created successfully" });
  } catch (err) {
    console.error("Error creating enquiry:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ date: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error("Error fetching enquiries:", err);
    res.status(500).json({ message: "Failed to fetch enquiries" });
  }
});

module.exports = router;
