const express = require("express");
const searchController = require("../controllers/searchController");
const router = express.Router();

router.get("/overdue-customers", searchController.findOverdueCustomers);

module.exports = router;
