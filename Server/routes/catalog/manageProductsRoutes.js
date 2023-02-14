/*
const express = require("express");
const router = express.Router();
const {

    createProduct,
    getAllProduct,
    getLowStockProducts,
    getProductDetail,
    updateProduct,
    deleteOneProduct,
    deleteMultipleProducts,
    createProductReview,
    getProductReviews,
    deleteReviews,

} = require("../../controller/catalogController/manageProductsController");

const { authenticatedAdmin } = require("../../middleware/adminAuth");

router.route("/manageProducts/createProduct").post(createProduct);
router.route("/manageProducts/getAllProduct").get(getAllProduct);

router.route("/review").put(createProductReview);
router
    .route("/reviews")
    .get(getProductReviews)
    .delete(deleteReviews);

router.route("/manageProducts/getLowStockProducts").get(getLowStockProducts);


router.route("/manageProducts/product/:id").get(getProductDetail);
router.route("/manageProducts/product/:id").put(updateProduct);
router.route("/manageProducts/product/:id").delete(deleteOneProduct);
router
    .route("/manageProducts/products/deleteMultipleProducts")
    .delete(deleteMultipleProducts);

module.exports = router;


*/


/////////////////Products Routes///////////////////////////////


const express = require("express");
const router = express.Router();
const ProductController = require("../../controller/catalogController/manageProductsController");

// Create a product
router.post("/product", ProductController.createProduct);

// Get all products
router.get("/product", ProductController.getProducts);

// Get a single product by id
// router.get("/:id", ProductController.getProduct);

// Update a product
router.put("/product/:id", ProductController.updateProduct);

// Delete a product
router.delete("/product/:id", ProductController.deleteProduct);

module.exports = router;