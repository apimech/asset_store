// Require express and create an instance of it
var express = require('express');
var app = express();
var fs = require('fs');

// On localhost:3000/welcome
app.get('/', function (req, res) {
    res.send('<b>Hello</b> Welcome to my little web element repository.');
});

app.get('/:dir/:file', function (req, res) {
    var path = `/${req.params.dir}/${req.params.file}`;
    if(req.params.dir == "media" || req.params.dir == "js"|| req.params.dir == "html"|| req.params.dir == "css"){
        if(file_exists(path)){
            res.sendFile(path);
        }
    }
});


// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Not Found");
});

function file_exists(file) {
    try {
        if(fs.existsSync('file.txt')) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(err);
        return;
    }
}
