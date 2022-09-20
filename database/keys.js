import { Pool } from "pg";
const pool = new Pool({
  host: "localhost",
  post: "5432",
  user: "postgres",
  password: "Danna1120",
  database: "ado_jose",
});
module.exports = pool;
