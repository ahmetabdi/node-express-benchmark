var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/data.json', function(req, res) {
  res.sendFile('test.json', { root: __dirname })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
