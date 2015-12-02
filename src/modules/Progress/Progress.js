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
      onActive: this.props.onActive,
      onChange: this.props.onChange,
      onError: this.props.onError,
      onSuccess: this.props.onSuccess,
      onWarning: this.props.onWarning,
      percent: this.props.percent,
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

  render() {
    const classes = classNames(
      'sd-progress',
      'ui',
      this.props.className,
      'progress',
    );

    return (
      <div {...this.props} className={classes}>
        <div className='bar'>
          <div className='progress'/>
        </div>
        {this.props.children}
      </div>
    );
  }
}
