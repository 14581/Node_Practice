var http = require('http');
var express = require('express');
var app = express();



var options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users'
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
// Buffer the body entirely for processing as a whole.
var bodyChunks = [];
res.on('data,', function(chunk) {
  // You can process streamed parts here...
  bodyChunks.push(chunk);
}).on('end', function() {
  var body = Buffer.concat(bodyChunks.forEach.name);
  console.log('BODY: ' + body);
  // ...and/or process the entire body here.
})
});

req.on('error', function(e) {
console.log('ERROR: ' + e.message);
});
app.listen(4000);