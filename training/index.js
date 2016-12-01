var _	= require('underscore'),
mongodb	= require('mongodb'),
fn = require('./myfile.js')
, otherFn = require('./test').other
otherFn()
fn()


var uri = 'mongodb://localhost:27017/example'
// mongodb.MongoClient.connect(uri, function(err, db){
// 	if(err){
// 		console.log(err)
// 		process.exit(1)
// 	}

// 	db.collection('sample').insert({x:1}, function(err, result){
// 		if(err){
// 			console.log(err)
// 			process.exit(1)
// 		}

// 		db.collection("sample").find().toArray(function(err, docs){
// 			if(err){
// 				console.log(err)
// 				process.exit(1)
// 			}

// 			console.log('Foud docs:')
// 			docs.forEach(function(doc){
// 				console.log(JSON.stringify(doc))
// 			})
// 			process.exit(0)
// 		})
// 	})
// })

mongodb.MongoClient.connect(uri, function(err, db){
	if(err){
		console.log(err)
		process.exit(1)
	}

	var doc = {
		title:'Jaws',
		year:1975,
		director:'Steven Spielberg',
		rating:'PG'
	}

	db.collection('movies').insert(doc, function(err, result){
		if(err){
			console.log(err)
			process.exit(1)
		}

		db.collection('movies').find().toArray(function(err, docs){
			if(err){
				console.log(err)
				process.exit(1)
			}

			console.log("Foud docs:")
			docs.forEach(function(doc){
				console.log(JSON.stringify(doc))
			})
			process.exit(0)
		})
	})
})