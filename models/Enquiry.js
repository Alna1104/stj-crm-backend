const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    type: { type: String, enum: ["Project", "Product"], required: true },
    operation: { type: String, enum: ["Machining", "Laser Cutting"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Enquiry", enquirySchema);
