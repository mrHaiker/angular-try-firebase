let express    = require('express');        // call express
let bodyParser = require('body-parser');
let axios      = require('axios');
// let keys       = require('./keys.json');

let app        = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

let port = process.env.PORT || 3000;        // set our port
let PUBLIC_API = 'https://poloniex.com/public';
let PRIVATE_API = 'https://poloniex.com/tradingApi';


// ROUTES FOR OUR API
// =============================================================================
// let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//   res.json({ message: 'hooray! welcome to our api! 2' });
// });


// router.get('/returnBalance', function (req, res) {
//   axios.get(PUBLIC_API + '?command=returnTicker')
//     .then(function (val) {
//       const data = val.data;
//       res.json(data);
//     })
//     .catch(function (err) {
//       const data = err.response.data;
//       res.send(data);
//     })
// });
//
// // more routes for our API will happen here
//
// // REGISTER OUR ROUTES -------------------------------
// // all of our routes will be prefixed with /api
// app.use('/api', router);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// START THE SERVER
// =============================================================================
app.listen(port);
