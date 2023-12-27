const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get('/', function (req, res) {
    res.send('Hellow ');
});

app.use(cors());
app.use(router);

app.listen(4002, function () {
    console.log('Server run on port 4002');
});