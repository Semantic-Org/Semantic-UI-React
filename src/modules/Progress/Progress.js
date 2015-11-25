import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
export default class Progress extends Component {
  static propTypes = {
    autoSuccess: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.string,
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
    });
  }

  render() {
    const color = this.props.percent < 100 ? this.props.color : 'success'
    const classes = classNames(
      'sd-progress',
      'ui',
      'progress',
      color,
      this.props.className
    );
    return (
      <div className={classes} {...this.props}>
        <div className='bar' style={{width: `${this.props.percent.toString()}%`}}>
          <div className='progress' />
        </div>
        {this.props.children}
      </div>
    );
  }
}
