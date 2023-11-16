const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'Shinizeam310',
    server: 'LAPTOP-ESFJ9H96',
    database: 'QLSpa',
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
};

async function connect() {
    try {
        console.log('SQL connected');
    } catch (err) {
        console.log('SQL not connected: ' + err);
    }
};

async function getQuery(strQuery) {
    try {
        let pool = await sql.connect(config);
        let res = await pool.request().query(strQuery);
        console.log(res);
    } catch (error) {
        console.log('Query cannot be executed: ', err);
    }
}

module.exports = {
    connect,
    getQuery
};