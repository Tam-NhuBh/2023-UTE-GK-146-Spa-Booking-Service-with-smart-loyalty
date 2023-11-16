const db = require('../config/db');

class registerController {
    registerExecute(req, res) {
        const fullName = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        db.connection.query(
            "INSERT INTO signup (fullname, email, password) VALUES (?, ?, ?)",
            [fullName, email, password],
            (err, result) => {
                console.log('Query is not executed:', err);
                res.json(result);
                console.log(result);
            }
        )

    }
}

module.exports = new registerController;