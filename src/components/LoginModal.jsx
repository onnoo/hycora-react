import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import CardTitle from './CardTitle';
import CardButton from './CardButton';
import Spacing from './Spacing';

export const { Provider, Consumer } = React.createContext({});

class LoginModal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }
  handleOpen() {
    this.setState({ showModal: true });
  }
  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    const { children } = this.props;
    const { showModal } = this.state;

    return (
      <Provider
        value={{ openModal: this.handleOpen, closeModal: this.handleClose }}
      >
        {children}
        {showModal && (
          <Modal>
            <CardTitle>좌석반납</CardTitle>
            <CardButton label="로그인" primary />
            <Spacing p="5px 0"></Spacing>
            <CardButton label="닫기" secondary onClick={this.handleClose} />
          </Modal>
        )}
      </Provider>
    );
  }
}

LoginModal.propTypes = {
  children: PropTypes.node,
};

export default LoginModal;
