const express = require('express');
// const cors = require('cors');
require('dotenv').config()

// SCRIPT PARA INICIAR SERVIDOR: "yarn startServer": "nodemon src/server.js"

const routes = require('./routes');

// app.use(cors()); 
app.use(express.json());
app.use(routes);

const httpServer = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
    
    //Attempt to avoid nodemon's SIGTERM leaving zombie processes using port
    process.on('beforeExit', (l) => httpServer.close());
});