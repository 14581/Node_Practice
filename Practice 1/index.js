var express = require('express');
var app = express();


app.use(function(req,res,next){
console.log("please get into the  next function");
next();
});

app.get('/hello', function(req, res)
{
 res.send("<form method = 'post'  action = '/hello'><button name='btn' value= 'submit'>submit button</button> <h2>hhjdh</h2></form>");
});
app.post('/hello', function(req, res)
{
    res.send("You just called the post method at '/hello'!\n");
});

app.use('/things',things);
app.listen(4000);


