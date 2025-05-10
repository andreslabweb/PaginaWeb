const express = require('express');
const { addPayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/add', addPayment);

module.exports = router;

// Example payment data
const examplePaymentData = {
    "email": "test@example.com",
    "cardholder": "John Doe",
    "cardnumber": "1234567812345678",
    "expyear": 2025,
    "cvv": 123,
    "amount": 100,
    "currency": "USD"
};