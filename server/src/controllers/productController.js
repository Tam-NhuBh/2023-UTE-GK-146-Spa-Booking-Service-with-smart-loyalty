const { connection } = require('../config/db/index');

const getAllProducts = (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = {
  getAllProducts,
};