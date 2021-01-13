const express = require("express");
const handlebars = require('express-handlebars');
const burgersController = require('./controllers/burgers_controller')


const PORT = process.env.PORT || 8000;

var app = express();
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(burgersController)

//app.listen(PORT, () => console.log('server listening on port:', PORT))

app.listen(PORT, () => {

    console.log("Server listening on port " + PORT);
});