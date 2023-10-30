const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = Schema({
    title: String,
    description: String,
    shortDescription: String,
    price: Number,
    image: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
})

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;