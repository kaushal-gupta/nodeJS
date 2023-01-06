const express = require('express');
const path =require('path');
const port = 8000;


//Creating the server
const app = express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home',{
        title:'Home',
        para:'I am home'
    });
})
app.get('/profile',function(req,res){
    return res.render('profile',{
        title:'profile',
        para:'I am profile'
    });
})

app.listen(port,function(err){
    if(err){
        console.log('error',err);
    }
    console.log('Express server is running on port ',port);
})