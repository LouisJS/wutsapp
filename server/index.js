var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var mongojs = require('mongojs');

var ObjectID = mongojs.ObjectID;
var db = mongojs(process.env.MONGO_URL || 'mongodb://admin:admin@cluster0-shard-00-00-bbjv4.mongodb.net:27017,cluster0-shard-00-01-bbjv4.mongodb.net:27017,cluster0-shard-00-02-bbjv4.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

var recipient = {};
var me = {};

websocket.on('connection', (socket) => {
    socket.on('loadConversation', (metaData) => loadConversation(metaData, socket));
    socket.on('message', (message) => onMessageReceived(message, socket));
});

// Event listeners.
// Load conversation and setup Me and recipient
function loadConversation(metaData, socket) {
  recipient = Object.assign({}, metaData.recipient);
  me = Object.assign({}, metaData.me);

  console.log('Talking to ', recipient.name);
}

// When a user sends a message in the chatroom.
function onMessageReceived(message, senderSocket) {
  _sendAndSaveMessage(message, senderSocket);
}

// Save the message to the db and send all sockets but the sender.
function _sendAndSaveMessage(message, socket, fromServer) {
  db.collection('messages').insert(message, (err, message) => {
    // If the message is from the server, then send to everyone.
    var emitter = fromServer ? websocket : socket.broadcast;
    emitter.emit('message', message);
  });
}

// Allow the server to participate in the chatroom through stdin.
var stdin = process.openStdin();
stdin.addListener('data', function(d) {
  _sendAndSaveMessage({
    sender: recipient.id || 'user3',
    content: d.toString().trim(),
    date: new Date(),
  }, null /* no socket */, true /* send from server */);
});
