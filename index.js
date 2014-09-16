var http = require('http'),
    service1 = require('./services/home.js'),
    seneca = require('seneca')().client();

http.createServer(function(req, res) {
  seneca.act({ page: '/'}, function(e, message) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(message.content));
  });
}).listen(4000);



