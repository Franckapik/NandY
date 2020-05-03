const express = require('express');
const router = express.Router();
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.set('origins', '*:*');
server.listen(3002);

const players = [];

const socketIO = () => {
  io.on("connection", (socket) => {
    console.log("Joueur connecté");
    console.log("Identification du joueur", socket.id);
    socket.emit('id', socket.id)

    setInterval(function() {
      io.sockets.emit('state', players);
    }, 1000 / 60);

    //store dans le serveur
/*socket.on('new player', function() {
  players[socket.id] = {
    x: 300,
    y: 300
  };
});*/

socket.on('movement', function(data) {
  var player = players[socket.id] || {};
  if (data.left) {
    player.x -= 5;
  }
  if (data.up) {
    player.y -= 5;
    console.log('hey');
  }
  if (data.right) {
    player.x += 5;
  }
  if (data.down) {
    player.y += 5;
  }
    });

    socket.on("move", (playersList)=> {
      console.log('.');
      socket.broadcast.emit("up", playersList)
    });

    //

    socket.on('identified', (currentId)=> {
      console.log("Joueur identifié", currentId );
      players[socket.id] = {
        x: 300,
        y: 300
      };
      console.log("MAJ générale de la liste :", players);
      io.emit('added', players)
    })


    socket.on("disconnect", () => {
      console.log("Joueur déconnecté", socket.id);
      var i = players.indexOf(socket.id);
      if (i !== -1) {
        players.splice(i, 1);
      }
      io.emit('disconnect', players);
    });
  });
}

module.exports = socketIO;
