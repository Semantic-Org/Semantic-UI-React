import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import META from 'src/utils/Meta';

export default class Value extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Value',
    type: META.type.view,
    parent: 'Statistic',
  };

  render() {
    const classes = classNames(
      'sd-statistic-value',
      this.props.className,
      'value',
    );

    const props = getUnhandledProps(this);

    return (
      <div {...props} className={classes}>
        {this.props.children}
      </div>
    );
  }
}
