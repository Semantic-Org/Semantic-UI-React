import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import META from '../../utils/Meta';

export default class Progress extends Component {
  static propTypes = {
    autoSuccess: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    error: PropTypes.bool,
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

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  static _meta = {
    library: META.library.stardust,
    name: 'Progress',
    type: META.type.module,
  };

  plugin() {
    return this.element.progress(...arguments);
  }

  update() {
    this.element = $(this.refs.element);
    this.element.progress({
      autoSuccess: this.props.autoSuccess,
      label: this.props.label,
      limitValues: this.props.limitValues,
      onActive: this.props.onActive,
      onChange: this.props.onChange,
      onError: this.props.onError,
      error: this.props.error,
      onSuccess: this.props.onSuccess,
      onWarning: this.props.onWarning,
      percent: this.props.percent,
      precision: this.props.precision,
      random: this.props.random,
      showActivity: this.props.showActivity,
      total: this.props.total,
      value: this.props.value,
    });
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
      <div {...this.props} className={classes} ref='element'>
        <div className='bar error'>
          <div className='progress error'/>
        </div>
        {this.props.children && labelText}
      </div>
    );
  }
}
