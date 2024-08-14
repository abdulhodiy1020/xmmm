const pool = require('../db/db');

const addContract = async (contract) => {
    const { customer_id, product_id, total_amount, initial_payment, months, interest_rate } = contract;
    const result = await pool.query(
        'INSERT INTO Contracts (customer_id, product_id, total_amount, initial_payment, months, interest_rate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [customer_id, product_id, total_amount, initial_payment, months, interest_rate]
    );
    return result.rows[0];
};

const getAllContracts = async () => {
    const result = await pool.query('SELECT * FROM Contracts');
    return result.rows;
};

const getContractById = async (id) => {
    const result = await pool.query('SELECT * FROM Contracts WHERE contract_id = $1', [id]);
    return result.rows[0];
};

const updateContract = async (id, contract) => {
    const { total_amount, initial_payment, months, interest_rate } = contract;
    const result = await pool.query(
        'UPDATE Contracts SET total_amount = $1, initial_payment = $2, months = $3, interest_rate = $4 WHERE contract_id = $5 RETURNING *',
        [total_amount, initial_payment, months, interest_rate, id]
    );
    return result.rows[0];
};

const deleteContract = async (id) => {
    await pool.query('DELETE FROM Contracts WHERE contract_id = $1', [id]);
};

module.exports = {
    addContract,
    getAllContracts,
    getContractById,
    updateContract,
    deleteContract,
};

