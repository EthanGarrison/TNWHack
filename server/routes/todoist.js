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
	todoist.getItems().then(function(data) {
		res.send(data);
		console.log("Resolved the promise");
	},
	function(error) {},
	function(notify) {
		console.log(notify);
	}).done();
});

router.post('/createTask', function(req, res) {
	console.log(req.body['content']);
	todoist.createItem(req.body['content']);
	res.send(req.body['content']);
});

module.exports = router;
