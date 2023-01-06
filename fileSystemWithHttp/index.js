const http = require('http');
const port = 8000;
const fs = require('fs');

const server = http.createServer(requestHandler);

function requestHandler(req,res){
    console.log(req.url);
    res.writeHeader(200,{content:'text/html'});

    let filePath;
    
    switch(req.url){
        case '/':
            filePath='./index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
                
        default:
            filePath='./error.html';   
    }


    fs.readFile(filePath,function(err,data){
        if(err){
            console.log("error",err);
            return res.end('<h1>404 Error!</h1>')
        }

        return res.end(data);
    })

}

server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("Server running on the port: ", port);

});