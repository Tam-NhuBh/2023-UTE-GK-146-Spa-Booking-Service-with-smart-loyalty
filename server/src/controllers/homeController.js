class homeController {
    index(req, res) {
        res.send("connected to react");
        console.log("connected to react");
    }
}
module.exports = new homeController;