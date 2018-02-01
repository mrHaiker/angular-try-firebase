let express    = require('express');        // call express
let bodyParser = require('body-parser');
let Poloniex   = require('./poloniex.js');
let keys       = require('./keys.json');
let app        = express();                 // define our app using express
let expressWs  = require('express-ws')(app);


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;        // set our port
let PUBLIC_API = 'https://poloniex.com/public';
let PRIVATE_API = 'https://poloniex.com/tradingApi';

let poloniex = new Poloniex();

let counter = 0;
let ticketRequest;

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api! 2' });
});


router.get('/returnBalance', function (req, res) {
  res.send('it\'s work');
});

router.ws('/tickets', function(ws, req) {
  setInterval(
    () => {
      if (ws.readyState === 1) {
        ws.send(new Date().getTime())
      }
    }, 1000
  )
});



// // REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('start on', port);

getTickets();

setInterval(
  () => getTickets(), 1000
);


function getTickets() {
  poloniex.getTicker((err, data) => {
    if (err){
      console.log('ERROR', err);
      return;
    }

    ticketRequest = data;
  });
}
