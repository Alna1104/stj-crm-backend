const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true
  },
  description: String,
  quantity: Number,
  type: {
    type: String,
    enum: ["Project", "Product"]
  },
  operation: {
    type: String,
    enum: ["Machining", "Laser Cutting"]
  },
  fileUrl: String,
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);
