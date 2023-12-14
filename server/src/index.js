const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { generateAccessToken, createOrder, captureOrder, handleResponse } = require("./controllers/paypal-api");
const { connection } = require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const route = require('./routes/index');
const port = process.env.port || 8000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "HEAD"],
    credentials: true,
}));

app.use(cookieParser());

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
});

app.post("/api/orders", async (req, res) => {
    try {
        const { jsonResponse, httpStatusCode } = await createOrder(req.body);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to create order:", error);
        res.status(500).json({ error: "Failed to create order." });
    }
});

app.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
        const { orderID } = req.params;
        const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
        res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
        console.error("Failed to capture order:", error);
        res.status(500).json({ error: "Failed to capture order." });
    }
});

app.use(express.json());
route(app);

app.listen(port, () => {
    console.log(`Listening to port: http://localhost:${port}`)
});
