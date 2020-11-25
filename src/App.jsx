import React, { Component } from 'react';
import Nav from './components/Nav';
import SeatList from './components/SeatList';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SeatList />
      </div>
    );
  }
}

export default App;
