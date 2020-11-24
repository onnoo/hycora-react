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
    backgroundColor: color.white,
    border: '1px solid rgba(0, 0, 0, 0.10)',
    borderRadius: '8px',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.20)',
    padding: '20px',
  },
}))(Card);
