const jwt = require('jsonwebtoken');
const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = 10;

class homeController {
    loginExecute(req, res, next) {
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
                            httpOnly: false,
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
    checkEmail(req, res) {
        console.log("Email: ", req.body.email);
        const userSql = `SELECT COUNT(*) AS count FROM user WHERE email = ?`;
        const employeeSql = `SELECT COUNT(*) AS count FROM employee WHERE email = ?`;

        const sql = `(${userSql}) UNION (${employeeSql})`;

        connection.query(sql, [req.body.email, req.body.email], (err, data) => {
            if (err) {
                console.log(err);
                return res.json(({ Error: "Error checking email existence" }))
            }
            if (data.some(row => row.count > 0)) {
                console.log("existed in user: ", data[0].count);
                console.log("existed in employee: ", data[1].count);
                res.json({ emailError: "Email already existed" });
            } else return res.json({ Status: "Success" });
        })
    };
    registerExecute(req, res) {
        req.body.customerRole = 3;
        const idUser = uuidv4().substring(0, 9) + 'U';
        const sql = `INSERT INTO user (idUser, fullname, email, password, birthday, phone, city, address, gender, idRole) VALUES (?)`;
        bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
            if (err) return res.json({ Error: "Error for hashing password" });
            const values = [
                idUser,
                req.body.fullName,
                req.body.email,
                hash,
                req.body.birthDate,
                req.body.phone,
                req.body.city,
                req.body.address,
                req.body.gender,
                req.body.customerRole
            ]
            connection.query(sql, [values], (err, result) => {
                console.log("Full Name: ", req.body.fullName);
                console.log("Email: ", req.body.email);
                console.log('Password: ', req.body.password);
                console.log("Hashed Password: ", hash);
                console.log("Birth date: ", req.body.birthDate);
                console.log("Phone: ", req.body.phone);
                console.log("City: ", req.body.city);
                console.log("Gender: ", req.body.gender);

                if (err) {
                    console.log(err);
                    return res.json({ Error: "Inserting data error in server" });
                }
                else return res.json({ Status: "Success" });
            })
        })
    }
    logoutExecute(req, res, next) {
        try {
            res.clearCookie('token');
            console.log("Cookie is cleared");

            return res.json({ Status: "Success" });
        } catch (error) {
            console.error("Error during logout:", error);
            return res.json({ Error: "Error Logout" });
        }
    }
    showVerifyUser(req, res) {
        return res.json({ Status: "Success", name: req.name, idRole: req.idRole, idUser: req.idUser });
    }
}
module.exports = new homeController;