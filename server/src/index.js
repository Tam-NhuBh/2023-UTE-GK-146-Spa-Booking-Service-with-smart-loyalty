const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const route = require('./routes/index');
const { connection } = require('./config/db');

const app = express();
const port = process.env.port || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
    credentials: true,
}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

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
