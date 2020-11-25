import React, { Component } from 'react';
import Nav from './components/Nav';
import SeatList from './components/SeatList';
import Footer from './components/Footer';
import Background from './components/Background';
import LoginModal from './components/LoginModal';

class App extends Component {
  render() {
    return (
      <LoginModal>
        <Background>
          <Nav />
          <SeatList />
          <Footer>HANYANG COMPUTER RESEARCH ASSOCIATION</Footer>
        </Background>
      </LoginModal>
    );
  }
}

export default App;
