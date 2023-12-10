const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = 10;

class registerController {
    checkEmail(req, res) {
        console.log("Email: ", req.body.email);
        const userSql = `SELECT COUNT(*) AS count FROM user WHERE email = ?`;
        const employeeSql = `SELECT COUNT(*) AS count FROM employee WHERE email = ?`;

        // const sql = `SELECT COUNT(*) AS count FROM user WHERE email = ? `;
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
        console.log(req.body)
        return res.json({ Status: "Success" });
        // const idUser = uuidv4().substring(0, 9) + 'U';
        // const sql = `INSERT INTO user (idUser, fullname, email, password, birthday, phone, city, address, gender, idRole) VALUES (?)`;
        // bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        //     if (err) return res.json({ Error: "Error for hashing password" });
        //     const values = [
        //         idUser,
        //         req.body.fullName,
        //         req.body.email,
        //         hash,
        //         req.body.birthDate,
        //         req.body.phone,
        //         req.body.city,
        //         req.body.address,
        //         req.body.gender,
        //         req.body.customerRole
        //     ]
        //     connection.query(sql, [values], (err, result) => {
        //         console.log("Full Name: ", req.body.fullName);
        //         console.log("Email: ", req.body.email);
        //         console.log('Password: ', req.body.password);
        //         console.log("Hashed Password: ", hash);
        //         console.log("Birth date: ", req.body.birthDate);
        //         console.log("Phone: ", req.body.phone);
        //         console.log("City: ", req.body.city);
        //         console.log("Gender: ", req.body.gender);

        //         if (err) {
        //             console.log(err);
        //             return res.json({ Error: "Inserting data error in server" });
        //         }
        //         else return res.json({ Status: "Success" });
        //     })
        //})
    }
    
}

module.exports = new registerController;