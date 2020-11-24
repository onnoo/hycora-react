import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class Spacing extends PureComponent {
  render() {
    const { p, children } = this.props;
    return (
      <div
        {...css({
          padding: p,
        })}
      >
        {children}
      </div>
    );
  }
}

Spacing.propTypes = {
  p: PropTypes.string,
};

export default withStyles(({}) => ({}))(Spacing);
