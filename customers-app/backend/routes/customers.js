const express = require("express");
const router = express.Router();
const Customer = require("../models/customer"); // corrected path

// GET: List all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch customers", error: error.message });
  }
});

// GET: Get customer by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);

    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    res.status(200).json(customer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving customer", error: error.message });
  }
});

// POST: Create new customer
router.post("/", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create customer", error: error.message });
  }
});

// PUT: Update customer
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    res.status(200).json(updatedCustomer);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update customer", error: error.message });
  }
});

// DELETE: Delete customer
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await Customer.findByIdAndDelete(id);

    if (!deletedCustomer)
      return res.status(404).json({ message: "Customer not found" });

    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete customer", error: error.message });
  }
});

module.exports = router;
