const express = require("express");


// Middleware configuration
module.exports = (app) => {

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};