import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';
import META from '../../utils/Meta';
import _ from 'lodash';

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

const getPluginProps = (props, pluginPropsTypes) => {
  return _.pick(props, _.keys(pluginPropTypes));
};
const getComponentProps = (props, pluginPropsTypes) => {
  return _.omit(props, _.keys(pluginPropTypes));
};

export default class Progress extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    ...pluginPropTypes,
  };

  componentDidMount() {
    this.refresh();
  }

  shouldComponentUpdate(nextProps) {
    // only re-render if non-plugin settings changed
    return !_.isEqual(getComponentProps(this.props, pluginPropTypes), getComponentProps(nextProps, pluginPropTypes));
  }

  componentDidUpdate(prevProps) {
    // only refresh plugin if plugin settings changed
    return !_.isEqual(getPluginProps(this.props, pluginPropTypes), getPluginProps(prevProps, pluginPropTypes));
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
    console.log('updating progress');
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
          <div className='progress'/>
        </div>
        {this.props.children && labelText}
      </div>
    );
  }
}
