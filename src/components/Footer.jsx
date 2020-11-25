import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class Footer extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return <div {...css(styles.wrapper)}>{children}</div>;
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};

export default withStyles(({ color, fontFamily }) => ({
  wrapper: {
    fontFamily: fontFamily.firaSans,
    color: color.primary,
    fontSize: '20pt',
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    textAlign: 'center',
    padding: '16px 0px',
  },
}))(Footer);
