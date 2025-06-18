const express = require("express");
const router = express.Router();

// ✅ Test data
const testCustomers = [
  {
    company: "Apollo Tyres",
    contact: "Vaibhav Sharma",
    phone: "+91 9876543210",
    email: "vaibhav@apollo.com",
    gst: "29ABCDE1234F2Z5",
    totalEnquiries: 15,
    quotationsSent: 10,
    workOrdersCompleted: 8,
    lifetimeValue: "₹12,50,000",
    status: "Active"
  },
  {
    company: "Bosch India",
    contact: "Meera Nair",
    phone: "+91 9123456780",
    email: "meera.nair@bosch.in",
    gst: "32AABCF1234K1Z1",
    totalEnquiries: 25,
    quotationsSent: 20,
    workOrdersCompleted: 18,
    lifetimeValue: "₹21,80,000",
    status: "Active"
  }
];

// 🚀 GET /api/customers
router.get("/", (req, res) => {
  res.json(testCustomers);
});

module.exports = router;
