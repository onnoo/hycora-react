import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class CardButton extends PureComponent {
  render() {
    const { label, onClick, styles, primary, secondary } = this.props;
    return (
      <button
        {...css(
          styles.default,
          primary && styles.primary,
          secondary && styles.secondary,
        )}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}

CardButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default withStyles(({ color, fontFamily }) => ({
  default: {
    color: color.default,
    border: 'None',
    borderRadius: '6px',
    padding: '20px',
    margin: '0 4px',
    width: '100%',
    fontSize: '24pt',
    cursor: 'pointer',
    ':focus': {
      outline: 'None',
    },
    fontFamily: fontFamily.firaSans,
  },
  primary: {
    backgroundColor: color.primary,
    color: color.white,
    ':hover': {
      backgroundColor: color.primaryDark,
    },
  },
  secondary: {
    backgroundColor: color.gray,
    ':hover': {
      backgroundColor: color.grayDark,
    },
  },
}))(CardButton);
