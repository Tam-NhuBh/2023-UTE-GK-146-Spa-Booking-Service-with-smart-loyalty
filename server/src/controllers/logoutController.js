class LogoutController {
    logoutExecute(req, res, next) {
        res.clearCookie('token');
        return res.json({ Status: "Success" });
    }
}

module.exports = new LogoutController;