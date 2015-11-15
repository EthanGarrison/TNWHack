var express = require('express');
var https = require('https');
var querystring = require('querystring');
var router = express.Router();
var todoist = require('../services/todoist');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/getItems', function(req, res) {
	res.json({"data": todoist.getItems()})
});

module.exports = router;
