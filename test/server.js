var http = require('http'),
    fs = require('fs'),
    bodyParser = require('body-parser')(),
    mongoose = require('mongoose');

http.createServer(function (req, res) {

//  console.log(req);

  if (req.url === '/') {
    fs.readFile(__dirname + '/login.html', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  }

  if (req.method === 'POST') {
    console.log(req.body);

    res.end();
  }

  if (req.url.indexOf('.js') !== -1) {
    fs.readFile(__dirname + '/script.js', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  if (req.url.indexOf('.css') !== -1) {
    fs.readFile(__dirname + '/style.css', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    })
  }
})
    .listen(9778);
console.log('send req');