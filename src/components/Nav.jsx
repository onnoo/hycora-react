import React, { PureComponent } from 'react';
import ImageButton from './ImageButton';
import InlineList from './InlineList';
import Spacing from './Spacing';
import { withStyles, css } from 'react-with-styles';

import { Consumer as LoginModalConsumer } from './LoginModal';

class Nav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <Spacing p="16px 0 0 0">
          <InlineList>
            <LoginModalConsumer>
              {({ openModal }) => (
                <ImageButton
                  label="좌석반납"
                  src="/images/icon_exit.png"
                  onClick={openModal}
                />
              )}
            </LoginModalConsumer>
            <ImageButton label="좌석연장" src="/images/icon_update.png" />
            <ImageButton
              label="모바일 배정확정"
              src="/images/icon_mobile.png"
            />
          </InlineList>
        </Spacing>
      </div>
    );
  }
}

export default withStyles(({ color }) => ({
  wrapper: {
    backgroundColor: color.primary,
  },
}))(Nav);
