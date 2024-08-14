const pool = require("../db/db");

// To'lov muddati o'tib ketgan mijozlarni qidirish
const findOverdueCustomers = async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT c.first_name, c.last_name, p.product_name, ct.contract_id, 
                   (ct.total_amount - SUM(pmt.amount_paid)) AS due_amount,
                   DATE_PART('day', NOW() - MAX(pmt.payment_date)) AS days_overdue
            FROM Customers c
            JOIN Contracts ct ON c.customer_id = ct.customer_id
            JOIN Products p ON ct.product_id = p.product_id
            JOIN Payments pmt ON ct.contract_id = pmt.contract_id
            WHERE (ct.total_amount - SUM(pmt.amount_paid)) > 0
            GROUP BY c.first_name, c.last_name, p.product_name, ct.contract_id
        `);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

module.exports = {
  findOverdueCustomers,
};
