import React, {Component, PropTypes} from 'react';
import radium from 'radium';
import classNames from 'classnames';
import $ from 'jquery';

/**
 * A versatile checkbox with many styles.
 *
 * @example
 * // Regular checkbox
 * <Checkbox />
 *
 * @example
 * // Slider style checkbox
 * <Checkbox type='slider' />
 *
 * @example
 * // Toggle switch style checkbox
 * <Checkbox type='toggle' />
 */
@radium
export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.array,
    type: PropTypes.string,
  };

  static defaultProps = {
    name: 'checkbox',
    type: 'checkbox',
  };

  componentDidMount() {
    this.container = $(React.findDOMNode(this.refs.container));
    this.checkbox = $(React.findDOMNode(this.refs.checkbox));

    this.container.checkbox({
      onChange: () => {
        this.props.onChange(this.checkbox.is(':checked'));
      }
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
      {fitted: !this.props.label},
      'checkbox'
    );
    return (
      <div className={classes} ref='container'>
        <input {...this.props} ref='checkbox' />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
