const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

router.post("/", async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry created successfully" });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ error: "Failed to create enquiry" });
  }
});

module.exports = router;
