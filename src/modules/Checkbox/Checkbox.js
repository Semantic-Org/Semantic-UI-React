import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

/**
 * <a href='http://semantic-ui.com/modules/checkbox.html' target='_blank'>
 *   <i class='book icon'></i>
 *   Semantic UI Checkbox Docs
 * </a>
 * <div class="ui warning message">
 *   <div class="header">
 *     <h3 className='ui heading'><i class='loading magic icon'></i> Magic</h3>
 *   </div>
 *   If there is no <code class='ui label'>props.label</code> the
 *   <a href='http://semantic-ui.com/modules/checkbox.html#fitted' target='_blank'>fitted</a>
 *   class is automatically applied to remove the extra whitespace.
 * </div>
 */
export default class Checkbox extends Component {
  static propTypes = {
    beforeChecked: PropTypes.func,
    beforeDeterminate: PropTypes.func,
    beforeIndeterminate: PropTypes.func,
    beforeUnchecked: PropTypes.func,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    onChecked: PropTypes.func,
    onDeterminate: PropTypes.func,
    onDisable: PropTypes.func,
    onEnable: PropTypes.func,
    onIndeterminate: PropTypes.func,
    onUnchecked: PropTypes.func,
    type: PropTypes.string,
  };

  static defaultProps = {
    name: 'checkbox',
    type: 'checkbox',
  };

  componentDidMount() {
    this.container = $(React.findDOMNode(this.refs.container));
    this.input = $(React.findDOMNode(this.refs.input));

    this.container.checkbox({
      onChange: this.props.onChange,
      onChecked: this.props.onChecked,
      onIndeterminate: this.props.onIndeterminate,
      onDeterminate: this.props.onDeterminate,
      onUnchecked: this.props.onUnchecked,
      beforeChecked: this.props.beforeChecked,
      beforeIndeterminate: this.props.beforeIndeterminate,
      beforeDeterminate: this.props.beforeDeterminate,
      beforeUnchecked: this.props.beforeUnchecked,
      onEnable: this.props.onEnable,
      onDisable: this.props.onDisable,
    });
  }

  componentWillUnmount() {
    this.container.off();
  }

  render() {
    let classes = classNames(
      'sd-checkbox',
      'ui',
      this.props.className,
      // auto apply fitted class to compact white space when there is no label
      // http://semantic-ui.com/modules/checkbox.html#fitted
      {fitted: !this.props.label},
      'checkbox'
    );
    let checkboxProps = _.clone(this.props);
    delete checkboxProps.className;
    return (
      <div className={classes} ref='container'>
        <input {...checkboxProps} ref='checkbox' />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
