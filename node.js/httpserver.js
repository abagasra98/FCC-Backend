var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  if (request.method != "GET")
    return response.end("Send me a GET request\n");
  response.writeHead(200, {'Content-Type' : 'application/json'})
  var requestURL = url.parse(request.url, true);
  if (requestURL.pathname == "/api/parsetime") // Can use String.test(str) to check if a string contains substring
    response.write(parseTime(requestURL.query['iso']));
  else if (requestURL.pathname == '/api/unixtime')
    response.write(unixTime(requestURL.query['iso']));
  response.end();
})
server.listen(process.argv[2]);

function parseTime(iso) {
  var date = new Date(iso);
  return JSON.stringify({hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds()});
}

function unixTime(iso) {
  return JSON.stringify({unixtime : new Date(iso).getTime()});
}

// var http = require('http');
// var map = require('through2-map');
// var fs = require('fs');
//
// var server = http.createServer(function(request, response) {
//   if (request.method != "POST")
//     return response.end("Send me a POST request\n");
//
//   request.pipe(map(function(chunk) {
//     return chunk.toString().toUpperCase();
//   })).pipe(response);
// })
// server.listen(process.argv[2]);

// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(request, response) {
//   var src = fs.createReadStream(process.argv[3]);
//   src.pipe(response);
// })
// server.listen(process.argv[2]);
