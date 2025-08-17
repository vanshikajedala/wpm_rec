var express = require('express'); 
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'loc8r' });
});

/* GET Location Info page. */
router.get('/location', function(req, res, next) {
  res.render('index', { title: 'Location info' });
});

/* GET Review page. */
router.get('/location/review', function(req, res, next) {
  res.render('index', { title: 'Review' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

module.exports = router;
