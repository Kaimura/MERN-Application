const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const ReceiptSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [
            {
                name: {
                    type: String, 
                    required: true
                }, 
                measureUnit: {
                    type: String, 
                    required: true
                },
                standardUnit: {
                    type: Number, 
                    required: true
                }
            }
        ],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Receipt = mongoose.model('receipt', ReceiptSchema);