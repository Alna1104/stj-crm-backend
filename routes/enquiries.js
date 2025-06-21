const express = require("express");
const multer = require("multer");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// Store file in memory (you can later modify this for S3 or other storage)
const storage = multer.memoryStorage();
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
      fileUrl: file ? file.originalname : null // update to actual upload URL if needed
    });

    await enquiry.save();

    res.status(201).json({ message: "Enquiry created successfully", enquiry });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ error: "Failed to create enquiry" });
  }
});

module.exports = router;
