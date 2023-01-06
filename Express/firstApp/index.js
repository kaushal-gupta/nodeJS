const express = require('express');
const port = 8000;


//Creating the server
const app = express();

app.get('/',function(req,res){
    res.send('<h1>Hello Express</h1>')
})

app.listen(port,function(err){
    if(err){
        console.log('error',err);
    }
    console.log('Express server is running on port ',port);
})