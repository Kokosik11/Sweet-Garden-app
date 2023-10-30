const ProductModel = require('./model');
const ObjectId = require('mongoose').Types.ObjectId;

const create = async (req, res) => {
    try {
        const { title, description, shortDescription, price, image, category } = req.body;

        if (!title) return res.status(401).json({ error: 'Required field', message: 'Title missing' });
        if (!description) return res.status(401).json({ error: 'Required field', message: 'Description missing' });
        if (!shortDescription) return res.status(401).json({ error: 'Required field', message: 'ShortDescription missing' });
        if (!price) return res.status(401).json({ error: 'Required field', message: 'Price missing' });
        if (!image) return res.status(401).json({ error: 'Required field', message: 'Image missing' });
        if (!category) return res.status(401).json({ error: 'Required field', message: 'Category missing' });
        
        const product = new ProductModel({ title, description, shortDescription, price, image, category });
        await product.save();

        return res.status(200).json({ message: 'Product created successfully', product });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message })
    }
}

const getAll = async (req, res) => {
    try {
        const products = await ProductModel.find({});

        return res.status(200).json({ count: products.length, result: products })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message ?? err })
    }
}

const getAllByCategory = async (req, res) => {
    try {
        const { category } = req.params; 

        if (!ObjectId.isValid(category)) return res.status(401).json({ error: 'Invalid field', message: 'Invalid category id' });
        const products = await ProductModel.find({ category: category }).exec();

        return res.status(200).json({ count: products.length, category, result: products })
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message ?? err })
    }
}

module.exports = {
    create,
    getAll,
    getAllByCategory
}