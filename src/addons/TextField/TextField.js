import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import META from 'src/utils/Meta';

import Field from 'src/collections/Form/Field';
import Input from 'src/elements/Input/Input';

export default class TextField extends Component {
  static propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.string,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onEnterKeyDown: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholderText: PropTypes.string,
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
    ]),
    type: PropTypes.string,
  };

  defaultProps = {
    ref: 'input',
  };

  handleInputBlur(e) {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  handleInputFocus(e) {
    const {disabled, onFocus} = this.props;
    if (disabled) return;
    this.setState({isFocused: true});
    if (onFocus) onFocus(e);
  }

  handleInputKeyDown(e) {
    const {onEnterKeyDown, onKeyDown} = this.props;
    if (e.keyCode === 13 && onEnterKeyDown) onEnterKeyDown(e);
    if (onKeyDown) onKeyDown(e);
  }

  static _meta = {
    library: META.library.stardust,
    name: 'TextField',
    type: META.type.addon,
  };

  render() {
    const {
      children,
      disabled,
      id,
      labelText,
      name,
      placeholderText,
      ref,
      type,
    } = this.props;

    const fieldClasses = classNames(
      'sd-text-field',
      'error' // TODO: Tie in with form validation
    );

    let inputElement;

    const inputProps = {
      disabled,
      id,
      name,
      onBlur: this.handleInputBlur,
      onFocus: this.handleInputFocus,
      onKeyDown: this.handleInputKeyDown,
      placeholder: placeholderText,
      ref,
      type,
    };

    if (children) {
      inputElement = React.cloneElment(children, {
        ...inputProps,
        ...children.props,
      });
    } else {
      inputElement = <Input {...inputProps} />;
    }

    return (
      <Field label={labelText} className={fieldClasses}>
        {inputElement}
      </Field>
    );
  }
}
