const http = require('http');

http.createServer( (req, res) => {


 

    console.log(req.url, req.method, req.headers);
    process.exit();


}).listen(3000);
