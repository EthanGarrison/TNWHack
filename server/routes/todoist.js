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
	// var postData = querystring.stringify({
	// 	'token' : 'e3ce717c188dec1e93be254aac9709859438a609',
	// 	'seq_no' : 0,
	// 	'resource_types' : '["items"]'
	// });

	// var options = {
	// 	hostname: 'todoist.com',
	// 	path: '/API/v6/sync',
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/x-www-form-urlencoded',
	// 		'Content-Length': postData.length
	// 	}
	// };

	// var request = https.request(options, function(response) {
	// 	var output = '';
	// 	response.setEncoding('utf8');
	// 	response.on('data', function (chunk) {
	// 		console.log('BODY: ' + chunk);
	// 		output += chunk;
	// 	});
	// 	response.on('end', function() {
	// 		console.log('No more data in response.')
	// 		res.send(output);
	// 	});
	// });

	// request.on('error', function(e) {
	//   console.log('problem with request: ' + e.message);
	// });

	// // write data to request body
	// request.write(postData);
	// request.end();
	// res.json({"data": "Hello"});
});

module.exports = router;
