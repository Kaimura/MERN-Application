const express = require('express');
const router = express.Router();

// Receipt Model
const ReceiptSchema = require('../../models/ReceiptSchema');

// @route   GET api/receipts
// @desc    Get All receipts
// @access  Public
router.get('/', (req, res) => { //only '/' since it is already in the api/receipts
    ReceiptSchema.find() //mongo DB functionality to find all objects in the mongo DB
        .sort({ date: -1 }) //mongoose functionality to sort
        .then(receipts => res.json(receipts));
});

// @route   POST api/receipts
// @desc    Create A receipt
// @access  Public
router.post('/', (req, res) => {
    const newReceipt = new ReceiptSchema({
        name: req.body.name,
        ingredients: req.body.ingredients
    });
    newReceipt.save().then(receipt => res.json(receipt));
});

// @route   DELETE api/receipts/:id
// @desc    Delete A receipt
// @access  Public
router.delete('/:id', (req, res) => {
    ReceiptSchema.findById(req.params.id)
        .then(receipt => receipt.remove().then(() => res.json({deleted:true})))
        .catch(err => res.status(404).json({deleted: false}));
});

// @route   UPDATE api/receipts/:id
// @desc    Update A receipt
// @access  Public
// router.update('/:id', (req, res) => {

// });

module.exports = router; //not es6 fashion since babel is not used