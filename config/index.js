
const express = require('express') //Import express
const config = express() //Inicialize express
const cors = require("cors");


// Config To have access to `body` property in the request
config.use(express.json());
config.use(express.urlencoded({ extended: true }));
config.use(cors());

// To have access to `body` property in the request

module.exports = config;
