const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    addressList: [{
       nickname : {
           type: String,
           required: false
       },
       street: {
           type: String,
           required: false
       },
       number: {
           type: String,
           required: false
       },
       city: {
           type: String,
           required: false
       },
       complement: {
           type: String,
           required: false
       },
       state: {
           type: String,
           required: false
       },
       CEP: {
           type: String,
           required: false
       },
       status: {
           type: String,
           required: false
       }
   }]
});

module.exports = mongoose.model('Client', schema);