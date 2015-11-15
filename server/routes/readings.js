var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var todoist = require('../services/todoist.js');

/* GET readings from sensor. */
router.get('/readings', function(req, res) {
  	res.json(res.body);
});

router.post('/readings', function(req, res) {
	console.log(req.body);
	res.json(req.body);
	if (req.body.lux != null && req.body.lux <= 30) {
		todoist.createItem("Pay electric bill");
	}
});

module.exports = router;