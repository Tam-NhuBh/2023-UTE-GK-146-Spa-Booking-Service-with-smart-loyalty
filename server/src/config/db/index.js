const sql = require('mssql');

const dbConfig = {
    user: 'sa',
    password: 'Shinizeam310',
    server: 'LAPTOP-ESFJ9H96\\KYSONSERVER',
    database: 'QLSpa',
    options: {
        trustedConnection: true,
    },
};

const pool = new sql.ConnectionPool(dbConfig);

async function connect() {
    try {
        await pool.connect();
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection failed');
    }
};

module.exports = {
    connect,
    sql,
    pool,
};