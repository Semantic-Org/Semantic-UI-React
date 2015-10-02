import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import numberToWord from 'utils/numberToWord';

class Field extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    inline: PropTypes.bool,
    label: PropTypes.string,
    large: PropTypes.bool,
    required: PropTypes.bool,
    small: PropTypes.bool,
    width: PropTypes.number,
  };

  render() {
    let classes = classNames(
      'sd-field',
      this.props.large && 'large',
      this.props.small && 'small',
      this.props.inline && 'inline',
      this.props.disabled && 'disabled',
      this.props.required && 'required',
      this.props.width && numberToWord(this.props.width) + ' wide',
      'field',
      this.props.error && 'error'
    );
    return (
      <div className={classes}>
        {this.props.label && <label>{this.props.label}</label>}
        {this.props.children}
      </div>
    );
  }
}

export default Field;
