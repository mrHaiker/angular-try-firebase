let express    = require('express');
let bodyParser = require('body-parser');
let Poloniex   = require('./poloniex');
let keys       = require('./keys.json');
let app        = express();
let expressWs  = require('express-ws')(app);


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let port = process.env.PORT || 3000;        // set our port

let poloniex = new Poloniex();
//
let ticketRequest;

// ROUTES FOR OUR API
// =============================================================================
let router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


router.get('/returnBalance', function (req, res) {
  res.send('it\'s work');
});

/*******************************************************/
/*                     Get Balance                     */
/*******************************************************/
router.post('/getBalance', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnBalances((err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*                Get Complete Balance                 */
/*******************************************************/
router.post('/getCompleteBalances', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnCompleteBalances((err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});

/*******************************************************/
/*                   Get Open Orders                   */
/*******************************************************/
router.post('/getOpenOrders', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnOpenOrders('all', (err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*            Get Available Account Balances           */
/*******************************************************/
router.post('/getAvailableAccountBalances', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnAvailableAccountBalances((err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*               Return Tradable Balances              */
/*******************************************************/
router.post('/getTradableBalances', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnTradableBalances((err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*              Get Margin Account Summary             */
/*******************************************************/
router.post('/getMarginAccountSummary', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.returnMarginAccountSummary((err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*                      Margin Buy                     */
/*******************************************************/
router.post('/marginBuy', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.marginBuy(
    params.currencyA, params.currencyB, params.rate, params.amout, params.lendingRate,
    (err, data) => {
      if (err){
        res.send(err);
      }

      res.send(data);
    });
});


/*******************************************************/
/*                      Margin Sell                    */
/*******************************************************/
router.post('/marginSell', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.marginSell(
    params.currencyA, params.currencyB, params.rate, params.amount, params.lendingRate,
    (err, data) => {
      if (err){
        res.send(err);
      }

      res.send(data);
    });
});


/*******************************************************/
/*                  Get Margin Position                */
/*******************************************************/
router.post('/getMarginPosition', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.getMarginPosition(params.currencyA, params.currencyB, (err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});


/*******************************************************/
/*                 Close Margin Position               */
/*******************************************************/
router.post('/closeMarginPosition', function (req, res) {
  let params = req.body;

  let poloniex = new Poloniex(params.key, params.secret);
  poloniex.closeMarginPosition(params.currencyA, params.currencyB, (err, data) => {
    if (err){
      res.send(err);
    }

    res.send(data);
  });
});










router.ws('/tickets', function(ws, req) {
  setInterval(
    () => {
      if (ws.readyState === 1) {
        ws.send(JSON.stringify({res: ticketRequest}))
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
app.listen(port, () => {
  console.log('start on', port);
});


setInterval(() => getTickets(), 750);


function getTickets() {
  poloniex.getTicker((err, data) => {
    if (err){
      return ticketRequest = err;
    }

    ticketRequest = data;
  });
}
