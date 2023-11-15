const sql = require('mssql');
const db = require('../config/db')

class registerController {
    async registerExecute(req, res) {
        res.send("Register");
        console.log("Register");

        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;

        const insertQuery = `INSERT INTO QLSpa.dbo.SIGNUP(fullname, email, password) VALUES('${fullname}', '${email}', '${password}')`;

        try {
            await db.getQuery(insertQuery);
            res.status(200).json({ message: 'success' });
        } catch (err) {
            console.error(err);
            res.status(500).send('SERVER ERROR');
        }
    }
}

module.exports = new registerController;