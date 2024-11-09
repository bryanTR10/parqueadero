const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const {check, validationResult} =
require("express-validator");

const app = express();

const port = ProcessingInstruction.env.PORT || 3000;

// configuracion de la base de datos, rutas, etc

require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,   
 {
  host: process.env.DB_HOST,
  dialect:   
 'mysql'
});

app,listen(port, () => {
    console.log("Server listening on port ${port}");
})