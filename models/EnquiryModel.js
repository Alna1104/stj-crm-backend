const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  customer: String,
  contact: String,
  requirement: String,
  source: String,
  category: String,
  type: String,
  segment: String,
  status: {
    type: String,
    default: "New",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enquiry", enquirySchema);
