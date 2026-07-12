const express = require("express");
const router = express.Router();

const {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

// Get All Properties
router.get("/", getProperties);

// Add Property
router.post("/", addProperty);

// Update Property
router.put("/:id", updateProperty);

// Delete Property
router.delete("/:id", deleteProperty);

module.exports = router;