var mongo = require('mongodb').MongoClient;

// AGGREGATE
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
  if (err) throw err;
  var prices = db.collection('prices');
  prices.aggregate([
    {$match: {size: process.argv[2]}},
    {$group: {
      _id: 'average', average: {$avg: '$price'}
    }}
  ]).toArray(function(err, results) {
    if (err) throw err;
    if (!results.length)
      throw new Error('No results found');
    console.log(Number(results[0].average).toFixed(2));
    db.close();
  })
});

// COUNT
// mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//   if (err) throw err;
//   var parrots = db.collection('parrots');
//   parrots.count({
//     age: {$gt: +process.argv[2]}
//   }, function(err, count) {
//     if (err) throw err;
//     console.log(count);
//     db.close();
//   })
// })

// REMOVE
// var url = 'mongodb://localhost:27017/' + process.argv[2];
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var collection = db.collection(process.argv[3]);
//   collection.remove({
//     _id: process.argv[4]
//   }, function(err) {
//     if (err) throw err;
//     db.close();
//   })
// });

// UPDATE
// var url = 'mongodb://localhost:27017/' + process.argv[2];
// mongo.connect(url, function(err, db) {
//   if (err) throw err;
//   var users = db.collection('users');
//   users.update({
//     username: 'tinatime'
//   }, {
//     $set: {
//       age: 40
//     }
//   }, function(err) {
//     if (err) throw err;
//     db.close();
//   })
// });

// INSERT
// mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//   if (err) throw err;
//   var document = {firstName: process.argv[2], lastName: process.argv[3]};
//   var docs = db.collection('docs');
//   docs.insert({
//     document
//   }, function(err, data) {
//     if (err) throw err;
//     console.log(JSON.stringify(document));
//     db.close();
//   })
// });

// FIND PROJECT
// mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//   if (err) throw err;
//   var parrots = db.collection('parrots');
//   parrots.find({
//     age: {$gt: +process.argv[2]}
//     }, {
//       name: 1
//     , age: 1
//     , _id: 0
//     }).toArray(function(err, documents) {
//       if (err) throw err;
//       console.log(documents);
//       db.close();
//   })
// });

// FIND
// mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
//   if (err)
//     throw err;
//   var collection = db.collection('parrots');
//   collection.find({
//     age: {$gt: parseInt(process.argv[2]) }
//   }).toArray(function(err, documents) {
//     if (err) throw err;
//     console.log(documents);
//     db.close();
//   });
// });
