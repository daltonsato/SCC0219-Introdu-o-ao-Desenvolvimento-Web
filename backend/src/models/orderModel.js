const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client'
    },
    products: [{
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    purchaseDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    status: {
        type: String,
        require: true,
        enum: ['created', 'confirmed', 'delivered']
    }
});

module.exports = mongoose.model('Order', schema);