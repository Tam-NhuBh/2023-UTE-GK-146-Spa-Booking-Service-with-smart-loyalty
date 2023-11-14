const sql = require('mssql');
class registerController {
    registerExecute(req, res) {
        res.send("Register");
        console.log("Register");
        const fullname = req.body.fullname;
        const email = req.body.email;
        const password = req.body.password;
        req.app.locals.db.query('INSERT INTO QLSpa.dbo.SIGNUP(fullname, email, password) VALUES(?, ?, ?)',
            [fullname, email, password], (err, result) => {
                if (err) {
                    console.error(err)
                    res.status(500).send('SERVER ERROR')
                    return;
                }
                res.status(200).json({ message: 'success' });
            })
    }
}

module.exports = new registerController;