import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

/**
 * A container that gives your content some side padding.
 *
 * @example
 * <Icon apple outline  />
 */

class Icon extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-container',
      this.props.className,
      this.props,
      'icon'
    );
    return (
      <i className={classes}>
        {this.props.children}
      </i>
    );
  }
}

export default Icon;
