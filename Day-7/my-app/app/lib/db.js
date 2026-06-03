import {Pool} from "pg";

const pool = new Pool({
  user: "sahilmiya",
  host: "localhost",
  database: "online_food",
  password: "",
  port: 5432
});

export default pool;