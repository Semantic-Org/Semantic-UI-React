import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Button extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    basic: PropTypes.bool,
    children: PropTypes.string,
    color: PropTypes.string,
    emphasis: PropTypes.string,
    fluid: PropTypes.bool,
    inverted: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    type: React.PropTypes.oneOf(['button', 'submit', 'reset']),
  };

  static defaultProps = {
    type: 'button',
    children: 'Click Here',
  };

  render() {
    let classes = classNames('sd-button', 'ui', 'button', this.props.color, this.props);
    return (
      <button className={classes} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
