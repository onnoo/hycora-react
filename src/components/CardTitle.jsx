import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from 'react-with-styles';

class CardTitle extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <div {...css(styles.wrapper)}>{children}</div>;
  }
}

CardTitle.propTypes = {
  children: PropTypes.node,
};

export default withStyles(({ color }) => ({
  wrapper: {
    color: color.default,
    fontSize: '30pt',
    textAlign: 'center',
    padding: '12px 0 24px 0',
  },
}))(CardTitle);
