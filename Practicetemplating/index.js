var express = require('express');
var app = express();

app.use(express.static('public'));

app.set('view engine','pug');
app.set('views','./views');

app.get('/loginpage' , function(req,res)
{
    res.render('Login',{
        user:
        {
            name : "Rishi" , age : "20"
        }

    });
});
app.get('/firstTemp' , function(req,res)
{
    res.render('dynamic',{
        name : "rishi",
        url : "www.hpdf.hasura.io"
    });
});

app.get('/firstTemplate' , function(req,res)
{
    res.render('first_view');
});

app.listen(4000);