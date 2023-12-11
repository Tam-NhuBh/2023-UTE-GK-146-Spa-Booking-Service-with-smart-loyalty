const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController'); // Import your productController module


const route = require('./routes/index');
const { connection } = require('./config/db');

const app = express();
const port = process.env.port || 8000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Register the product controller
app.get('/api/products', productController.getAllProducts);


app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
    credentials: true,
}));
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false,
//         httpOnly: true,
//         maxAge: null
//     }
// }))

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});

route(app);


app.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`)
});
