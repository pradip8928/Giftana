const Subcategory = require("../../models/catalogModel/subCategoryModel");
const Category = require("../../models/catalogModel/catagoryModel");

exports.createSubcategory = async(req, res) => {
    const { name, desc, externalLink, image, category } = req.body;

    try {
        let subcategory = await Subcategory.findOne({ name });
        if (subcategory) {
            return res.status(400).json({ errors: [{ msg: "Subcategory already exists" }] });
        }

        subcategory = new Subcategory({
            name,
            desc,
            externalLink,
            image,
            category
        });

        await subcategory.save();




        // // Get the parent Category document
        // const parentCategory = await Category.findById(category);
        // console.log(parentCategory);
        // // Push the subcategory _id to the subcategories array in the parent Category document
        // parentCategory.subcategories.push(subcategory._id);

        // // Save both the subcategory and the parent Category document
        // await Promise.all([subcategory.save(), parentCategory.save()]);

        // Get the parent Category document
        let parentCategory = await Category.findById(category);
        if (!parentCategory) {
            return res.status(400).json({ errors: [{ msg: "Parent category not found" }] });
        }

        // Push the subcategory _id to the subcategories array in the parent Category document
        parentCategory.subcategories.push(subcategory._id);

        // Save the parent Category document
        await parentCategory.save();


        res.json(subcategory);




    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};



// exports.createSubcategory = async(req, res) => {
//     const { name, category } = req.body;

//     try {
//         let subcategory = await Subcategory.findOne({ name });
//         if (subcategory) {
//             return res.status(400).json({ errors: [{ msg: "Subcategory already exists" }] });
//         }

//         subcategory = new Subcategory({
//             name,
//             category
//         });

//         await subcategory.save();

//         // Get the parent Category document
//         const parentCategory = await Category.findById(category);
//         console.log(parentCategory);
//         // Push the subcategory _id to the subcategories array in the parent Category document
//         parentCategory.subcategories.push(subcategory._id);

//         // Save both the subcategory and the parent Category document
//         await Promise.all([subcategory.save(), parentCategory.save()]);


//         res.json(subcategory);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server error");
//     }
// };

exports.getSubcategories = async(req, res) => {
    try {
        console.log("subcatetori");
        const subcategories = await Subcategory.find().populate("category", "name").populate("products", "name");
        // const subcategories = await Subcategory.find();
        console.log(subcategories);
        // res.json(subcategories);
        if (!subcategories) {
            return res.status(404).json({ msg: "Subcategory not found" });
        }


        res.status(200).json({
            success: true,
            SubcategoriesLength: subcategories.length,
            Subcategories: subcategories
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

exports.getSubcategoryById = async(req, res) => {
    try {
        const subcategory = await Subcategory.findById(req.params.subcategoryId).populate("category", "name").populate("products", "name");

        if (!subcategory) {
            return res.status(404).json({ msg: "Subcategory not found" });
        }

        res.json(subcategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};

exports.updateSubcategory = async(req, res) => {
    const { name } = req.body;

    const subcategoryFields = {};
    if (name) subcategoryFields.name = name;
    try {
        let subcategory = await Subcategory.findById(req.params.subcategoryId);
        if (!subcategory) return res.status(404).json({ msg: "Subcategory not found" });

        subcategory = await Subcategory.findByIdAndUpdate(
            req.params.subcategoryId, { $set: subcategoryFields }, { new: true }
        );

        res.json(subcategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};



exports.deleteSubcategory = async(req, res) => {
    try {
        await Subcategory.findByIdAndDelete(req.params.subcategoryId);
        res.status(200).json({ msg: "Subcategory deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};