const express = require('express');
const app = express();
const port = 3000;
const server = app.listen(port);

app.use(express.static('public'));

console.log('Server running on port: ' + port);

const socket = require('socket.io');
const io = socket(server);

var newConnection = (socket) => {
    console.log('New connection: ' + socket.id);
}

io.sockets.on('connection', newConnection);
