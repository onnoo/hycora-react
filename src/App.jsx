import React, { Component } from 'react';
import Nav from './components/Nav';
import SeatList from './components/SeatList';
import Footer from './components/Footer';
import Background from './components/Background';

class App extends Component {
  render() {
    return (
      <Background>
        <Nav />
        <SeatList />
        <Footer>HANYANG COMPUTER RESEARCH ASSOCIATION</Footer>
      </Background>
    );
  }
}

export default App;
