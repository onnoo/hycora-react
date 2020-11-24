import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, withStyles } from '../withStyles';

class ImageButton extends PureComponent {
  render() {
    const { src, label, onClick, styles } = this.props;
    return (
      <button {...css(styles.wrapper)} onClick={onClick}>
        <img {...css(styles.img)} src={src} alt={label} />
        <div {...css(styles.label)}>{label}</div>
      </button>
    );
  }
}

ImageButton.propTypes = {
  src: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default withStyles(({ color, fontFamily }) => ({
  wrapper: {
    width: '100%',
    border: 'None',
    margin: '0px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: color.primary,
    ':focus': {
      outline: 'None',
    },
    minWidth: '160px',
  },
  label: {
    margin: '10px',
    fontSize: '20px',
    color: color.white,
    wordBreak: 'keep-all',
    wordWrap: 'normal',
    fontFamily: fontFamily.notoSans,
  },
  img: {
    height: '50px',
    width: 'auto',
  },
}))(ImageButton);
