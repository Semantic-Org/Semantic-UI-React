import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

export default class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    let classes = classNames(
      'sd-table-cell',
      this.props.className,
    );
    return (
      <td {...this.props} className={classes}>
        {this.props.children}
      </td>
    );
  }
}
