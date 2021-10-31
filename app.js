const http=require('http');
http.createServer(function(req,res) 
{
res.writeHead(200,{'Content-Type':'text/html'});
res.write('<h1>NodeJS</h1>');
res.write('<h2>Assessment-1</h2>');
res.end();
}).listen(8000);
console.log('Server is running on the port over 8000');