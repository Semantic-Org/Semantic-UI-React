import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import META from 'src/utils/Meta';

export default class Statistic extends Component {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistic',
    type: META.type.view,
  };

  render() {
    const classes = classNames(
      'sd-statistic',
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
