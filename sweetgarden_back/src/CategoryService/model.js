const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = Schema({
    title: String,
    description: String,
})

const CategoryModel = mongoose.model('Category', CategorySchema);
module.exports = CategoryModel;