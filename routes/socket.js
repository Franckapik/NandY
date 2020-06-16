const express = require('express');
const app = express();
const CANNON = require('cannon-es');
const gameloop = require('node-gameloop');
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.set('origins', '*:*');
server.listen(3002);

const socketIO = () => {

    // Setup our world
    var world = new CANNON.World({
      gravity: new CANNON.Vec3(0, 0, -9.82) // m/s²
    });
      
    // Create a sphere
    var radius = 1; // m
    var sphereBody = new CANNON.Body({
      mass: 5, // kg
      position: new CANNON.Vec3(0, 0, 10), // m
      shape: new CANNON.Sphere(radius),
      linearDamping:0.5,
      angularDamping:0.5,
    });
    world.addBody(sphereBody);
    
    // Create a plane
    var groundBody = new CANNON.Body({
       mass: 0 // mass == 0 makes the body static
    });
    var groundShape = new CANNON.Plane();
    groundBody.addShape(groundShape);
    world.addBody(groundBody);

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

    var fixedTimeStep = 1.0 / 60.0; // seconds
    var maxSubSteps = 3;
    
    let frameCount = 0;
    const id = gameloop.setGameLoop(function(delta) {
      // `delta` is the delta time from the last frame
      world.step(fixedTimeStep, delta, maxSubSteps);

      //console.log('Hi there! (frame=%s, delta=%s)', frameCount++, delta);
      console.log("Sphere position: " + sphereBody.position);

          //RECEPTION KEYBOARD
    socket.on('movement', function (data) {
           
      if (data.keys.up) {
        var impulse = new CANNON.Vec3(5 * delta, 0, 0)
        sphereBody.applyImpulse(impulse, sphereBody.position)
      } 

      app.locals.players[socket.id] = {
        x:  sphereBody.position.x,
        y:  sphereBody.position.y,
        z:  sphereBody.position.z,
      };
      
    });


    }, 1000 / 10);
    
    // stop the loop 2 seconds later
    setTimeout(function() {
      console.log('2000ms passed, stopping the game loop');
      gameloop.clearGameLoop(id);
    }, 20000);



    //DECONNECTION
    socket.on("disconnect", () => {
      console.log("Player disconnected", socket.id);
      delete app.locals.players[socket.id];
      io.emit('state', app.locals.players);
    });
  });
}

setInterval(SEND,1000/60);
function SEND(){
    io.sockets.emit('update', app.locals.players);
}

module.exports = socketIO;