const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');


const { connection } = require('./config/db');

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
const route = require('./routes/index');
const port = process.env.port || 8000;

// Register the product controller
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
    credentials: true,
}));

app.use(cookieParser());


// Connect to the database
connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});
app.use(express.json())
route(app);


app.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`)
});
