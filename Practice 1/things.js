var express = require('express');
var router = express.Router();

var rou = require('./route.js');

router.get('/', function(req, res)
{
    res.send("<form method = 'post'><input type = 'Submit' name = 'Submit' value = 'Submit'/></form>");
});    
router.post('/', function(req, res)
{
    res.send('POST route on things.');
});

router.use('/route',rou);
module.exports = router;