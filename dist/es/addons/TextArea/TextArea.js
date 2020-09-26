import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import _get from "lodash/get";
import { Ref } from '@fluentui/react-component-ref';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { getElementType, getUnhandledProps } from '../../lib';
/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */

var TextArea = /*#__PURE__*/function (_Component) {
  _inheritsLoose(TextArea, _Component);

  function TextArea() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.ref = /*#__PURE__*/createRef();

    _this.focus = function () {
      return _this.ref.current.focus();
    };

    _this.handleChange = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, {
        value: value
      }));
    };

    _this.handleInput = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onInput', e, _extends({}, _this.props, {
        value: value
      }));
    };

    return _this;
  }

  var _proto = TextArea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        rows = _this$props.rows,
        value = _this$props.value;
    var rest = getUnhandledProps(TextArea, this.props);
    var ElementType = getElementType(TextArea, this.props);
    return /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      onChange: this.handleChange,
      onInput: this.handleInput,
      rows: rows,
      value: value
    })));
  };

  return TextArea;
}(Component);

TextArea.handledProps = ["as", "onChange", "onInput", "rows", "value"];
TextArea.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: PropTypes.func,

  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: PropTypes.func,

  /** Indicates row count for a TextArea. */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The value of the textarea. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
TextArea.defaultProps = {
  as: 'textarea',
  rows: 3
};
export default TextArea;