const pool = require("../db/db");

const addPayment = async (payment) => {
  const { contract_id, payment_amount, payment_date } = payment;
  const result = await pool.query(
    "INSERT INTO Payments (contract_id, payment_amount, payment_date) VALUES ($1, $2, $3) RETURNING *",
    [contract_id, payment_amount, payment_date]
  );
  return result.rows[0];
};

const getAllPayments = async () => {
  const result = await pool.query("SELECT * FROM Payments");
  return result.rows;
};

const getPaymentById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM Payments WHERE payment_id = $1",
    [id]
  );
  return result.rows[0];
};

const updatePayment = async (id, payment) => {
  const { payment_amount, payment_date } = payment;
  const result = await pool.query(
    "UPDATE Payments SET payment_amount = $1, payment_date = $2 WHERE payment_id = $3 RETURNING *",
    [payment_amount, payment_date, id]
  );
  return result.rows[0];
};

const deletePayment = async (id) => {
  await pool.query("DELETE FROM Payments WHERE payment_id = $1", [id]);
};

module.exports = {
  addPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};
