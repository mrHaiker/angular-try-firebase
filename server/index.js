let express    = require('express');        // call express
let bodyParser = require('body-parser');
let axios      = require('axios');
// let keys       = require('./keys.json');

let app        = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;        // set our port
let PUBLIC_API = 'https://poloniex.com/public';
let PRIVATE_API = 'https://poloniex.com/tradingApi';



// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// START THE SERVER
// =============================================================================
app.listen(port);
