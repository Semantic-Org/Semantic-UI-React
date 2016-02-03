import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import META from '../../utils/Meta';
import _ from 'lodash';

export default class Progress extends Component {
  static propTypes = {
    autoSuccess: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
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
    this.element = $(this.refs.element);
    this.element.progress({
      autoSuccess: this.props.autoSuccess,
      label: this.props.label,
      limitValues: this.props.limitValues,
      onActive: this.props.onActive,
      onChange: this.props.onChange,
      onError: this.props.onError,
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

  static _meta = {
    library: META.library.stardust,
    name: 'Progress',
    type: META.type.module,
  };

  plugin() {
    return this.element.progress(...arguments);
  }

  renderAttachedBar = () => {
    return (
      <div className='bar' />
    );
  };

  renderStandardBar = () => {
    const label = (
      <div className='label'>
        {this.props.children}
      </div>
    );

    return (
      <div>
        <div className='bar' style={{width: `${this.props.percent}%`}}>
          <div className='progress'/>
        </div>
        {this.props.children && label}
      </div>
    );
  };

  render() {
    const classes = classNames(
      'sd-progress',
      'ui',
      this.props.className,
      'progress',
    );

    const isAttached = _.contains(this.props.className, 'attached');
    return (
      <div {...this.props} className={classes}>
        {isAttached ? this.renderAttachedBar() : this.renderStandardBar()}
      </div>
    );
  }
}
