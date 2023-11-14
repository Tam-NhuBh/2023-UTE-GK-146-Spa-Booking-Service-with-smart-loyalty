const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'Shinizeam310',
    server: 'LAPTOP-ESFJ9H96',
    database: 'QLSpa',
    options: {
        trustServerCertificate: true,
        encrypt: true // If you are on Microsoft Azure, you need encryption
    }
};

const appPool = new sql.ConnectionPool(config);

async function connect() {
    console.log('SQL connected');
    // sql.connect(config).then(pool => {
    // return pool.request().query('SELECT * FROM SIGNUP') // update 'your_table' with your actual table name
    // }).then(result => {
    // console.log(result);
    // }).catch (err => {
    //     console.error('Error executing query: ' + err.message);
    // });

};

module.exports = {
    connect,
    config,
    appPool
};