var https = require('https');
var querystring = require('querystring');
var q = require('q');

var todoist = {};

var options = {
	hostname: 'todoist.com',
	path: '/API/v6/sync',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
};

var token = 'e3ce717c188dec1e93be254aac9709859438a609'

function makeRequest(data) {
	var output = q.defer();
	var req = https.request(options, function(response) {

		var result = '';

		response.setEncoding('utf8');
		response.on('data', function (chunk) {
			console.log(chunk);
			result += chunk;
		});
		response.on('end', function() {
			output.resolve(result);
		});
	});

	req.write(data);
	req.end();

	return output;
}

todoist.getItems = function() {
	var postData = querystring.stringify({
		'token' : token,
		'seq_no' : 0,
		'resource_types' : '["items"]'
	});

	return makeRequest(postData).promise;
}

// Pass a string to this please
todoist.createItem = function(data) {
	var commands = [
		{
			"type": "item_add",
			"args": {
				"content": data
			},
			"uuid": Math.random()+"",
			"temp_id": Math.random()+""
		}
	]

	var postData = querystring.stringify({
		'token': token,
		'commands': JSON.stringify(commands)
	});

	return makeRequest(postData).promise;
}

module.exports = todoist;