var socket = require('socket.io-client')('http://46.101.23.196:3000');
var prettyjson = require('prettyjson');

  socket.on('connect', function(){
  	console.log('connected.');
  });
  socket.on('describerMessage', function(data){
  	console.log(prettyjson.render(JSON.parse(data)));
  });
  socket.on('movementMessage', function(data){
  	console.log(prettyjson.render(JSON.parse(data)));
  });
  socket.on('disconnect', function(){
  	console.log('disconnected.');
  });