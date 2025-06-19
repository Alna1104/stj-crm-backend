const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  contactInfo: { type: String },
  requirementDescription: { type: String },
  source: { type: String },
  category: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
