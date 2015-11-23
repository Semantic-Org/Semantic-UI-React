import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

export default class Statistics extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistics',
    type: META.type.view,
    parent: 'Statistic'
  };

  render() {
    const classes = classNames(
      'sd-buttons',
      'ui',
      this.props.className,
      'buttons'
    );
    return (
      <div {...this.props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
