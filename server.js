const robot = require('robotjs');
const config = require('config');
const express = require('express');
const app = express();
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('message', (type) => {
    console.log(type);
    switch (type) {
      case 'right':
        robot.keyTap('right');
        break;

      case 'left':
        robot.keyTap('left');
        break;
    
      default:
        break;
    }
  });
});

app.use('/', express.static(__dirname + '/client/www'));

server.listen(config.port);