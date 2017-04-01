var express = require('express');

var app = express();

var ejs = require('ejs');

var index = require('./routes/processtransaction');

var bodyparser = require('body-parser');

var getItemPrice = require('./routes/getItemPrice');

app.set('view engine', 'ejs');

app.use(bodyparser.json());

app.use('/',index);

app.user('/getItemPrice',getItemPrice);

app.listen(3000,function() {
  console.log('Example app listening on port 3000!');
})

