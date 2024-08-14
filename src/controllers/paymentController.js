const paymentModel = require('../models/paymentModel');

const createPayment = async (req, res) => {
    try {
        const payment = await paymentModel.addPayment(req.body);
        res.status(201).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
    }
};

const getAllPayments = async (req, res) => {
    try {
        const payments = await paymentModel.getAllPayments();
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
    }
};

const getPaymentById = async (req, res) => {
    try {
        const payment = await paymentModel.getPaymentById(req.params.id);
        if (!payment) {
            return res.status(404).json({ message: 'Tolov topilmadi' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
    }
};

const updatePayment = async (req, res) => {
    try {
        const payment = await paymentModel.updatePayment(req.params.id, req.body);
        if (!payment) {
            return res.status(404).json({ message: 'Tolov topilmadi' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
    }
};

const deletePayment = async (req, res) => {
    try {
        await paymentModel.deletePayment(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Serverda xatolik yuz berdi' });
    }
};

module.exports = {
    createPayment,
    getAllPayments,
    getPaymentById,
    updatePayment,
    deletePayment,
};
