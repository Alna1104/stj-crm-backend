const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");
const multer = require("multer");
const path = require("path");

// Set up storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Uploads will go into 'uploads/' folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter for specific extensions
const fileFilter = (req, file, cb) => {
  const allowedTypes = [".pdf", ".dxf", ".dwg"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, DXF, and DWG files are allowed"));
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/", async (req, res) => {
  try {
    const { customerId, description, quantity, type, operation } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
    if (!customerId || !description || !quantity || !type || !operation) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newEnquiry = new Enquiry({
      customerId,
      description,
      quantity,
      type,
      operation,
      file: fileUrl
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
    const enquiries = await Enquiry.find()
      .populate("customerId") // fetch company, contact, phone, etc.
      .sort({ createdAt: -1 });

    res.json(enquiries);
  } catch (error) {
    console.error("Failed to fetch enquiries", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
