var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var todoist = require('../services/todoist.js');

var limit = 30;
var sensor = "lux";
var taskName = "Pay electric bill";

/* GET readings from sensor. */
router.get('/readings', function(req, res) {
  	res.json(res.body);
  	limit = 40;
});

router.post('/readings', function(req, res) {
	console.log(req.body);
	res.json(req.body);
	console.log(limit);
	if (req.body[sensor] != null && req.body[sensor] <= limit) {
		todoist.createItem(taskName);
	}
});

router.post('/userVar', function(req, res) {
	limit = req.body.limit;
	sensor = req.body.sensor;
	taskName = req.body.taskName;
	res.end();
})

module.exports = router;