const { connection } = require('../config/db');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const salt = 10;

class adminController {
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
    checkEmail(req, res, next) {
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
    }
    //[POST] Staff Register by admin
    registerStaff(req, res, next) {
        const idEmployee = uuidv4().substring(0, 9) + 'E';
        const sql = `INSERT INTO employee (idEmployee, fullname, email, password, birthday, phone, city, address, gender) VALUES (?)`;
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
                req.body.gender,
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
    //[DELETE] Staff deleted by admin
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
    //[GET] Get staff by ID
    showStaffByID(req, res, next) {
        const idEmployee = req.params.id;
        const sql = `SELECT * FROM employee WHERE idEmployee = ?`;
        connection.query(sql, idEmployee, (err, Result) => {
            if (err) {
                console.error("Error selecting employee:", err);
                return res.json({ Status: 'Error', message: 'Internal Server Error' });
            } else {
                return res.json({ Status: "Success", Result });
            }
        });
    }
    //[PUT] Staff edit by admin
    editStaff(req, res, next) {
        const idEmployee = req.params.id;
        console.log("Employee ID: ", idEmployee)
        const sql = `UPDATE employee SET fullname = ?, birthday = ?, phone = ?, city = ?, address = ?, gender = ? WHERE idEmployee = ?`;
        connection.query(sql, [req.body.fullName, req.body.birthDate, req.body.phone,
        req.body.city, req.body.address, req.body.gender, idEmployee], (err, result) => {
            console.log("Full Name: ", req.body.fullName);
            console.log("Birth date: ", req.body.birthDate);
            console.log("Phone: ", req.body.phone);
            console.log("City: ", req.body.city);
            console.log("Gender: ", req.body.gender);

            if (err) {
                console.log(err);
                return res.json({ Error: "Updating data error in server" });
            }
            else return res.json({ Status: "Success" });
        })
    }


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
    //[POST] Customer register by admin
    registerCustomer(req, res, next) {
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
    //[DELETE] Customer deleted by admin
    deleteCustomer(req, res, next) {
        const idUser = req.params.id;
        console.log("Customer ID: ", idUser)
        const sql = `DELETE FROM user WHERE idUser = ?`;
        connection.query(sql, idUser, (err, result) => {
            if (err) {
                console.error("Error deleting customer:", err);
                return res.json({ Status: 'Error', message: 'Internal Server Error' });
            } else {
                if (result.affectedRows > 0) {
                    return res.json({ Status: 'Success', message: 'Customer deleted successfully' });
                } else {
                    res.json({ Error: 'Customer not found' });
                }
            }
        });
    }
    //[GET] Get staff by ID
    showCustomerByID(req, res, next) {
        const idUser = req.params.id;
        const sql = `SELECT * FROM user WHERE idUser = ?`;
        connection.query(sql, idUser, (err, Result) => {
            if (err) {
                console.error("Error selecting customer:", err);
                return res.json({ Status: 'Error', message: 'Internal Server Error' });
            } else {
                return res.json({ Status: "Success", Result });
            }
        });
    }
    //[PUT] Staff edit by admin
    editCustomer(req, res, next) {
        const idUser = req.params.id;
        console.log("Customer ID: ", idUser)
        const sql = `UPDATE user SET fullname = ?, birthday = ?, phone = ?, city = ?, address = ?, gender = ? WHERE idUser = ?`;
        connection.query(sql, [req.body.fullName, req.body.birthDate, req.body.phone,
            req.body.city, req.body.address, req.body.gender, idUser], (err, result) => {
            console.log("Full Name: ", req.body.fullName);
            console.log("Birth date: ", req.body.birthDate);
            console.log("Phone: ", req.body.phone);
            console.log("City: ", req.body.city);
            console.log("Gender: ", req.body.gender);

            if (err) {
                console.log(err);
                return res.json({ Error: "Updating data error in server" });
            }
            else return res.json({ Status: "Success" });
        })
    }

}

module.exports = new adminController;