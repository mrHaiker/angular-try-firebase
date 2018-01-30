var express    = require('express');        // call express
var bodyParser = require('body-parser');
var axios      = require('axios');
// let keys       = require('./keys.json');

var app        = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port
var PUBLIC_API = 'https://poloniex.com/public';
var PRIVATE_API = 'https://poloniex.com/tradingApi';


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api! 2' });
});


router.get('/returnBalance', function (req, res) {
  axios.get(PUBLIC_API + '?command=returnTicker')
    .then(function (val) {
      const data = val.data;
      res.json(data);
    })
    .catch(function (err) {
      const data = err.response.data;
      res.send(data);
    })
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);