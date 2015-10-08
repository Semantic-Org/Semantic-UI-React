import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

export default class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-row',
      this.props.className,
      'row'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
