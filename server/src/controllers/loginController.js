const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class loginController {
    loginExecute(req, res, next) {
        const sql = `SELECT * FROM user WHERE email = ?`;
        connection.query(sql, [req.body.email], (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Login error in server" });
            }
            if (data.length > 0) {
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                    if (err) return res.json({ Error: "Password compare error" });
                    if (response) {
                        const name = data[0].fullname;
                        console.log(name);
                        const tokenExpiration = 1 * 24 * 60 * 60;
                        const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: tokenExpiration });
                        res.cookie('token', token, { maxAge: tokenExpiration });
                        return res.json({ Status: "Success" });
                    } else {
                        return res.json({ Error: "Password not matched" });
                    }
                });
            }
            else {
                return res.json({ Error: "No email existed" });
            }
        })
    }
}

module.exports = new loginController;