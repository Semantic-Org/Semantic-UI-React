import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class TableCell extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'TableCell',
    type: META.type.collection,
    parent: 'Table',
  };

  render() {
    const classes = classNames(
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
