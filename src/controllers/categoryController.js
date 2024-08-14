const categoryModel = require("../models/categoryModel");

// Yangi kategoriya qo'shish
const createCategory = async (req, res) => {
  try {
    const category = await categoryModel.addCategory(req.body);
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Barcha kategoriyalarni olish
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Kategoriyani ID bo'yicha olish
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryModel.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Kategoriya topilmadi" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Kategoriyani yangilash
const updateCategory = async (req, res) => {
  try {
    const category = await categoryModel.updateCategory(
      req.params.id,
      req.body
    );
    if (!category) {
      return res.status(404).json({ message: "Kategoriya topilmadi" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

// Kategoriyani o'chirish
const deleteCategory = async (req, res) => {
  try {
    await categoryModel.deleteCategory(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
