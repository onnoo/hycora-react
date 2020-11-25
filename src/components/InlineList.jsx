import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css } from 'react-with-styles';

class InlineList extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        {React.Children.map(children, (child, index) => (
          <div
            {...css(
              styles.item,
              index === 0 && styles.left,
              index === children.length - 1 && styles.right,
            )}
          >
            {child}
          </div>
        ))}
      </div>
    );
  }
}

InlineList.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
}))(InlineList);
