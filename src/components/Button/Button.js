import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

/**
 * A basic button.
<<<<<<< HEAD
=======
 * @example
 * <Button />
>>>>>>> WIP, finally figure out example component functionality
 */
class Button extends Component {
  static propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    children: 'Click Here',
    type: 'button'
  };

  render() {
    let classes = classNames(
      'sd-button',
      'ui',
      this.props.className,
      'button'
    );
    return (
      <button {...this.props} className={classes}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
