const express = require("express");
const handlebars = require('express-handlebars');
const burgersController = require('./controllers/burgers_controller')
const open = require('open');

const PORT = process.env.PORT || 8000;

var app = express();
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));