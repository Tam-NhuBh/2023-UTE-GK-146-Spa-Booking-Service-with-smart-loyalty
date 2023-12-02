class LogoutController {
    logoutExecute(req, res, next) {
        try {
            res.clearCookie('token');
            console.log("Cookie is cleared");

            return res.json({ Status: "Success" });
        } catch (error) {
            console.error("Error during logout:", error);
            return res.json({ Error: "Error Logout" });
        }
    }
}

module.exports = new LogoutController;