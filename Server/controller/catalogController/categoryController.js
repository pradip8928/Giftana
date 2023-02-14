const Category = require("../../models/catalogModel/catagoryModel");


exports.createCategory = async(req, res) => {
    const { name, desc, image } = req.body;

    try {
        let category = await Category.findOne({ name });
        if (category) {
            return res.status(400).json({ errors: [{ msg: "Category already exists" }] });
        }

        category = new Category({ name, desc, image });
        await category.save();



        res.json(category);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

exports.getCategories = async(req, res) => {

    try {
        const categories = await Category.find({});
        res.status(200).json({
            success: true,
            CategoryLength: categories.length,
            Category: categories
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
};


exports.updateCategory = async(req, res) => {
    const { name } = req.body;

    try {
        let category = await Category.findById(req.params.categoryId);
        if (!category) {
            return res.status(404).json({ errors: [{ msg: "Category not found" }] });
        }
        category.name = name;
        await category.save();

        res.json(category);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

exports.deleteCategory = async(req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.categoryId);
        res.status(200).json({ msg: "Category deleted successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};