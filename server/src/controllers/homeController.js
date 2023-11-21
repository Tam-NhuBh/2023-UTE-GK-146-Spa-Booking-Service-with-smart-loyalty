const jwt = require('jsonwebtoken');

class homeController {
    verifyUser(req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            return res.json({ Error: "You are not Authenticated" });
        } else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if (err) {
                    return res.json({ Error: "Token is not ok" });
                } else {
                    req.name = decoded.name;
                    next();
                }
            })
        }
    }
    show(req, res) {
        return res.json({ Status: "Success", name: req.name });
    }
}
module.exports = new homeController;