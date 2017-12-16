var express = require('express');
var bodyparser = require('body-parser');        // helps to retrieve the data from the source specified like JSON,raw,text,etc 
var cookieparser = require('cookie-parser');    // helps to pa
var path = require('path');
var app = express();

var urlencoded = bodyparser.urlencoded ({ extended : false});

app.use(express.static('public'));

app.get('/index1.htm',function(req,res)
{
    res.sendFile(path.join(__dirname,'/index1.htm'));
});

app.post('/process_post',urlencoded,function(req,res)
{
    Response = 
    {
        First_Name : req.body.First_Name,
        Last_Name : req.body.Last_Name
    };
    console.log(Response);
    res.send(JSON.stringify(Response));
});

app.listen(4000);