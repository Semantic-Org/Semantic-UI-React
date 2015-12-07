import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import META from 'src/utils/Meta';

export default class Progress extends Component {
  static propTypes = {
    autoSuccess: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.string,
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
      children: this.props.children,
      className: this.props.className,
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

  renderAttachedBar() {
    return (
      <div className='bar' />
    );
  }

  renderStandardBar() {
    return (
      <div>
        <div className='bar'>
          <div className='progress'/>
        </div>
        <div className='label'>
          {this.props.children}
        </div>
      </div>
    );
  }

  render() {
    const classes = classNames(
      'sd-progress',
      'ui',
      this.props.className,
      'progress',
    );

    let content = ::this.renderStandardBar();

    if (this.props.className && this.props.className.indexOf('attached') !== -1) {
      content = ::this.renderAttachedBar();
    }

    return (
      <div {...this.props} className={classes}>
        {content}
      </div>
    );
  }
}
