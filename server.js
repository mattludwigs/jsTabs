var http = require('http'),
    fs = require('fs');
    // staticFiles = require('./static');

http.createServer(function (req, res) {

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
console.log('Greb a beer @ localhost:9778');