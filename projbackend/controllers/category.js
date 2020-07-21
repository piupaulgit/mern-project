const Category = require("../models/category")

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cat) => {
        if (err) {
            return res.status(400).json({
                "error": "Category not found"
            })
        }
        req.category = cat
    })
    next();
}

exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, cate) => {
        if (err) {
            return res.status(400).json({
                "error": "inable to save category"
            })
        }
        req.json({ cate })
    })
}