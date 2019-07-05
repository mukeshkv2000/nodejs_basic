const http = require('http');

http.createServer( (req, res) => {
    console.log(req);
    //process.exit();  // activate this to exit the loop

}).listen(3000);
