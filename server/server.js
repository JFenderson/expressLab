const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
let app = express();


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req,res) =>{
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank You');
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);

