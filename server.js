var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

//db
var mongoose_setup = require('./server/config/mongoose.js');

//routes
var routes = require('./server/config/routes.js');
routes(app);

//live
app.listen(8000, function(){
	console.log('magic on port 8000');
})



