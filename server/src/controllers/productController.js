const { connection } = require('../config/db');

class productController {
  getAllProducts = (req, res) => {
    connection.query('SELECT * FROM products', (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        return res.json({ Status: "Success", results });
      }
    });
  };

}

module.exports = new productController