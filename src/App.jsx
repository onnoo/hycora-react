import React, { Component } from 'react';
import Nav from './components/Nav';
import SeatList from './components/SeatList';
import Footer from './components/Footer';
import Background from './components/Background';
import LoginModal from './components/LoginModal';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initState = {
  seats: [
    {
      id: 1,
      title: '제 1 열람실',
      totalSeat: 80,
      currentSeat: 11,
    },
    {
      id: 2,
      title: '제 2 열람실',
      totalSeat: 92,
      currentSeat: 0,
    },
    {
      id: 3,
      title: '제 3 열람실',
      totalSeat: 91,
      currentSeat: 2,
    },
    {
      id: 4,
      title: '제 4 열람실',
      totalSeat: 150,
      currentSeat: 1,
    },
    {
      id: 5,
      title: '아틀리에(미개방)',
      totalSeat: 0,
      currentSeat: 0,
    },
  ],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACC_SEAT': {
      const { target, acc } = payload;
      return {
        ...state,
        seats: state.seats.map(({ id, currentSeat, ...args }) => ({
          id,
          ...args,
          currentSeat: id === target ? currentSeat + acc : currentSeat,
        })),
      };
    }
    default:
      return state;
  }
};

class App extends Component {
  store = createStore(reducer, initState, composeWithDevTools());

  render() {
    return (
      <Provider store={this.store}>
        <LoginModal>
          <Background>
            <Nav />
            <SeatList />
            <Footer>HANYANG COMPUTER RESEARCH ASSOCIATION</Footer>
          </Background>
        </LoginModal>
      </Provider>
    );
  }
}

export default App;
