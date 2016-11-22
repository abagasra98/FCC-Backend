var readmod = require('./readmodule')
readmod(process.argv[2], process.argv[3], function(err, filteredList) {
  if (err)
    console.log("An error occured " + err);
  else {
    for (var i = 0; i < filteredList.length; i++) {
      console.log(filteredList[i]);
    }
  }
})
// var fs = require('fs');
// var path = require('path')
//
// function getFileList(callback) {
//   fs.readdir(process.argv[2], function finishedReading(err, fileList) {
//     callback(process.argv[3], fileList);
//   })
// }
//
// function logFiles(extension, fileList) {
//   for (var i = 0; i < fileList.length; i++) {
//     var file = fileList[i];
//     if (path.extname(file) == "."+extension) {
//       console.log(file);
//     }
//   }
// }
//
// getFileList(logFiles);
