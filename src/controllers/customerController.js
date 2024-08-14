const customerModel = require("../models/customerModel");

// Yangi mijoz qo'shish
const createCustomer = async (req, res) => {
  try {
    const customer = await customerModel.addCustomer(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Barcha mijozlarni olish
const getAllCustomers = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mijozni ID bo'yicha olish
const getCustomerById = async (req, res) => {
  try {
    const customer = await customerModel.getCustomerById(req.params.id);
    if (!customer) {
      return res.status(404).json({ message: "Mijoz topilmadi" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mijozni yangilash
const updateCustomer = async (req, res) => {
  try {
    const customer = await customerModel.updateCustomer(
      req.params.id,
      req.body
    );
    if (!customer) {
      return res.status(404).json({ message: "Mijoz topilmadi" });
    }
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mijozni o'chirish
const deleteCustomer = async (req, res) => {
  try {
    await customerModel.deleteCustomer(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
