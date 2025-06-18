const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  company: { type: String, required: true },
  contact: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  gst: { type: String },
  totalEnquiries: { type: Number, default: 0 },
  quotationsSent: { type: Number, default: 0 },
  workOrdersCompleted: { type: Number, default: 0 },
  lifetimeValue: { type: String, default: "₹0" },
  status: { type: String, default: "Active" }
}, { timestamps: true });

module.exports = mongoose.model("Customer", customerSchema);