const express = require('express');
var cors = require("cors");
const route = require('./routes/index');
const db = require('./config/db');

const app = express();
// const port = process.env.port || 8000;

// Connect to the database
// db.connect();

route(app);

app.use(cors({
    origin: 'http://localhost:3000',
}))

db.appPool.connect().then(function (pool) {
    app.locals.db = pool;
    const server = app.listen(8000, function () {
        const port = server.address().port
        console.log('Example app listening at http://localhost:%s', port)
    })
}).catch(function (err) {
    console.error('Error creating connection pool', err)
});

// app.listen(port, () => {
//     console.log(`Listening to port: http://localhost:${port}`)
// });
