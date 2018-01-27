var express = require('express');
var app = express();
var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});

connection.onopen = function (session) {
  function marketEvent (args,kwargs) {
    console.log(args);
  }
  function tickerEvent (args,kwargs) {
    console.log(args);
  }
  function trollboxEvent (args,kwargs) {
    console.log(args);
  }
  session.subscribe('BTC_XMR', marketEvent);
  session.subscribe('ticker', tickerEvent);
  session.subscribe('trollbox', trollboxEvent);
};

connection.onclose = function () {
  console.log("Websocket connection closed");
};


app.get('/', function (req, res) {
  connection.open();

  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
