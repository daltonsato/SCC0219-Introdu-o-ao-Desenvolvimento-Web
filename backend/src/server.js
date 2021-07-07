// https://github.com/balta-io/1972/tree/master/src

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes');

app.use(cors()); 
app.use(express.json()); // used to parse JSON bodies
app.use(express.urlencoded()); // parse URL-encoded bodies

app.use(routes);

const httpServer = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    
    //Attempt to avoid leaving zombie processes using port
    process.on('beforeExit', () => httpServer.close());
});