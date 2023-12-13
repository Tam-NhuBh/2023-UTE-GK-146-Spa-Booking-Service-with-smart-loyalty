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

const getProductById = (req, res) => {
  const { id } = req.params;
  connection.query(
    'SELECT * FROM products WHERE idProduct = ?',
    [id],
    (error, results) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else if (results.length === 0) {
        res.status(404).json({ error: 'Product not found' });
      } else {
        const product = results[0];
        const updatedProduct = {
          ...product,
          category: product.brand,
        };
        res.status(200).json(updatedProduct);
      }
    }
  );
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
  getProductById,
  getProductsByCategory,
  getAllCategories,
};