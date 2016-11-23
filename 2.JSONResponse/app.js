var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
  console.log('request made'+req.url);
  res.writeHead(200,{'content-Type':'application/json'});
  var jsonRes=[{
    name:'abc',
    age:12,
    city:'ahmedabad'
  },
  {
    name:'xyz',
    age:13,
    city:'mumbai'
  },
];
res.end(JSON.stringify(jsonRes));
});

server.listen(3000,'127.0.0.1');
console.log("Server listening on 127.0.0.1:3000");
