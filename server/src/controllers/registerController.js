const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = 10;

class registerController {
    registerExecute(req, res) {
        req.body.customerRole = 3;
        const idUser = uuidv4().substring(0, 9) + 'U';
        const sql = `INSERT INTO user (idUser, fullname, email, password, idRole) VALUES (?)`;
        bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
            if (err) return res.json({ Error: "Error for hashing password" });
            const values = [
                idUser,
                req.body.fullName,
                req.body.email,
                hash,
                req.body.customerRole
            ]
            connection.query(sql, [values], (err, result) => {
                console.log("Full Name: ", req.body.fullName);
                console.log("Email: ", req.body.email);
                console.log('Password: ', req.body.password);
                console.log("Hashed Password: ", hash);
                if (err) {
                    console.log(err);
                    return res.json({ Error: "Inserting data error in server" });
                }
                else return res.json({ Status: "Success" });
            })
        })
    }
}

module.exports = new registerController;