const sql = require('mssql');

const config = {
    user: 'sa', // update me
    password: 'Shinizeam310', // update me
    server: 'LAPTOP-ESFJ9H96', // update me
    database: 'QLSpa', // update me
    options: {
        trustServerCertificate: true,
        encrypt: true // If you are on Microsoft Azure, you need encryption
    }
};

async function connect() {
    // sql.connect(config).then(() => {
    //     console.log('SQL Server Connected');
    // }).catch(err => {
    //     console.error('Error connecting: ' + err.message);
    // });
    sql.connect(config).then(pool => {
        return pool.request().query('SELECT * FROM SIGNUP') // update 'your_table' with your actual table name
    }).then(result => {
        console.log(result);
    }).catch(err => {
        console.error('Error executing query: ' + err.message);
    });

};
module.exports = {
    connect,
};