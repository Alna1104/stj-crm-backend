const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  customerName: String,
  contactInfo: String,
  requirementDescription: String,
  source: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Enquiry", EnquirySchema);

