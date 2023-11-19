const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const salt = 10;

//auto generated idUser

class registerController {
    generateIdUser() {
        const idUser = 1;
        return idUser;
    }
    registerExecute(req, res) {
        const sql = `INSERT INTO user (idUser, fullname, email, password) VALUES (?)`;
        bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
            if (err) return res.json({ Error: "Error for hashing password" });
            const values = [
                // generateUniqueId(),
                idUser,
                req.body.fullName,
                req.body.email,
                hash
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