import _ from 'lodash';
import classNames from 'classnames';
import React, {Children, Component, PropTypes} from 'react';
import getUnhandledProps from 'src/utils/getUnhandledProps';
import META from 'src/utils/Meta';

import Statistics from './Statistics';
import Label from './Label';
import Value from './Value';

export default class Statistic extends Component {
  static propTypes = {
    children: (props, propName, componentName) => {
      let isValid = true;
      Children.forEach(props.children, (child) => {
        if (!_.includes([Statistics, Label, Value], child.type)) {
          isValid = false;
        }
      });
      if (!isValid) {
        return new Error('`Statistic` must only have `Label` or `Value` children.');
      }
    },
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
