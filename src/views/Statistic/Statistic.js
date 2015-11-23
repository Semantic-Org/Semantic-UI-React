import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import META from 'src/utils/Meta';

export default class Statistic extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.node,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistics',
    type: META.type.view,
  };

  render() {
    const classes = classNames(
      'ui',
      this.props.className,
      'statistic',
    );

    const props = getUnhandledProps(this);

    return (
      <div {...props} className={classes}>
        <div className='value'>
          {this.props.value}
        </div>
        <div className='label'>
          {this.props.label}
        </div>
      </div>
    );
  }
}
