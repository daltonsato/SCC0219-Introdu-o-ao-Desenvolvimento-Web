const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: { // used in URL i.e.: /produtos/ovo-galinha-1
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    suppliers: [{
        type: String,
        required: true,
    }],
    category: {
        type: String,
        required: true,
        enum: ['pó', 'caipira', 'branco'],
        default: 'ovo exótico'
    }
    
});

module.exports = mongoose.model('Product', schema);