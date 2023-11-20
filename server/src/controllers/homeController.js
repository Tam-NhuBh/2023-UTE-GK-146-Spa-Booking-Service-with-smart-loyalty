class homeController {
    show(req, res) {
        if (req.session.fullName) {
            return res.json({ valid: true, fullname: req.session.fullName });
        } else {
            return res.json({ valid: false });
        }
    }
}
module.exports = new homeController;