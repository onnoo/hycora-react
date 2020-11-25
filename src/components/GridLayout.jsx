import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class GridLayout extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return <div {...css(styles.wrapper)}>{children}</div>;
  }
}

GridLayout.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  wrapper: {
    padding: '30px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
}))(GridLayout);
