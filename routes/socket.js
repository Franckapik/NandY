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
    socket.on('event', (data)=> {
      console.log(data)
      players.push(socket.id)
      io.emit('connected', players)

    })

    socket.broadcast.emit('message', socket.id)
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
