// https://github.com/balta-io/1972/tree/master/src

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Schemas
require('./models/clientModel');
require('./models/productModel');
require('./models/orderModel');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');

let dbUser = process.env.DB_USER;
let dbPassword = process.env.DB_PASS;

console.log(`Database user info: ${dbUser} : ${dbPassword}`);

// Connecting to database (mongoDB)
try {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@web-usp.7zrod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
}
catch (err) {
    console.log("[!] Error when connectiong to MongoBD! Aborting...");
    return;
}

var corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true
}

app.use(cors(corsOptions)); // Cross-Origin Resource Sharing
app.use(express.json()); // used to parse JSON bodies
// app.use(express.urlencoded()); // parse URL-encoded bodies -> deprecated

app.use(routes);
app.use(express.static(path.join(__dirname, 'build'))); // static route if no route was found in 'routes.js' -> files from React

const httpServer = app.listen(port, () => {
    console.log(`== Server listening on port ${port} ==`);
    
    //Attempt to avoid leaving zombie processes using port
    process.on('beforeExit', () => httpServer.close());
});