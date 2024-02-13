const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const functions = require("firebase-functions")
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use(express.json());

app.use("/api", require("./stripe"));

app.listen(4000, () => {
    console.log("Started server on 4000");   
});

exports.api = functions.https.onRequest(app)