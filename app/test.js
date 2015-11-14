var querystring = require('querystring');
var http = require('https');

var postData = querystring.stringify({
  'token' : 'e3ce717c188dec1e93be254aac9709859438a609',
  'seq_no' : 0,
  'resource_types' : '["items"]'
});

var options = {
  hostname: 'todoist.com',
  path: '/API/v6/sync',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
  res.on('end', function() {
    console.log('No more data in response.')
  })
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write(postData);
req.end();
