import $ from 'jquery';
import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

import META from '../../utils/Meta';
import {getPluginProps, getComponentProps} from '../../utils/propUtils';

const pluginPropTypes = {
  autoSuccess: PropTypes.bool,
  label: PropTypes.oneOf(['ratio', 'percent']),
  limitValues: PropTypes.bool,
  onActive: PropTypes.func,
  onChange: PropTypes.func,
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
  onWarning: PropTypes.func,
  percent: PropTypes.number,
  precision: PropTypes.number,
  random: PropTypes.bool,
  showActivity: PropTypes.bool,
  total: PropTypes.bool,
  value: PropTypes.bool,
};

export default class Progress extends Component {
  static propTypes = {
    ...pluginPropTypes,
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Display progress inside the bar.
     */
    showProgress: PropTypes.bool,
  };

  static defaultProps = {
    showActivity: false
  };

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate() {
    this.refresh();
  }

  static _meta = {
    library: META.library.stardust,
    name: 'Progress',
    type: META.type.module,
  };

  plugin() {
    return this.element.progress(...arguments);
  }

  refresh() {
    this.element = $(this.refs.element);
    this.element.progress(getPluginProps(this.props, pluginPropTypes));
  }

  render() {
    const classes = classNames(
      'sd-progress',
      'ui',
      this.props.className,
      'progress'
    );

    const labelText = (
      <div className='label'>
        {this.props.children}
      </div>
    );

    return (
      <div {...getComponentProps(this.props, pluginPropTypes)} className={classes} ref='element'>
        <div className='bar'>
          {this.props.showProgress && <div className='progress' />}
        </div>
        {this.props.children && labelText}
      </div>
    );
  }
}
