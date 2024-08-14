const express = require("express");
const customerRoutes = require("./routes/customerRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const contractRoutes = require("./routes/contractRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
const port = 3000;

// Middlewares
app.use(express.json());

// Routes
app.use(customerRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(contractRoutes);
app.use(paymentRoutes);

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server running on 3000 port...`);
});
