const express = require("express");
const contractController = require("../controllers/contractController");
const router = express.Router();

router.post("/contracts", contractController.createContract);
router.get("/contracts", contractController.getAllContracts);
router.get("/contracts/:id", contractController.getContractById);
router.put("/contracts/:id", contractController.updateContract);
router.delete("/contracts/:id", contractController.deleteContract);

module.exports = router;
