const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = 10;

class adminController {
    //[GET] List customers
    listCustomer(req, res, next) {
        const sql = `SELECT idUser, fullname, email, phone, city, address FROM user WHERE idRole = 3`;
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Loading customer error" });
            } else {
                return res.json({ Status: "Success", data });
            }
        })
    }
    //[GET] List employees
    listEmployee(req, res, next) {
        const sql = `SELECT idEmployee, fullname, email, phone, city, address FROM employee`;
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Loading employee error" });
            } else {
                return res.json({ Status: "Success", data });
            }
        })
    }
    //[POST] Check Email
    staffCheckEmail(req, res, next) {
        console.log("Email: ", req.body.email);
        const sql = `SELECT COUNT(*) AS count FROM employee WHERE email = ? `;
        connection.query(sql, [req.body.email], (err, data) => {
            if (err) {
                console.log(err);
                return res.json(({ Error: "Error checking email existence" }))
            }
            if (data[0].count > 0) {
                console.log("existed: ", data[0].count);
                res.json({ emailError: "Email already existed" });
            } else return res.json({ Status: "Success" });
        })
    }
    //[POST] Staff Register by admin
    staffRegister(req, res, next) {
        const idEmployee = uuidv4().substring(0, 9) + 'E';
        const sql = `INSERT INTO employee (idEmployee, fullname, email, password, birthday, phone, city, address) VALUES (?)`;
        bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
            if (err) return res.json({ Error: "Error for hashing password" });
            const values = [
                idEmployee,
                req.body.fullName,
                req.body.email,
                hash,
                req.body.birthDate,
                req.body.phone,
                req.body.city,
                req.body.address,
            ]
            connection.query(sql, [values], (err, result) => {
                console.log("Full Name: ", req.body.fullName);
                console.log("Email: ", req.body.email);
                console.log('Password: ', req.body.password);
                console.log("Hashed Password: ", hash);
                console.log("Birth date: ", req.body.birthDate);
                console.log("Phone: ", req.body.phone);
                console.log("City: ", req.body.city);
                // console.log("Gender: ", req.body.gender);

                if (err) {
                    console.log(err);
                    return res.json({ Error: "Inserting data error in server" });
                }
                else return res.json({ Status: "Success" });
            })
        })
    }
    deleteStaff(req, res, next) {
        const idEmployee = req.params.id; // Assuming the employee ID is passed as a URL parameter
        console.log("Employee ID: ", idEmployee)
        const sql = `DELETE FROM employee WHERE idEmployee = ?`;
        connection.query(sql, idEmployee, (err, result) => {
            if (err) {
                console.error("Error deleting employee:", err);
                return res.json({ Status: 'Error', message: 'Internal Server Error' });
            } else {
                if (result.affectedRows > 0) {
                    return res.json({ Status: 'Success', message: 'Employee deleted successfully' });
                } else {
                    res.json({ Error: 'Employee not found' });
                }
            }
        });
    }
}

module.exports = new adminController;