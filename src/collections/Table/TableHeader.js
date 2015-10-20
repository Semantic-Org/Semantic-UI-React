import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class TableHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'TableHeader',
    type: META.type.collection,
    parent: 'Table',
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
