var https = require('https');
var querystring = require('querystring');
var q = require('q');

var todoist = {};

todoist.getItems = function() {
	var options = {
		hostname: 'todoist.com',
		path: '/API/v6/sync',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	var postData = querystring.stringify({
		'token' : 'e3ce717c188dec1e93be254aac9709859438a609',
		'seq_no' : 0,
		'resource_types' : '["items"]'
	});

	options.headers['Content-Length'] = postData.length;

	var output = q.defer();

	var request = https.request(options, function(response) {

		var result = '';

		response.setEncoding('utf8');
		response.on('data', function (chunk) {
			console.log('BODY: ' + chunk);
			result += chunk;
		});
		response.on('end', function() {
			console.log('No more data in response.')
			output.resolve(result);
			console.log(result);
		});
		// output.resolve(result);
	});

	request.write(postData);
	request.end();

	console.log("Got into getItems");
	// request.on('error', function() {
	// 	output.reject("Bad request");
	// })

	return output.promise;
}

module.exports = todoist;