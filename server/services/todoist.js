var https = require('https');
var querystring = require('querystring');

var todoist = {};

var options = {
		hostname: 'todoist.com',
		path: '/API/v6/sync',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'		}
	};

todoist.getItems = function() {
	var postData = querystring.stringify({
		'token' : 'e3ce717c188dec1e93be254aac9709859438a609',
		'seq_no' : 0,
		'resource_types' : '["items"]'
	});

	options.headers['Content-Length'] = postData.length;

	var output = '';

	var request = https.request(options, function(response) {
		response.setEncoding('utf8');
		response.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
			output += chunk;
		});
		response.on('end', function() {
			console.log('No more data in response.')
		});
	});

	return output;
}

module.exports = todoist;