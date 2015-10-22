import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class TableHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const classes = classNames(
      'sd-table-header',
      this.props.className
    );
    return (
      <th {...this.props} className={classes}>
        {this.props.children}
      </th>
    );
  }
}
