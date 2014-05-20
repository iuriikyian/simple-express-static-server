var express = require("express"),
	bodyParser = require('body-parser')
	errorHandler = require('errorhandler'),
	methodOverride = require('method-override');

function run(port, rootDir){
	var app = express(),
		rootDir = rootDir || __dirname + '/',
	    port = port || 4567;

	app.use(methodOverride());
	app.use(bodyParser());
	app.use(express.static(rootDir), {
		redirect : true
	});
	app.use(errorHandler({
	  dumpExceptions: true,
	  showStack: true
	}));

	console.log('start static server on port ' + port + ' with root dir : ' + rootDir)
	app.listen(port);

};

if(require.main === module){
	run(process.env.PORT);
}else{
	module.exports = run;
}