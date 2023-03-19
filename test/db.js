const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    password: 'kalabass229965',
    host: 'localhost',
    database: 'BlackNYellowDb',
    port: 3000 
});

module.exports = pool;