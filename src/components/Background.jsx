import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class Background extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <div {...css(styles.background)}>{children}</div>;
  }
}

Background.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  background: {
    backgroundImage: `url('/images/bg.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
  },
}))(Background);
