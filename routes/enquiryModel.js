const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry.model");

// // Create new enquiry
// router.post("/", async (req, res) => {
//   try {
//     const enquiry = new Enquiry(req.body);
//     await enquiry.save();
//     res.status(201).json(enquiry);
//   } catch (err) {
//     console.error("Error creating enquiry:", err);
//     res.status(500).json({ message: "Failed to create enquiry" });
//   }
// });

// Get all enquiries
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
