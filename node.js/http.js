var http = require('http');
var bl = require('bl');

var responseArray = []
// http.get(process.argv[2], function(response) {
//   response.pipe(bl(function(err, data) {
//     var dataString = data.toString();
//     console.log(dataString.length);
//     console.log(dataString);
//   }))
// })

getData(process.argv[2]);
getData(process.argv[3]);
getData(process.argv[4]);

function getData(url) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err)
        return console.error(err)
      responseArray.push(data.toString());
      verifyStatus();
    }))
  })
}

function verifyStatus() {
  if (responseArray.length >= 3) {
    for (var i = 0; i < responseArray.length; i++) {
      console.log(responseArray[i]);
    }
  }
}

// var http = require('http');
//
// http.get(process.argv[2], function finishedRequest(response) {
//   response.setEncoding('utf8');
//   response.on("data", function receivedData(data) {
//     console.log(data);
//   })
// })
