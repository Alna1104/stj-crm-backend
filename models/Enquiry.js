const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  description: String,
  quantity: Number,
  type: String,
  operation: String,
  fileUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
