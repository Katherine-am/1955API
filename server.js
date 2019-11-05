const express = require("express");
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost/API', {useNewUrlParser: true});


app.use(express.json());
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

require('./server/config/routes')(app);
app.listen(8000, () => {
    console.log("listening on port 8000");
})