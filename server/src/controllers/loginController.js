const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class loginController {
    loginExecute(req, res, next) {
        // const sql = `SELECT * FROM user WHERE email = ?`;
        const sql = (
            "(SELECT idUser as id, fullname, email, password, idRole as role FROM user WHERE email = ?) " +
            "UNION " +
            "(SELECT idEmployee as id, fullname, email, password, NULL as role FROM employee WHERE email = ?)"
        );
        connection.query(sql, [req.body.email, req.body.email], (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Login error in server" });
            }
            if (data.length > 0) {
                bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                    if (err) return res.json({ Error: "Password compare error" });
                    if (response) {
                        const name = data[0].fullname;
                        const idRole = data[0].role;
                        const idUser = data[0].id;
                        console.log(name);
                        const token = jwt.sign({ name, idRole, idUser }, "jwt-secret-key", { expiresIn: '1d' });
                        res.cookie('token', token, {
                            httpOnly: true,
                            secure: false,
                            path: '/',
                            sameSite: "strict"
                        });
                        return res.json({
                            Status: "Success",
                            name: data[0].fullname, role: data[0].role, id: data[0].id
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