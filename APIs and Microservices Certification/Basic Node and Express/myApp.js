const express = require('express');
const app = express();

const path = require('path');
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
//1 

console.log("Hello World");

//2) Start a working  Express server 
// app.get('/' ,  (req,res)=> {

// res.send("Hello Express") ; 

// }); 

// 3) Serve an HTML File
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/views', '/index.html'));


});

// //4)  middleware 
app.use(express.static(__dirname + "/public"));


//Serve Json on a specific route  && use the .env file 
// //
// let data = {message: "Hello json"};

// app.get('/json', (req,res) => {

//     if(process.env.MESSAGE_STYLE==="uppercase"){
//     res.json({message :"HELLO JSON"});  
//      } else { 
//  res.json(data); }
// // res.json({message: "Hello json"}) ;
// });




//11 

app.get('/name', (req, res) => {

  let firstNamelastName = req.query.first + ' ' + req.query.last;
  res.json({ name: firstNamelastName });

});



//12  Use body-parser to Parse POST Requests

app.use(bodyParser.urlencoded({ extended: false }))

//13   Get Data from POST Requests 
app.post('/name', bodyParser.urlencoded({ extended: false }), (req, res) => {



  let firstNamelastName = req.body.first + ' ' + req.body.last;
  res.json({ name: firstNamelastName });
})










module.exports = app;


