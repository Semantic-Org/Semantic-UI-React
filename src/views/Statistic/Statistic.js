import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

import getUnhandledProps from '../../utils/getUnhandledProps';
import customPropTypes from '../../utils/propUtils';
import META from '../../utils/Meta';

import Statistics from './Statistics';
import Label from './Label';
import Value from './Value';

export default class Statistic extends Component {
  static propTypes = {
    children: customPropTypes.ofComponentTypes(['Statistics', 'Label', 'Value']),
    className: PropTypes.string,
  };

  static _meta = {
    library: META.library.semanticUI,
    name: 'Statistic',
    type: META.type.view,
  };

  static Statistics = Statistics;
  static Label = Label;
  static Value = Value;

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
        {this.props.children}
      </div>
    );
  }
}
