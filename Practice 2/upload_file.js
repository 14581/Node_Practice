var express = require('express');
var app = express();
var fs = require ("fs");

var bodyparser = require('body-parser');        // helps to retrieve the data from the source specified like JSON,raw,text,etc 
var path = require('path');
var multer =  require('multer');

app.use(express.static('Public'));
app.use(bodyparser.urlencoded({ extended : false}));
app.use(multer ({dest :'/tmp/'}));

app.get('/indexfile.htm',function(req,res,next)
{
    res.sendFile(__dirname,'/indexfile.htm');
    next()
});

app.post('/process_fileupload',function(req,res,next)
{
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);

    var file = __dirname + '/' + req.files.file.name;
    fs.readFile(req.files.file.path, function(err,data)
    {
        fs.writeFile(file,data,function(err)
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                Response = 
                {
                    message : 'file uploaded successfully',
                    filename : req.files.file.name
                };
            }
            console.log( Response );
            res.end(JSON.stringify(Response));
        });
    });
});

app.listen(4000);





