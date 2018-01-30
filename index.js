var express    = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello world!!!!c1111')
});

app.listen(port);