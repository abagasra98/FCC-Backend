var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err)
      return res.send(500);
    try {
      books = JSON.parse(data);
    } catch (err) {
      res.send(500);
    }
    res.json(books);
  })
})
app.listen(process.argv[2]);

// app.get('/search', function(req, res) {
//   var response = new Object();
//   for(var key in req.query) {
//     response[key] = req.query[key];
//   }
//   res.send(response);
//   // could also replace everything above with: res.send(req.query);
// })
// app.listen(process.argv[2]);

// app.put('/message/:id', function(req, res) {
//   res.end(require('crypto').createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex'));
// });
// app.listen(process.argv[2]);

// app.use(require('stylus').middleware(process.argv[3]));
// app.use(express.static(process.argv[3]));
//
// app.listen(process.argv[2]);

// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended: false}));
// app.post('/form', function(req, res) {
//   res.end(req.body.str.split('').reverse().join(''));
// });
// app.listen(process.argv[2]);

// app.set('views', __dirname);
// app.set('view engine', 'pug');
//
// app.get('/home', function(req, res) {
//   res.render('index', {date: new Date().toDateString()})
// })
// app.listen(process.argv[2]);

// app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
// app.listen(process.argv[2]);

// app.get('/home', function(req, res) {
//   res.end("Hello World!");
// })
// app.listen(process.argv[2]);
