const sql = require('mssql');
class loginController {
    loginExecute(req, res, next) {
        res.send("Login");
        console.log("Login");
        req.app.locals.db.query('INSERT INTO QLSpa.dbo.SIGNUP(fullname, email, password) VALUES(?, ?, ?)',
            [fullname, username, password], (err, result) => {
                if (err) {
                    console.error(err)
                    res.status(500).send('SERVER ERROR')
                    return;
                }
                res.status(200).json({ message: 'success' });
            })
    }
}

module.exports = new loginController;