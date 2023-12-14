const { connection } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

class bookingController {
    //[POST] List services
    listServices(req, res, next) {
        const sql = `SELECT idService, nameService, price FROM service`;
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Loading service error" });
            } else {
                return res.json({ Status: "Success", data });
            }
        })
    }
    //[POST] List employees
    listEmployee(req, res, next) {
        const sql = `SELECT idEmployee, fullname FROM employee`;
        connection.query(sql, (err, data) => {
            if (err) {
                console.log(err);
                return res.json({ Error: "Loading employee error" });
            } else {
                return res.json({ Status: "Success", data });
            }
        })
    }
    //[POST] Submit Booking
    submitBooking(req, res, next) {
        // const idServiceBooking = uuidv4().substring(0, 9) + 'B';
        const sql = `INSERT INTO servicebooking (idServiceBooking, idUser, idEmployee, idService, startDate) VALUES (?)`;
        const values = [
            // idServiceBooking,
            req.body.idServiceBooking,
            req.body.idUser,
            req.body.idEmployee,
            req.body.idService,
            req.body.startDate
        ]
        connection.query(sql, [values], (err, result) => {
            console.log("id Service Booking: ", req.body.idServiceBooking);
            console.log("id User: ", req.body.idUser);
            console.log('id Employee: ', req.body.idEmployee);
            console.log("id Service: ", req.body.idService);
            if (err) {
                console.log(err);
                return res.json({ Error: "Inserting booking service error in server" });
            }
            else return res.json({ Status: "Success", bookingId: req.body.bookingId });
        })
    }
}

module.exports = new bookingController
