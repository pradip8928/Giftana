// const express = require("express");
// const router = express.Router();
// const {
//     createProduct,
//     getCategoryProducts,
//     getAllProduct,
//     getProductDetail,
//     updateProduct,
//     deleteOneProduct,
//     deleteMultipleProducts,
// } = require("../../controller/catalogController/catagoryController");

// const { authenticatedAdmin } = require("../../middleware/adminAuth");
// router.route("/catagory/getCategoryProducts/:categoryId").get(getCategoryProducts);
// router.route("/catagory/getAllProduct").get(getAllProduct);

// router.route("/catagory/createProduct").post(createProduct);
// router.route("/catagory/product/:id").get(getProductDetail);
// router.route("/catagory/product/:id").put(updateProduct);
// router
//     .route("/catagory/product/:id")
//     .delete(deleteOneProduct);
// // add
// // router.route("/catagory/product/delete").delete(deleteProduct);
// router
//     .route("/catagory/products/deleteMultipleProducts")
//     .delete(deleteMultipleProducts);

// module.exports = router;



// Updated Code



const express = require("express");
const router = express.Router();
const CategoryController = require("../../controller/catalogController/categoryController");

// Create a category
router.post("/category", CategoryController.createCategory);

// Get all categories
router.get("/category", CategoryController.getCategories);

// Get a single category by id
// router.get("/:id", CategoryController.getCategory);

// Update a category
router.put("/category/:categoryId", CategoryController.updateCategory);

// Delete a category
router.delete("/category/:categoryId", CategoryController.deleteCategory);

module.exports = router;