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
                req.session.fullName = data[0].fullname;
                console.log(req.session.fullName);
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                    if (err) return res.json({ Error: "Password compare error" });
                    if (response) {
                        const name = data[0].name;
                        const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token);
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