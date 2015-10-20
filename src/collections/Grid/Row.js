import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';
import META from 'src/utils/Meta';

export default class Row extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Row',
    type: META.type.collection,
    parent: 'Grid',
  };

  render() {
    const classes = classNames(
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
