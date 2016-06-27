var apiBenchmark = require('api-benchmark');
var fs = require('fs');

var service = {
  server1: "http://localhost:3000/data.json"
};

var routes = { route1: { method: 'get', route: 'data.json' }, route2: { method: 'get', route: 'data.json' } };

var options = { runMode: 'parallel', maxConcurrentRequests: 100, minSamples: 5000 }//, maxTime: 5 }

apiBenchmark.measure(service, routes, options, function(err, results){
  apiBenchmark.getHtml(results, function(error, html){
    // console.log(html);
    fs.writeFile("test.html", html, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
});
