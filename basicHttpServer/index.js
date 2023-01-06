const http = require('http');
const port = 8000;

const server = http.createServer(requestHandler);

function requestHandler(req,res){
    console.log(req.url);
    res.writeHeader(200,{content:'text/html'});
    res.end('<h1>Hello World</h1>');
}

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is up and running on the port: ", port);

});