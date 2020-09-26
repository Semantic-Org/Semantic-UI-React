import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import _get from "lodash/get";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createShorthandFactory, getUnhandledProps } from '../../lib';
/**
 * A search item sub-component for Dropdown component.
 */

var DropdownSearchInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DropdownSearchInput, _Component);

  function DropdownSearchInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleChange = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, {
        value: value
      }));
    };

    return _this;
  }

  var _proto = DropdownSearchInput.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        autoComplete = _this$props.autoComplete,
        className = _this$props.className,
        tabIndex = _this$props.tabIndex,
        type = _this$props.type,
        value = _this$props.value;
    var classes = cx('search', className);
    var rest = getUnhandledProps(DropdownSearchInput, this.props);
    return /*#__PURE__*/React.createElement("input", _extends({}, rest, {
      "aria-autocomplete": "list",
      autoComplete: autoComplete,
      className: classes,
      onChange: this.handleChange,
      tabIndex: tabIndex,
      type: type,
      value: value
    }));
  };

  return DropdownSearchInput;
}(Component);

DropdownSearchInput.handledProps = ["as", "autoComplete", "className", "tabIndex", "type", "value"];
DropdownSearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An input can have the auto complete. */
  autoComplete: PropTypes.string,

  /** Additional classes. */
  className: PropTypes.string,

  /** An input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The HTML input type. */
  type: PropTypes.string,

  /** Stored value. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : {};
DropdownSearchInput.defaultProps = {
  autoComplete: 'off',
  type: 'text'
};
DropdownSearchInput.create = createShorthandFactory(DropdownSearchInput, function (type) {
  return {
    type: type
  };
});
export default DropdownSearchInput;