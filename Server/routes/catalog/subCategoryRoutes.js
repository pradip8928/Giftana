const express = require("express");
const router = express.Router();
const SubcategoryController = require("../../controller/catalogController/subCategoryController");

// Create a subcategory
router.post("/subCategory", SubcategoryController.createSubcategory);

// Get all subcategories
router.get("/subCategory", SubcategoryController.getSubcategories);

// Get a single subcategory by id
router.get("/subCategory/:subcategoryId", SubcategoryController.getSubcategoryById);

// Update a subcategory
router.put("/subCategory/:subcategoryId", SubcategoryController.updateSubcategory);

// Delete a subcategory
router.delete("/subCategory/:subcategoryId", SubcategoryController.deleteSubcategory);

module.exports = router;