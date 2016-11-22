var fs = require('fs');
var path = require('path');

module.exports = function getFileList(dir, ext, callback) {
  fs.readdir(dir, function finishedReading(err, fileList) {
    if (err)
      return callback(err)
    return callback(null, filterFiles(ext, fileList));
  })
}

function filterFiles(extension, fileList) {
  var filteredList = []
  for (var i = 0; i < fileList.length; i++) {
    var file = fileList[i];
    if (path.extname(file) == "."+extension) {
      filteredList.push(file);
    }
  }
  return filteredList
}
