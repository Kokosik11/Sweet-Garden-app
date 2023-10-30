const CategoryModel = require('./model');


const create = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) return res.status(401).json({ error: 'Required field', message: 'Title missing' });
        if (!description) return res.status(401).json({ error: 'Required field', message: 'Description missing' });

        const category = new CategoryModel({ title, description });
        await category.save();

        return res.status(200).json({ message: 'Category created successfully', category });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message })
    }
}

const getAll = async (req, res) => {
    try {
        const categories = await CategoryModel.find({});

        return res.status(200).json({ count: categories.length, result: categories })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message ?? err })
    }
}

module.exports = {
    create,
    getAll
}