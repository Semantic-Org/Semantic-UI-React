import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class TableRow extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'TableRow',
    type: META.type.collection,
    parent: 'Table',
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
