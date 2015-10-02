import React, {Component, PropTypes} from 'react';

class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    type: React.PropTypes.oneOf(['button', 'submit']),
  };

  static defaultProps = {
    type: 'button',
    children: 'Click Here',
  };

  render() {
    return (
      <button className='sd-button ui blue button' {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
