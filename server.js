const http = require('http');

http.createServer( (req, res) => { 

    console.log(req.url, req.method, req.headers);
   // process.exit();
    res.setHeader('Content-type','text/html');
    res.write('<html>');
    res.write('<head> <title> Node basic server page </title></head> ');
    res.write('<body><h1> Hello From backend Node js server </h1>  </body>');
    res.write('</html>');
res.end();

}).listen(3000);
