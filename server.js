const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const port = process.env.PORT || 3000;

const events = require('./src/levels/events.json');
const scenarios = require('./src/scenarios.json');
const level = require('./src/levels/f13.json');

app.use(cors());
app.use(express.static('build'));

const players = {};
const orderOfPlayers = [];
let currentPlayer = 0;
let currentEvent = null;

app.get('/', (req, res) => res.send('hello'));

io.on('connection', (socket) => {
  socket.on('chat', (msg) => {
    io.emit('chat', msg);
  });

  socket.on('msg', (msg) => {
    const [username, position] = msg.split(':');
    socket.username = username;

    console.log('orderOfPlayers', orderOfPlayers);
    if (!orderOfPlayers.length) {
      io.emit('msg', `host:${username}`);
    }

    if (!orderOfPlayers.includes(username)) {
      console.log(
        `New player - ${username}${
          !orderOfPlayers.length ? ' - also host' : ''
        }`,
      );
      orderOfPlayers.push(username);
    } else {
      if (!currentEvent && currentEvent !== 0) {
        currentPlayer = (currentPlayer + 1) % orderOfPlayers.length;
      }

      let diceValue = parseInt(position) - players[username];
      if (diceValue < 0) {
        if (diceValue < -6) diceValue = -diceValue;
        else diceValue += level.length;
      }

      setTimeout(
        () => {
          if (!currentEvent && currentEvent !== 0) {
            currentEvent = 0;
            const scenarioIndex = scenarios.findIndex(({ step }) =>
              step.includes(parseInt(position)),
            );
            if (scenarioIndex >= 0) {
              currentEvent = scenarioIndex;
              io.emit(
                'msg',
                `event:${JSON.stringify(scenarios[currentEvent])}`,
              );
            } else {
              io.emit('msg', `event:${JSON.stringify(events[currentEvent])}`);
            }
          } else {
            currentEvent = null;
            io.emit('msg', `nextplayer:${orderOfPlayers[currentPlayer]}`);
            console.log(`Next player - ${orderOfPlayers[currentPlayer]}`);
          }
        },
        diceValue > 6 ? 1 : diceValue * 500,
      );
    }
    players[username] = parseInt(position);
    io.emit('msg', msg);
  });

  socket.on('msg2', (msg) => {
    const [username, position] = msg.split(':');
    socket.username = username;

    if (!currentEvent && currentEvent !== 0) {
      currentPlayer = (currentPlayer + 1) % orderOfPlayers.length;
    }

    let diceValue = players[username] - parseInt(position);
    if (diceValue < 0) {
      if (diceValue < -6) diceValue = -diceValue;
      else diceValue += level.length;
    }

    setTimeout(
      () => {
        if (!currentEvent && currentEvent !== 0) {
          currentEvent = 0;
          const scenarioIndex = scenarios.findIndex(({ step }) =>
            step.includes(parseInt(position)),
          );
          if (scenarioIndex >= 0) {
            currentEvent = scenarioIndex;
            io.emit(
              'msg',
              `event:${JSON.stringify(scenarios[currentEvent])}`,
            );
          } else {
            io.emit('msg', `event:${JSON.stringify(events[currentEvent])}`);
          }
        } else {
          currentEvent = null;
          io.emit('msg', `nextplayer:${orderOfPlayers[currentPlayer]}`);
          console.log(`Next player - ${orderOfPlayers[currentPlayer]}`);
        }
      },
      diceValue > 6 ? 1 : diceValue * 500,
    );
    
    players[username] = parseInt(position);
    io.emit('msg2', msg);
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
