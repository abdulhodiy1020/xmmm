const pool = require("../db/db");

// Yangi kategoriya qo'shish
const addCategory = async (category) => {
  const { id, name, image_url, category_id } = category;
  const result = await pool.query(
    "INSERT INTO Categories (id, name, image_url, category_id) VALUES ($1, $2, $3, $4) RETURNING *",
    [id, name, image_url, category_id]
  );
  return result.rows[0];
};

// Barcha kategoriyalarni olish
const getAllCategories = async () => {
  const result = await pool.query("SELECT * FROM Categories");
  return result.rows;
};

// Kategoriyani ID bo'yicha olish
const getCategoryById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM Categories WHERE category_id = $1",
    [id]
  );
  return result.rows[0];
};

// Kategoriyani yangilash
const updateCategory = async (params_id, category) => {
  const { id, name, image_url, category_id } = category;
  const result = await pool.query(
    "UPDATE Categories SET category_name = $1 WHERE category_id = $2 RETURNING *",
    [id, name, image_url, category_id]
  );
  return result.rows[0];
};

// Kategoriyani o'chirish
const deleteCategory = async (id) => {
  await pool.query("DELETE FROM Categories WHERE category_id = $1", [id]);
};

module.exports = {
  addCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
