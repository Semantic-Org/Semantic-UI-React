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
class Checkbox extends Component {
  static propTypes = {
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.array,
    type: PropTypes.string,
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
    let name = this.props.name || 'checkbox';
    let hasLabel = !!this.props.label;
    let classes = classNames('sd-checkbox', 'ui', {fitted: !hasLabel}, this.props.type, 'checkbox');
    return (
      <div className={classes} style={this.props.style} ref='container'>
        <input defaultChecked={this.props.defaultChecked} type='checkbox' name={name} ref='checkbox' />
        <label>{this.props.label}</label>
      </div>
    );
  }
}

export default Checkbox;
