import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class Items extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-items',
      'ui',
      this.props.className,
      'items',
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
