var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET readings from sensor. */
router.get('/readings', function(req, res) {
  	res.json(res.body);
});

router.post('/readings', function(req, res) {
	console.log(req.body);
	res.json(req.body);
});

module.exports = router;