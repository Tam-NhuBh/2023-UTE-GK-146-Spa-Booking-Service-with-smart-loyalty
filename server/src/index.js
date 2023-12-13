// index.js
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const { connection } = require('./config/db');

connection.connect((err) => {
  if (err) {
    console.log("Database Connection Failed !!!", err);
  } else {
    console.log("Connected to Database");
  }
});

const app = express();
const port = process.env.port || 8000;

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/api/products', productController.getAllProducts);
app.get('/api/products/:id', productController.getProductById); // New endpoint for getting product by ID
app.get('/api/categories', productController.getAllCategories);
app.get('/api/products-by-category', productController.getProductsByCategory);

app.listen(port, () => {
  console.log(`Listening to port: http://localhost:${port}`);
});