import _ from 'lodash';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import $ from 'jquery';

export default class Checkbox extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
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
