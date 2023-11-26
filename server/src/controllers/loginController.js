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
                        const idRole = data[0].idRole;
                        const idUser = data[0].idUser;
                        console.log(name);
                        // const tokenExpiration = 1 * 24 * 60 * 60;
                        const token = jwt.sign({ name, idRole, idUser }, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token, {
                            httpOnly: true,
                            secure: false,
                            path: '/',
                            sameSite: "strict"
                        });
                        return res.json({
                            Status: "Success",
                            name: data[0].fullname, idRole: data[0].idRole, idUser: data[0].idUser
                        });
                    } else {
                        return res.json({ passwordError: "Password not matched" });
                    }
                });
            }
            else {
                return res.json({ emailError: "No email existed" });
            }
        })
    }

}

module.exports = new loginController;