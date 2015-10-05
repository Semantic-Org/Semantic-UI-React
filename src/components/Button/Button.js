import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    basic: PropTypes.bool,
    children: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    emphasis: PropTypes.string,
    fluid: PropTypes.bool,
    inverted: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
    type: React.PropTypes.oneOf(['button', 'submit', 'reset']),
  };

  static defaultProps = {
    type: 'button',
    children: 'Click Here',
  };

  render() {
    let classes = classNames(
      'sd-button',
      'ui',
      'button',
      this.props.color,
      this.props.size,
      {animated: this.props.animated},
      {basic: this.props.basic},
      {children: this.props.children},
      {disabled: this.props.disabled},
      {emphasis: this.props.emphasis},
      {fluid: this.props.fluid},
      {inverted: this.props.inverted},
      {loading: this.props.loading}
    );
    return (
      <button className={classes} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
