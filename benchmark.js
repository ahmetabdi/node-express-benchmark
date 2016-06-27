var apiBenchmark = require('api-benchmark');
var fs = require('fs');

var service = {
  server1: "https://nodeapitest.herokuapp.com/data.json"
};

var routes = { route1: { method: 'get', route: 'data.json' }, route2: { method: 'get', route: 'data.json' } };

var options = { runMode: 'parallel', maxConcurrentRequests: 10, minSamples: 2000 }//, maxTime: 5 }

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
