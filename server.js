const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

const players = {};
const orderOfPlayers = [];
let currentPlayer = 0;

io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
    const [username, position] = msg.split(':');
    socket.username = username;

    if (!orderOfPlayers.length) {
      io.emit('msg', `host:${username}`);
    }

    if (!orderOfPlayers.includes(username)) {
      console.log(`New player - ${username}${!orderOfPlayers.length ? ' - also host' : ''}`);
      orderOfPlayers.push(username);
    } else if (msg.startsWith('p:')) {
      currentPlayer = (currentPlayer + 1) % orderOfPlayers.length;
      io.emit('msg', `nextplayer:${orderOfPlayers[currentPlayer]}`);
      console.log(`Next player - ${orderOfPlayers[currentPlayer]}`);
    }
    players[username] = parseInt(position);

    io.emit('msg', msg);
  });

  socket.on('disconnect', () => {
    if (!players[socket.username] || !socket.username) return;
    console.log('Disconnecting ' + socket.username);
    delete players[socket.username];
    const i = orderOfPlayers.indexOf(socket.username);
    if (i >= 0) {
      orderOfPlayers.splice(i, 1);
      currentPlayer = currentPlayer % orderOfPlayers.length;
      io.emit('msg', `nextplayer:${orderOfPlayers[currentPlayer]}`);
    }
  });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
