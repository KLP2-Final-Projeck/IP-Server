const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res){
    res.send('Hellow ');
});

app.listen(4002, function(){
    console.log('Server run on port 3000');
});