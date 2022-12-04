
const pgp = require('pg-promise');
const connection = pgp(process.env.DATABASE_URL);
//const connection = process.env.DATABASE_URL;
module.exports = connection;