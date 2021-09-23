import React from 'react';
import styled from 'styled-components';
import '../socket.io.min.js';
import Dice from 'react-dice-roll';

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
`;

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      myTurn: false,
      pos: 0,
      others: {},
      currentEvent: null,
      gameMessages: [{ text: 'Hello players!!!' }],
    };
  }
  componentDidMount() {
    this.username = prompt('Username?');

    this.socket = io('http://localhost:3000', {
      transports: ['websocket', 'polling'],
    });

    this.socket.emit('msg', `${this.username.replace(/:/g, '')}:${0}`);

    this.socket.on('msg', (msg) => {
      console.log(msg);

      if (msg.startsWith('event:')) {
        this.setState({ currentEvent: JSON.parse(msg.substring(6)) });
      } else if (msg.startsWith('host:')) {
        if (msg.substring(5) === this.username) {
          this.setState({ myTurn: true });
        }
      } else if (msg.startsWith('nextplayer:')) {
        this.setState({ currentEvent: null });

        if (msg.substring(11) === this.username) {
          this.setState({ myTurn: true });
        } else {
          this.socket.emit('chat', {
            text: `It's ${msg.substring(11)}'s turn`,
          });
        }
      } else if (msg.includes(':')) {
        const { others } = this.state;
        const [playername, posString] = msg.split(':');

        const isNewUser = !Object.keys(others).includes(playername);

        const oldPos = others[playername] || 0;
        const position = parseInt(posString);

        let diceValue = position - oldPos;
        if (diceValue < 0) {
          if (diceValue < -6) diceValue = -diceValue;
          else diceValue += level.length;
        }

        if (isNewUser || diceValue > 6) {
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

    this.socket.on('chat', (msg) => {
      this.setState((prevState) => ({
        gameMessages: [...prevState.gameMessages, msg],
      }));
    });
  }

  roll = async (value) => {
    const { pos } = this.state;
    const npos = (pos + value) % level.length;

    this.socket.emit('msg', `${this.username.replace(/:/g, '')}:${npos}`);
    this.socket.emit('chat', {
      text: `${this.username.replace(/:/g, '')} moved to position ${npos}!`,
    });

    if (value > 6) {
      this.setState({ pos: npos });
    } else {
      const goByOne = (i) => {
        this.setState({ pos: (pos + i) % level.length });
        if (i < value) setTimeout(() => goByOne(i + 1), 500);
      };
      goByOne(1);
    }
  };

  render() {
    const { pos, others, currentEvent, myTurn, gameMessages } = this.state;

    return (
      <div className="layout">
        <div
          style={{
            position: 'fixed',
            left: 0,
            zIndex: 9999,
            opacity: myTurn && !currentEvent ? 1 : 0.7,
          }}
        >
          <Dice
            disabled={!(myTurn && !currentEvent)}
            onRoll={this.roll}
            rollingTime={500}
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
            <Player x={level[pos][0]} y={level[pos][1]} />
            {Object.entries(others)
              .filter(([playername]) => playername !== this.username)
              .map(([playername, position]) => (
                <Player
                  key={playername}
                  x={level[position][0]}
                  y={level[position][1]}
                />
              ))}
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
                  this.roll(1);
                }}
                onCancel={() => {
                  this.setState({ myTurn: false });
                  this.roll(1);
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
