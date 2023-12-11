const db = require('../config/db/index');

// Assuming you have a route handler function where you want to insert the data

// Example route handler to insert a product
const insertProduct = (req, res) => {
  const { idProduct, nameProduct, desc, price, quantity, img } = req.body;

  const sql = `INSERT INTO products (idProduct, nameProduct, desc, price, quantity, img) VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [idProduct, nameProduct, desc, price, quantity, img];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      res.status(500).json({ error: 'Error inserting product' });
      return;
    }
    console.log('Product inserted:', result);
    res.status(200).json({ message: 'Product inserted successfully' });
  });
};

module.exports = { insertProduct };