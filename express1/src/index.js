// import modules 
const express = require('express');
const path = require('path');
const hbs = require('hbs');


// serve as app
const app = express();


// definig variables 
const port = 80;
const srcpath =path.join(__dirname) ;
const publicpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../template");
const viewspath = path.join(__dirname,"../template/views");
const partialspath = path.join(__dirname,"../template/partials");

// displaying path 
// console.log(srcpath);
// console.log(publicpath);
// console.log(templatepath);
// console.log(viewspath);
// console.log(partialspath);


// regiter partials in our server 
hbs.registerPartials(partialspath);


// get static file in this is server 
app.use(express.static(publicpath));


// set view engine 
app.set('view engine',"hbs");

// set view template directory 
app.set("views",viewspath);


// send response 
app.get('/',(req,res)=>{
    res.status(200).render('index');
    // res.status(200).render('index',{
    //     variables: "another"
    // });
});

app.get('/about',(req,res)=>{
    res.status(200).render('about');
});

app.get("/about/*",(req,res)=>{
    res.status(404).render('404',{
        error : "error 404 ...no such dirctory is avialable in this about file"
    });
});

app.get("*",(req,res)=>{
    res.status(404).render('404',{
        error : "error 404 occurs"
    });
});

// to start server listening at port 
app.listen(port,()=>{
    console.log(`listenings  to the port ${port}`);
});