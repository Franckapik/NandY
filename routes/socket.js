const express = require('express');
const app = express();
const CANNON = require('cannon-es');

var world = new CANNON.World();
world.gravity.set(0, 0, -9.82);

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
      z: 0,
      score: 10
    };

    //ENVOI ID
    console.log("Player identification", socket.id);
    socket.emit('id', socket.id)

    //RECEPTION KEYBOARD
    socket.on('movement', function (data) {
      var player = app.locals.players[socket.id] || {};
            
      if (data.keys.up) {
        var body = new CANNON.Body({
          mass: 2,
          position: data.erwinPosition,
        })
        body.linearDamping = body.angularDamping = 0.5
        var worldPoint = new CANNON.Vec3(0, 0, 0)
        var force = new CANNON.Vec3(500, 0, 0)
        body.applyForce(force, worldPoint)
      } 

      console.log(".");
      
      io.emit('state', app.locals.players);

    });

    //DECONNECTION
    socket.on("disconnect", () => {
      console.log("Player disconnected", socket.id);
      delete app.locals.players[socket.id];
      io.emit('state', app.locals.players);
    });
  });
}

module.exports = socketIO;