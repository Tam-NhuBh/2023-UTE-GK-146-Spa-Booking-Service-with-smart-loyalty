// productController.js
const { connection } = require('../config/db/index');

const getAllProducts = (req, res) => {
  connection.query('SELECT * FROM products', (error, results) => {
    if (error) {
      res.status(500).json({ error: error.message });
    } else {
      const updatedResults = results.map((result) => ({
        ...result,
        category: result.brand,
      }));
      res.status(200).json(updatedResults);
    }
  });
};

const getProductsByCategory = (req, res) => {
  const { category } = req.query;
  connection.query(
    'SELECT * FROM products WHERE brand = ?',
    [category],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(200).json(results);
      }
    }
  );
};

const getAllCategories = (req, res) => {
  connection.query(
    'SELECT DISTINCT brand FROM products',
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        const categories = results.map((result) => result.brand);
        res.status(200).json(categories);
      }
    }
  );
};

module.exports = {
  getAllProducts,
  getProductsByCategory,
  getAllCategories,
};