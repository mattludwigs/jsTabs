var http = require('http'),
    fs = require('fs'),
    staticFiles = require('./static');

http.createServer(function (req, res) {

// var js = [];

// if (req.url.indexOf('.js') !== -1) {
//   js.push(req.url);

//   console.log(js);
// }

//  console.log(req);

  if (req.url === '/') {
    fs.readFile(__dirname + '/index.html', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  }

  if (req.url === "/Tabs.js") {
    fs.readFile(__dirname + '/Tabs.js', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  if (req.url === "/main.js") {
    fs.readFile(__dirname + '/main.js', function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  if (req.url.indexOf('.css') !== -1) {
    console.log(req.url)

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