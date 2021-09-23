import React from 'react';
import styled from 'styled-components';

import f13_img from './levels/f13.jpg';
import f13 from './levels/f13.json';

const Point = styled.div`
  position: absolute;
  top: ${({ y }) => (y || 0) - 12}px;
  left: ${({ x }) => (x || 0) - 12}px;
  width: 24px;
  height: 24px;
  background-color: black;
  border-radius: 50%;
`;

const Map = styled.div`
  position: absolute;
  top: ${({ y }) => y || 0}px;
  left: ${({ x }) => x || 0}px;
  background: url(${f13_img});
  width: 821px;
  height: 752px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myTurn: false,
      pos: 0,
      others: {},
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Map>
          {f13.map(([x, y, type]) => (
            <Point x={x} y={y} />
          ))}
        </Map>
      </div>
    );
  }
}

export default App;
