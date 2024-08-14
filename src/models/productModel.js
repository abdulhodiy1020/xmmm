const pool = require("../db/db");

// Yangi mahsulot qo'shish
const addProduct = async (product) => {
  const { product_name, category_id, price } = product;
  const result = await pool.query(
    "INSERT INTO Products (product_name, category_id, price) VALUES ($1, $2, $3) RETURNING *",
    [product_name, category_id, price]
  );
  return result.rows[0];
};

// Barcha mahsulotlarni olish
const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM Products");
  return result.rows;
};

// Mahsulotni ID bo'yicha olish
const getProductById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM Products WHERE product_id = $1",
    [id]
  );
  return result.rows[0];
};

// Mahsulotni yangilash
const updateProduct = async (id, product) => {
  const { product_name, category_id, price } = product;
  const result = await pool.query(
    "UPDATE Products SET product_name = $1, category_id = $2, price = $3 WHERE product_id = $4 RETURNING *",
    [product_name, category_id, price, id]
  );
  return result.rows[0];
};

// Mahsulotni o'chirish
const deleteProduct = async (id) => {
  await pool.query("DELETE FROM Products WHERE product_id = $1", [id]);
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
