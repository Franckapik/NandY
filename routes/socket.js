const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.set('origins', '*:*');
server.listen(3002);

const socketIO = () => {

  app.locals.players = {}

  //CONNECTION
  io.on("connection", (socket) => {
    app.locals.players[socket.id] = {
      x: 0,
      y: 0,
      score: 10
    };

    //ENVOI ID
    console.log("Identification du joueur", socket.id);
    socket.emit('id', socket.id)

    //RECEPTION KEYBOARD
    socket.on('movement', function (data) {
      var force = 1;
      var player = app.locals.players[socket.id] || {};
      if (data.left) {
        player.x -= force;
      } else if (data.right) {
        player.x += force;
      } else if (data.up) {
        player.y -= force;
      } else if (data.down) {
        player.y += force;
      } else {
        player.x = 0;
        player.y = 0;
      }
      console.log(".");
      
      io.emit('state', app.locals.players);

    });

    //DECONNECTION
    socket.on("disconnect", () => {
      console.log("Joueur déconnecté", socket.id);
      delete app.locals.players[socket.id];
      io.emit('state', app.locals.players);
    });
  });
}

module.exports = socketIO;