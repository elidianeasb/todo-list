//Config initial

require('dotenv').config(); //allows using the environment variables created at .env
require("./database"); //Connect to the database



const express = require('express') //Import express
const app = express() //Inicialize express


// Config To have access to `body` property in the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API routes
const taskRoutes = require('./routes/taskRoutes') //import taskRoutes
app.use('/', taskRoutes) //redirect to taskRoutes











