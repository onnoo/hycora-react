import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../withStyles';

class Modal extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper)}>
          <div {...css(styles.container)}>{children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default withStyles(({ color }) => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  wrapper: {
    verticalAlign: 'middle',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30vh auto',
    padding: '20px',
    backgroundColor: color.white,
    width: 400,
  },
}))(Modal);
