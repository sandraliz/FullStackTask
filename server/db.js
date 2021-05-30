const { Pool } = require("pg").Pool;

const pool = new Pool({    
user: "postgress",
password: "sandra",
host: "localhost",
port: 5432,
database: "customerdb"
});

module.exports = { pool };