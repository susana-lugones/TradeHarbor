const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    owner: {type: Schema.types.ObjectId, ref: 'User', required: true},
    image_url: {type: String, required: true},
    price_range: {type: String, required: true}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product