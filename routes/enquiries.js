const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

const storage = multer.memoryStorage(); // Replace with diskStorage or S3 if needed
const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    const { customerId, description, quantity, type, operation } = req.body;
    const file = req.file;

    const enquiry = new Enquiry({
      customerId,
      description,
      quantity,
      type,
      operation,
      fileUrl: file ? file.originalname : null, // Replace with actual storage link
    });

    await enquiry.save();
    res.status(201).json({ message: "Enquiry created", enquiry });
  } catch (error) {
    res.status(500).json({ error: "Failed to create enquiry", details: error });
  }
});

module.exports = router;
