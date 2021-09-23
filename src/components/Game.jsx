import React from 'react';
import styled from 'styled-components';
import '../socket.io.min.js';
import Dice from 'react-dice-roll';

import { people } from './LoginComponent/GalleryComponent/Gallery.jsx';
import { Popup } from '../components/Popup/Popup';

import level_img from '../levels/floor-13.png';
import level from '../levels/f13.json';

import { Sidebar } from './Sidebar/Sidebar';
import './MainScreen/MainScreen.css';

const getPointColorForType = ({ type }) => {
  switch (type) {
    case 'start':
      return 'darkgoldenrod';
    case 'wc':
      return 'slategray';
    case 'call':
      return 'mediumturquoise';
    case 'moroa':
      return 'burlywood';
    case 'food':
      return 'maroon';
    case 'kava':
      return 'indianred';
    case 'pm':
      return 'skyblue';
    case 'op':
      return 'royalblue';
    default:
      return 'black';
  }
};

const Point = styled.div`
  position: absolute;
  top: ${({ y }) => (y || 0) - 12}px;
  left: ${({ x }) => (x || 0) - 12}px;
  width: 24px;
  height: 24px;
  background-color: ${getPointColorForType};
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 24px;
`;

const Map = styled.div`
  position: absolute;
  top: ${({ y }) => y || 0}px;
  left: ${({ x }) => x || 0}px;
  background: url(${level_img});
  width: 821px;
  height: 752px;
`;

const Player = styled.div`
  position: absolute;
  top: ${({ y }) => (y || 0) - 16}px;
  left: ${({ x }) => (x || 0) - 16}px;
  width: 32px;
  height: 32px;
  background-color: white;
  border: solid 4px ${({ other }) => (other ? 'gray' : 'black')};
  transition: all 0.5s;
  background: url(${({ photo }) => photo});
  background-size: contain;
`;

class Game extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      myTurn: false,
      pos: 0,
      others: {},
      currentEvent: null,
      moving: false,
      gameMessages: [{ text: 'Hello players!!!' }],
      names: {},
    };
  }

  componentDidMount() {
    const { username, name } = this.props;
    const { names } = this.state;

    console.log(username);

    this.socket = io('http://10.1.130.95:3000', {
      transports: ['websocket', 'polling'],
    });

    this.socket.emit('msg', `${username.replace(/:/g, '')}:${0}:${name}`);

    this.socket.on('msg', (msg) => {
      console.log(msg);

      if (msg.startsWith('event:')) {
        this.setState({ currentEvent: JSON.parse(msg.substring(6)) });
      } else if (msg.startsWith('host:')) {
        if (msg.substring(5) === username) {
          this.setState({ myTurn: true });
        }
      } else if (msg.startsWith('nextplayer:')) {
        this.setState({ currentEvent: null });

        if (msg.substring(11) === username) {
          this.setState({ myTurn: true });
        } else {
          this.socket.emit('chat', {
            text: `It's ${msg.substring(11)}'s turn`,
          });
        }
      } else if (msg.includes(':')) {
        const { others } = this.state;
        const [playername, posString, name] = msg.split(':');
        names[username] = name;
        this.setState({ names });

        const isNewUser = !Object.keys(others).includes(playername);

        const oldPos = others[playername] || 0;
        const position = parseInt(posString);

        let diceValue = position - oldPos;
        if (diceValue < 0) {
          if (diceValue < -6) diceValue = -diceValue;
          else diceValue += level.length;
        }

        if (!diceValue) {
        } else if (isNewUser || diceValue > 6) {
          this.setState({
            others: { ...this.state.others, [playername]: position },
          });
        } else {
          const goByOne = (i) => {
            this.setState({
              others: { ...this.state.others, [playername]: oldPos + i },
            });
            if (i < diceValue) setTimeout(() => goByOne(i + 1), 500);
          };
          goByOne(1);
        }
      }
    });

    this.socket.on('msg2', (msg) => {
      const { others } = this.state;
      const [playername, posString, name] = msg.split(':');
      this.setState({ names: { ...this.state.names, [username]: name } });

      const oldPos = others[playername];
      const position = parseInt(posString);

      let diceValue = position - oldPos;
      if (diceValue < 0) {
        if (diceValue < -6) diceValue = -diceValue;
        else diceValue += level.length;
      }

      if (!diceValue) {
      } else if (diceValue > 6) {
        this.setState({
          others: { ...this.state.others, [playername]: position },
        });
      } else {
        const goByOne = (i) => {
          this.setState({
            others: { ...this.state.others, [playername]: oldPos - i },
          });
          if (i < diceValue) setTimeout(() => goByOne(i + 1), 500);
        };
        goByOne(1);
      }
    });

    this.socket.on('chat', (msg) => {
      this.setState((prevState) => ({
        gameMessages: [...prevState.gameMessages, msg],
      }));
    });
  }

  roll = async (value) => {
    const { username, name } = this.props;
    const { pos } = this.state;
    const npos = (pos + value) % level.length;

    this.socket.emit('msg', `${username.replace(/:/g, '')}:${npos}:${name}`);
    this.socket.emit('chat', {
      text: `${username.replace(/:/g, '')} moved to position ${npos}!`,
    });

    if (!value) {
      this.setState({ moving: false });
      return;
    }

    if (value > 6) {
      this.setState({ pos: npos });
    } else {
      this.setState({ moving: true });
      const goByOne = (i) => {
        this.setState({ pos: (pos + i) % level.length });
        if (i < value) setTimeout(() => goByOne(i + 1), 500);
        else this.setState({ moving: false });
      };
      goByOne(1);
    }
  };

  rollback = async (value) => {
    const { username } = this.props;
    const { pos } = this.state;
    const npos = (pos + value) % level.length;
    this.socket.emit('msg2', `${username.replace(/:/g, '')}:${npos}`);
    this.socket.emit('chat', {
      text: `${this.username.replace(
        /:/g,
        '',
      )} was forced to move back to position ${npos}!`,
    });
    if (!value) {
      this.setState({ moving: false });
      return;
    }

    if (value > 6) {
      this.setState({ pos: npos });
    } else {
      this.setState({ moving: true });
      const goByOne = (i) => {
        this.setState({ pos: (pos - i) % level.length });
        if (i < value) setTimeout(() => goByOne(i + 1), 500);
        else this.setState({ moving: false });
      };
      goByOne(1);
    }
  };

  render() {
    const { username, name } = this.props;
    const { pos, others, currentEvent, myTurn, gameMessages, names } = this.state;
    return (
      <div className="layout">
        <div
          style={{
            position: 'fixed',
            left: '100px',
            zIndex: 9999,
            opacity: myTurn && !currentEvent ? 1 : 0.7,
          }}
        >
          <Dice
            disabled={!(myTurn && !currentEvent)}
            onRoll={this.roll}
            rollingTime={500}
            size={160}
          />
        </div>
        <div
          style={{
            ...(!myTurn ? { pointerEvents: 'none' } : {}),
            marginRight: '40px',
            position: 'relative',
            width: '900px',
          }}
        >
          <Map y={-100}>
            {level.map(([x, y, type], i) => (
              <Point x={x} y={y} type={type} key={`${x},${y}`}>
                {i}
              </Point>
            ))}
            {Object.entries(others)
              .filter(([playername]) => playername !== username)
              .map(([playername, position]) => (
                <Player
                  key={playername}
                  x={level[position][0]}
                  y={level[position][1]}
                  photo={people[names[playername]]?.replace(/ /g, '%20')}
                />
              ))}
            <Player
              x={level[pos][0]}
              y={level[pos][1]}
              photo={people[name].replace(/ /g, '%20')}
            />
          </Map>

          {currentEvent ? (
            <div style={{ opacity: myTurn ? 1 : 0.5 }}>
              <Popup
                title={currentEvent.title}
                confirmText={currentEvent.confirm}
                cancelText={currentEvent.cancel}
                description={currentEvent.description}
                onConfirm={() => {
                  this.setState({ myTurn: false });
                  if (currentEvent.confirmAction < 0) {
                    this.rollback(-currentEvent.confirmAction);
                  } else {
                    this.roll(currentEvent.confirmAction);
                  }
                }}
                onCancel={() => {
                  this.setState({ myTurn: false });
                  if (currentEvent.cancelAction < 0) {
                    this.rollback(-currentEvent.cancelAction);
                  } else {
                    this.roll(currentEvent.cancelAction);
                  }
                }}
              />
            </div>
          ) : null}
        </div>
        <Sidebar
          gameMessages={gameMessages}
          players={Object.keys(others).length}
        />
      </div>
    );
  }
}

export default Game;
