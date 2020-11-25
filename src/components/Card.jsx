import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from 'react-with-styles';

class Card extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <div {...css(styles.wrapper)}>{children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node,
};

export default withStyles(({ color }) => ({
  wrapper: {
    margin: '2vh 2vw',
    backgroundColor: color.white,
    border: '1px solid rgba(0, 0, 0, 0.20)',
    borderRadius: '8px',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.20)',
    padding: '20px',
  },
}))(Card);
