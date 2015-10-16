import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
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
