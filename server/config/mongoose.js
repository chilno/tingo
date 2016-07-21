var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
console.log('--------mongoose connection');
//db connection (mongod must be on else error)
mongoose.connect('mongodb://localhost/friendship');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(models_path + '/' + file);
	}
})