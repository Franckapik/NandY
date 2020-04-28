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

    socket.on('identified', (currentId)=> {
      console.log("Joueur identifié", currentId );
      players.push(socket.id)
      console.log("MAJ générale de la liste :", players);
      io.emit('added', players)
    })

    socket.on("move", (playersList)=> {
      console.log('.');
      socket.broadcast.emit("up", playersList)
    });
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
