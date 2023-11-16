const sql = require('mssql');
const db = require('../config/db');

class registerController {
    async registerExecute(req, res) {
        const fullName = req.body.fullName;
        const email = req.body.email;
        const password = req.body.password;


        const insertQuery = `INSERT INTO SIGNUP(fullname, email, password) VALUES('${fullName}', '${email}', '${password}')`;
        try {
            await db.getQuery(insertQuery);
            res.status(200).json({ message: 'success' });
            console.log("Register: ", fullName, email, password);

        } catch (err) {
            console.error(err);
            res.status(500).send('SERVER ERROR');
        }
    }
}

module.exports = new registerController;