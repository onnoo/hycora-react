import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from '../withStyles';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// 함수형 컴포넌트
const Test1 = () => <div>Hello world!</div>;

// 클래스형 컴포넌트
class Test2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState(() => ({ text: e.target.value }));
  }
  handleClick(e) {
    const { onChange } = this.props;
    if (onChange) {
      onChange(this.state.text, 'some value');
    }
  }
  render() {
    return (
      <div>
        <input type="text" name="inputTest" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Don't Push Me</button>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

Test2.propTypes = {
  onChange: PropTypes.func,
};

storiesOf('Test', module)
  .addWithJSX('함수형 컴포넌트', () => <Test1 />)
  .addWithJSX('클래스형 컴포넌트', () => (
    <Test2 onChange={action('액션 발생')} />
  ));
