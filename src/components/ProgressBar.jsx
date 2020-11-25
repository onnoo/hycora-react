import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class ProgressBar extends PureComponent {
  render() {
    const { progress, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.progress, { width: `${progress}%` })}></div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default withStyles(({ color }) => ({
  wrapper: {
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.40)',
    margin: 0,
    padding: 0,
    borderRadius: '8px',
    height: '11px',
  },
  progress: {
    backgroundColor: color.primaryLight,
    height: '12px',
  },
}))(ProgressBar);
