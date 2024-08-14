const productModel = require("../models/productModel");

// Yangi mahsulot qo'shish
const createProduct = async (req, res) => {
  try {
    const product = await productModel.addProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Barcha mahsulotlarni olish
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mahsulotni ID bo'yicha olish
const getProductById = async (req, res) => {
  try {
    const product = await productModel.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Mahsulot topilmadi" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mahsulotni yangilash
const updateProduct = async (req, res) => {
  try {
    const product = await productModel.updateProduct(req.params.id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Mahsulot topilmadi" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Mahsulotni o'chirish
const deleteProduct = async (req, res) => {
  try {
    await productModel.deleteProduct(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
