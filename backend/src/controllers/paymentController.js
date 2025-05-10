const Payment = require('../models/paymentModel');

const addPayment = async (req, res) => {
    try {
        const paymentData = req.body;
        const newPayment = await Payment.create(paymentData);
        res.status(201).send('Pago registrado exitosamente');
    } catch (error) {
        res.status(500).send('Error al registrar el pago: ' + error.message);
    }
};

module.exports = { addPayment };