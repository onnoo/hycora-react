import React, { PureComponent } from 'react';

import SeatCard from './SeatCard';
import GridLayout from './GridLayout';

class SeatList extends PureComponent {
  render() {
    const seats = [
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
    ];

    return (
      <React.Fragment>
        <GridLayout>
          {seats.map((seat) => (
            <SeatCard key={seat['id']} {...seat} />
          ))}
        </GridLayout>
      </React.Fragment>
    );
  }
}

export default SeatList;
