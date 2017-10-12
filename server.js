var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
 
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
 
var PORT = process.env.PORT || 8080;

var app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});