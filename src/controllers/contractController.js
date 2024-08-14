const contractModel = require("../models/contractModel");

const createContract = async (req, res) => {
  try {
    const contract = await contractModel.addContract(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

const getAllContracts = async (req, res) => {
  try {
    const contracts = await contractModel.getAllContracts();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

const getContractById = async (req, res) => {
  try {
    const contract = await contractModel.getContractById(req.params.id);
    if (!contract) {
      return res.status(404).json({ message: "Shartnoma topilmadi" });
    }
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

const updateContract = async (req, res) => {
  try {
    const contract = await contractModel.updateContract(
      req.params.id,
      req.body
    );
    if (!contract) {
      return res.status(404).json({ message: "Shartnoma topilmadi" });
    }
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

const deleteContract = async (req, res) => {
  try {
    await contractModel.deleteContract(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

module.exports = {
  createContract,
  getAllContracts,
  getContractById,
  updateContract,
  deleteContract,
};
