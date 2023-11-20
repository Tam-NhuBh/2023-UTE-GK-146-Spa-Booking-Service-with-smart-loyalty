class LogoutController {
    logoutExecute(req, res, next) {
        res.clearCookie('token');
        res.clearCookie('connect.sid');
        return res.json({ Status: "Success" });
    }
}

module.exports = new LogoutController;