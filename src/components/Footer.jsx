import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class Footer extends PureComponent {
  render() {
    const { styles, children } = this.props;
    return <div {...css(styles.wrapper)}>{children}</div>;
  }
}

Footer.propTypes = {};

export default withStyles(({ color, fontFamily }) => ({
  wrapper: {
    fontFamily: fontFamily.firaSans,
    color: color.primary,
    fontSize: '40pt',
  },
}))(Footer);
