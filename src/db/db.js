const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "online_shoping",
  password: "Abdulhodiy010",
  port: 5432,
});

module.exports = pool;
