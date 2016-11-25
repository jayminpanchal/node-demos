var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
    console.log('request made' + req.url);
    res.writeHead(200, {'content-Type': 'text/html'});
    var myStream = fs.createReadStream(__dirname + "/index.ejs", 'utf8');
    myStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("Server listening on 127.0.0.1:3000");
