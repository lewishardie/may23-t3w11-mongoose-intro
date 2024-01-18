// Server configuation happens in server.js

const express = require('express');

// make a server instance
const app = express();

// to help the app to process POST
app.use(express.json());

app.get("/", (request, response) => {
    response.json({
        message: "Hello world"
    });
});

const PetRouter = require('./controllers/PetController');
const { Pet } = require('.models/PetModel')
app.use('/pets', PetRouter)

module.exports = {
    app
}