var net = require('net');

var server = net.createServer(function listener(socket) {
  var dateString = "";
  var date = new Date();
  dateString += date.getFullYear() + "-" + formatDate(date.getMonth() + 1) + "-" + formatDate(date.getDate()) + " ";
  dateString += formatDate(date.getHours()) + ":" + formatDate(date.getMinutes()) + "\n";
  socket.end(dateString)
})
server.listen(process.argv[2]);

function formatDate(dateToken) {
  if (dateToken < 10)
    return "0" + dateToken;
  return dateToken;
}
