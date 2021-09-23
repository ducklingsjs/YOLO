import React from 'react';
import styled from 'styled-components';
import '../socket.io.min.js';

import level_img from '../levels/floor-13.png';
import level from '../levels/f13.json';

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
    };
  }
  componentDidMount() {
    this.username = prompt('Username?');

    window.roll = this.roll;

    this.socket = io('http://localhost:3000', {
      transports: ['websocket', 'polling'],
    });

    this.socket.emit(`user:${this.user}`);

    this.socket.on('msg', (msg) => {
      console.log(msg);

      if (msg.startsWith('host:')) {
        if (msg.substring(5) === this.username) {
          this.setState({ myTurn: true });
        }
      } else if (msg.startsWith('nextplayer:')) {
        if (msg.substring(5) === this.username) {
          this.setState({ myTurn: true });
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
  }

  roll = async (value) => {
    const { pos } = this.state;
    const npos = (pos + value) % level.length;
    this.setState({ myTurn: false });
    this.socket.emit('msg', `${this.username.replace(/:/g, '')}:${npos}`);

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
    const { pos, others } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

export default Game;
