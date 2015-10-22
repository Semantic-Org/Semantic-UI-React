import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class TableRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const classes = classNames(
      'sd-table-row',
      this.props.className
    );
    return (
      <tr {...this.props} className={classes}>
        {this.props.children}
      </tr>
    );
  }
}
