//console.log("hello\n");
var log4js = require('log4js');
var log = log4js.getLogger();

function handleRequest(request, response) {
   log.debug("handleRequest ...");
   response.writeHead(200, {"Content-Type": "text/plain"});
   response.write("hello");
   response.end();
}

var http = require("http");
http.createServer(handleRequest).listen(8000);