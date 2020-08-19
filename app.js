const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { dirname } = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', null, (err, data) => {
        res.write(data);
        return res.end();
    });
});

app.post('/save.obj', function(req, response) {
    
  
    


    response.setHeader('Content-disposition', 'attachment; filename=download.obj');
    response.setHeader('Content-type', 'application/text');
    
    var file = fs.writeFile('./public/obj/download.obj' ,req.body.file_string, function(){
    });
    
    response.download('./public/obj/download.obj','download.obj');


})
 
var server = app.listen(port, function () {
    var host = server.address().address
    var port = server.address().port
    
 })
