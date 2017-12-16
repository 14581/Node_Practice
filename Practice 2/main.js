
var express = require('express');
var bodyparser = require('body-parser');        // helps to retrieve the data from the source specified like JSON,raw,text,etc 
var cookieparser = require('cookie-parser');    // helps to pa
var path = require('path');
var app = express();

app.get('/', function(req,res)
{
    res.send("hello world");
});

app.use(express.static('Public'));

app.get('/index.htm',function(req,res)
{
    res.sendFile(path.join(__dirname,'/index.htm'));
});

app.get('/process_get',function(req,res)
{
     response = 
    {
        First_Name : req.query.First_Name,
        Last_Name : req.query.Last_Name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});
app.listen(4000);