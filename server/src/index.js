const express = require('express');
var cors = require("cors");
const route = require('./routes/index');
const db = require('./config/db');

const app = express();
const port = process.env.port || 8000;

// Connect to the database
db.connect();

route(app);

app.use(cors({
    origin: 'http://localhost:3000',
}))

app.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`)
});
