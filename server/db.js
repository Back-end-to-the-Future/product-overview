const Pool = require("pg").Pool;
const { password } = require("./dbPass");

const pool = new Pool({
  user: "postgres",
  password: password,
  host: "localhost",
  port: 5432,
  database: "overview_db",
});

module.exports = pool;
