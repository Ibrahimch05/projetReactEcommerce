const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    order_name: {
        type: String,
        required: true,
    },
    order_address: {
        type: String,
        required: true,
    },
    order_phone: {
        type: String,
        required: true,
    },
    order_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    },
    order_quantity: {
        type: Number,
        required: true,
    },
    order_priceTotal: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Order',OrderSchema)
