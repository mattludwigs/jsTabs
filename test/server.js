var http = require('http'),
    fs = require('fs'),
    mongoose = require('mongoose');

http.createServer(function (req, res) {

  'use strict';

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

  if (req.url === '/worked') {
    var obj = {};

    req.on('data', function (chuck) {
      chuck.toString().split('&').forEach(function (string) {
        var s = string.split('=');
        obj[s[0]] = s[1];
      });

      console.log(JSON.stringify(obj));

      fs.writeFile(__dirname + '/message.json', JSON.stringify(obj, null, '\t'), function (err) {
        if (err) {
          console.log(err);
        }

        fs.readFile(__dirname + '/message.json', function (err, data) {
          if (err) {
            console.log(err);
          }
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(data);
          res.end();
        })
      })

    });
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