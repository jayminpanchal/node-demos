var http=require("http");
var fs=require("fs");

var server=http.createServer(function(req,res){
  console.log('request made'+req.url);
  if(req.url === '/home' || req.url === '/'){
      res.writeHead(200,{'content-Type':'text/html'});
      fs.createReadStream(__dirname+"/index.html",'utf8').pipe(res);
  }else if(req.url === '/contact'){
      res.writeHead(200,{'content-Type':'text/html'});
      fs.createReadStream(__dirname+"/contact.html",'utf8').pipe(res);
  }else{
      res.writeHead(200,{'content-Type':'text/html'});
      fs.createReadStream(__dirname+"/404.html",'utf8').pipe(res);
  }
});

server.listen(3000,'127.0.0.1');
console.log("Server listening on 127.0.0.1:3000");
