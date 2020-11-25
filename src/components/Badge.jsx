import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class Badge extends PureComponent {
  render() {
    const { primary, secondary, value, styles } = this.props;
    return (
      <div
        {...css(
          styles.default,
          primary && styles.primary,
          secondary && styles.secondary,
        )}
      >
        {value}
      </div>
    );
  }
}

Badge.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  value: PropTypes.number,
};

export default withStyles(({ color }) => ({
  default: {
    color: color.default,
    padding: '0px 16px',
    borderRadius: '16px',
    fontSize: '12pt',
  },
  primary: {
    backgroundColor: color.primaryLight,
    color: color.white,
  },
  secondary: {
    backgroundColor: color.gray,
  },
}))(Badge);
