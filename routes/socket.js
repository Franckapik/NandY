const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.set('origins', '*:*');
server.listen(3002);

const WebSocket = require('ws');
const CANNON = require('cannon-es');
const { PerformanceObserver, performance } = require('perf_hooks');

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
        linearDamping:0.8,
        angularDamping:0.8,
      });
      world.addBody(sphereBody);
      
      // Create a plane
      var groundBody = new CANNON.Body({
         mass: 0 // mass == 0 makes the body static
      });
      var groundShape = new CANNON.Plane();
      groundBody.addShape(groundShape);
      world.addBody(groundBody);

const socket = () => {
 
  const wss = new WebSocket.Server({ port: 8000 });
 
  wss.on('connection', function connection(ws) {
  
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });
  
    let frame = 0;
  
    var fixedTimeStep = 1.0 / 60.0; // seconds
    var maxSubSteps = 3;
  
    let position = 0;
    let lastTime;
    const gameLoop = () => {
        time = performance.now()
        var dt = time - lastTime;
        world.step(fixedTimeStep)
        position = sphereBody.position;
       // console.log(dt);
        if(position.z < 1) {       
          var impulse = new CANNON.Vec3(0, 0, 10 * dt)
          sphereBody.applyImpulse(impulse, sphereBody.position) 
        }
        lastTime= time;       
    }
  
    const socketLoop = () => {
      ws.send(position.z)      
    }
    
    setInterval(gameLoop, fixedTimeStep*1000);
    setInterval(socketLoop, 100);
   
  });
}

module.exports = socket;