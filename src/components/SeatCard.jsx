import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import CardTitle from './CardTitle';
import ProgressBar from './ProgressBar';
import Badge from './Badge';
import InlineList from './InlineList';
import CardButton from './CardButton';
import Spacing from './Spacing';

class SeatCard extends PureComponent {
  render() {
    const { title, totalSeat, currentSeat } = this.props;
    const leftSeat = totalSeat - currentSeat;
    const progress = totalSeat > 0 ? (currentSeat / totalSeat) * 100 : '0';
    return (
      <Card>
        <CardTitle>{title}</CardTitle>
        <ProgressBar progress={progress} />
        <Spacing p="12px 4px 12px 4px">
          <InlineList>
            <Badge value={currentSeat} secondary />
            <Badge value={totalSeat} />
            <Badge value={leftSeat} primary />
          </InlineList>
        </Spacing>
        <InlineList>
          <CardButton label="입실" primary />
          <CardButton label="퇴실" secondary />
        </InlineList>
      </Card>
    );
  }
}

SeatCard.propTypes = {
  title: PropTypes.string,
  totalSeat: PropTypes.number,
  currentSeat: PropTypes.number,
};

export default SeatCard;
