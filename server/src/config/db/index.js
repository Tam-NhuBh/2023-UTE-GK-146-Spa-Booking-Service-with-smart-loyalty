const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shinizeam310',
    database: 'new_spadb'
});
module.exports = {
    connection
};