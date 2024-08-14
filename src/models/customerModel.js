const pool = require("../db/db");

// Yangi mijoz qo'shish
const addCustomer = async (customer) => {
  const { first_name, last_name, address, phone } = customer;
  const result = await pool.query(
    "INSERT INTO Customers (first_name, last_name, address, phone) VALUES ($1, $2, $3, $4) RETURNING *",
    [first_name, last_name, address, phone]
  );
  return result.rows[0];
};

// Barcha mijozlarni olish
const getAllCustomers = async () => {
  const result = await pool.query("SELECT * FROM Customers");
  return result.rows;
};

// Mijozni ID bo'yicha olish
const getCustomerById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM Customers WHERE customer_id = $1",
    [id]
  );
  return result.rows[0];
};

// Mijozni yangilash
const updateCustomer = async (id, customer) => {
  const { address, phone } = customer;
  const result = await pool.query(
    "UPDATE Customers SET address = $1, phone = $2 WHERE customer_id = $3 RETURNING *",
    [address, phone, id]
  );
  return result.rows[0];
};

// Mijozni o'chirish
const deleteCustomer = async (id) => {
  await pool.query("DELETE FROM Customers WHERE customer_id = $1", [id]);
};

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
