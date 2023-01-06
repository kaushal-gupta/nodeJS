const express = require('express');
const path =require('path');
const port = 8000;


//Creating the server
const app = express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());


app.use(express.static('assets'))

//middleWare-1
// app.use(function(req,res,next){
//     console.log('middleWare 1');
//     next();

// })


// //middleWare-2
// app.use(function(req,res,next){
//     console.log('middleWare 2');
//     next();
// })  


var contactList =[
    {
        name:'Kaushal',
        phone:8860393547,
    },
    {
        name:'Sumit',
        phone:09002022,
    },
    {
        name:'Rohit',
        phone:828288292,
    }
]
app.get('/',function(req,res){
   


    return res.render('home',{
        title:'Contact List',
        heading:'Contact List',
        contact_list:contactList
    });
})

app.post('/create-contact',function(req,res){
    contactList.push({
        name:req.body.name,
        phone:req.body.phone,
    })
    

    // console.log("hello",req.body)
    res.redirect('/')
    //res.redirect('back')
})

app.get('/delete-contact/',function(req,res){
    contactList=contactList.filter((item)=>item.phone!=req.query.phone)
     res.redirect('back')
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

