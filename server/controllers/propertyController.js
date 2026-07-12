const Property = require("../models/Property");

// Get All Properties
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Property
const addProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);

    res.status(201).json({
      message: "Property Added Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Property
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!property) {
      return res.status(404).json({
        message: "Property Not Found",
      });
    }

    res.json({
      message: "Property Updated Successfully",
      property,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Property
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);

    if (!property) {
      return res.status(404).json({
        message: "Property Not Found",
      });
    }

    res.json({
      message: "Property Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProperties,
  addProperty,
  updateProperty,
  deleteProperty,
};