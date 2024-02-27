const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    product_id: {
        type:Number,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type:String,
        required: true,
        
    },
    product_description: {
        type:String,
        required: true,
        
    },
    product_price: {
        type:Number,
        required: true,
        
    },
    product_stock: {
        type: Number,
        default: 0
    },
    
    product_bestSeller: {
        type:Boolean,
        default: false,
        required: true,
        
    },
    product_promotion: {
        type:Boolean,
        default: false,
        required: true,
        
    },
    product_image: {
        type: [String], // Allow an array of strings for images
        default: [],
    },
    product_category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
},
)

module.exports = mongoose.model('Product',ProductSchema)