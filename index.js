const express = require('express');
const app = express();
const path = require('path');


app.set('port',process.env.PORT || 4000);

app.use(express.static(path.join(__dirname, 'PHP')));

const server = app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});

const SocketIO = require("socket.io");
const io = SocketIO(server);

io.on('connection', (socket) => {
  console.log('new connection', socket.id);

  socket.on('chat:message', (data) => {
    io.sockets.emit('chat:message',data);
  })
});

