const express = require('express');
var cors = require("cors");
const route = require('./routes/index');
const db = require('./config/db');

const app = express();
const port = process.env.port || 8000;

app.use(cors({
    origin: 'http://localhost:5173/'
}));
app.use(express.json());

// Connect to the database
db.connect();
db.getQuery('SELECT * FROM SIGNUP');

route(app);


app.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`)
});
