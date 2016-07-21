console.log('----------routes');
var mongoose = require('mongoose');
var friends = require('./../controllers/friends')
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
// In our mongoose.js files (don’t forget to change the DB)
console.log('mongo connection, mongoose setup');
//This file is complete other than changing our DB
// var mongoose      = require('mongoose'),
//     fs            = require('fs'),
//     path          = require('path'),
//     models_path   = path.join( __dirname, "../models"),
//     reg           = new RegExp( ".js$", "i" ),
//     dbURI         = 'mongodb://localhost/friendship';
// mongoose.connect( dbURI );
// /*
// *  CONNECTION EVENTS
// *  When successfully connected
// */
// mongoose.connection.on( 'connected', function () {
//   console.log( `Mongoose default connection open to ${ dbURI }` );
// });
// /*
// *  If the connection throws an error
// */
// mongoose.connection.on( 'error', function ( err ) {
//   console.error( `Mongoose default connection error: ${ err }` );
// });

// *  When the connection is disconnected

// mongoose.connection.on( 'disconnected', function () {
//   console.log( 'Mongoose default connection disconnected' );
// });
// /*
// *  If the Node process ends, close the Mongoose connection
// */
// process.on( 'SIGINT', function() {
//   mongoose.connection.close( function () {
//     console.log( 'Mongoose default connection disconnected through app termination' );
//     process.exit( 0 );
//   });
// });
// /*
// *  read all of the files in the models dir and
// *  check if it is a javascript file before requiring it
// */
// fs.readdirSync( models_path ).forEach( function( file ) {
//   if( reg.test( file ) ) {
//     require( path.join( models_path, file ) );
//   }
// });