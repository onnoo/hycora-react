import React, { PureComponent } from 'react';

import SeatCard from './SeatCard';
import GridLayout from './GridLayout';

import { connect } from 'react-redux';

class SeatList extends PureComponent {
  render() {
    const { seats, accSeat } = this.props;
    return (
      <React.Fragment>
        <GridLayout>
          {seats.map((seat) => (
            <SeatCard
              key={seat['id']}
              accSeat={accSeat(seat['id'])}
              {...seat}
            />
          ))}
        </GridLayout>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    seats: state.seats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    accSeat: (target) => (acc) =>
      dispatch({
        type: 'ACC_SEAT',
        payload: {
          target,
          acc,
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);
