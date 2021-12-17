var express = require('express');
var app = express();
app.use(express.json());



app.get('/', function (req, res) {
  res.send('Welcome to JavaTpoint!');
});

const userdetail = require("./userdetail");
app.post('/login', function (req, res) {
  console.log(req.body);
  var param = {
    "_id": req.body.userName,
    "password": req.body.password
  }
  userdetail.finduser(param, function (dbres) {
    console.log("dbres============");
    console.log(dbres);
    if (dbres.length > 0) {
      res.send('logged in successfull');
    }
    else {
      res.send('logged in failed');
    }

  });
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});