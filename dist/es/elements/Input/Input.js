import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _includes from "lodash/includes";
import _map from "lodash/map";
import _invoke from "lodash/invoke";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import { handleRef } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Children, cloneElement, Component, createRef } from 'react';
import { childrenUtils, createHTMLInput, createShorthandFactory, customPropTypes, getElementType, getUnhandledProps, partitionHTMLProps, useKeyOnly, useValueAndKey } from '../../lib';
import Button from '../Button';
import Icon from '../Icon';
import Label from '../Label';
/**
 * An Input is a field used to elicit a response from a user.
 * @see Button
 * @see Form
 * @see Icon
 * @see Label
 */

var Input = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Input, _Component);

  function Input() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inputRef = /*#__PURE__*/createRef();

    _this.computeIcon = function () {
      var _this$props = _this.props,
          loading = _this$props.loading,
          icon = _this$props.icon;
      if (!_isNil(icon)) return icon;
      if (loading) return 'spinner';
    };

    _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      if (disabled) return -1;
    };

    _this.focus = function () {
      return _this.inputRef.current.focus();
    };

    _this.select = function () {
      return _this.inputRef.current.select();
    };

    _this.handleChange = function (e) {
      var value = _get(e, 'target.value');

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, {
        value: value
      }));
    };

    _this.handleChildOverrides = function (child, defaultProps) {
      return _extends({}, defaultProps, child.props, {
        ref: function ref(c) {
          handleRef(child.ref, c);
          _this.inputRef.current = c;
        }
      });
    };

    _this.partitionProps = function () {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          type = _this$props3.type;

      var tabIndex = _this.computeTabIndex();

      var unhandled = getUnhandledProps(Input, _this.props);

      var _partitionHTMLProps = partitionHTMLProps(unhandled),
          htmlInputProps = _partitionHTMLProps[0],
          rest = _partitionHTMLProps[1];

      return [_extends({}, htmlInputProps, {
        disabled: disabled,
        type: type,
        tabIndex: tabIndex,
        onChange: _this.handleChange,
        ref: _this.inputRef
      }), rest];
    };

    return _this;
  }

  var _proto = Input.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        action = _this$props4.action,
        actionPosition = _this$props4.actionPosition,
        children = _this$props4.children,
        className = _this$props4.className,
        disabled = _this$props4.disabled,
        error = _this$props4.error,
        fluid = _this$props4.fluid,
        focus = _this$props4.focus,
        icon = _this$props4.icon,
        iconPosition = _this$props4.iconPosition,
        input = _this$props4.input,
        inverted = _this$props4.inverted,
        label = _this$props4.label,
        labelPosition = _this$props4.labelPosition,
        loading = _this$props4.loading,
        size = _this$props4.size,
        transparent = _this$props4.transparent,
        type = _this$props4.type;
    var classes = cx('ui', size, useKeyOnly(disabled, 'disabled'), useKeyOnly(error, 'error'), useKeyOnly(fluid, 'fluid'), useKeyOnly(focus, 'focus'), useKeyOnly(inverted, 'inverted'), useKeyOnly(loading, 'loading'), useKeyOnly(transparent, 'transparent'), useValueAndKey(actionPosition, 'action') || useKeyOnly(action, 'action'), useValueAndKey(iconPosition, 'icon') || useKeyOnly(icon || loading, 'icon'), useValueAndKey(labelPosition, 'labeled') || useKeyOnly(label, 'labeled'), 'input', className);
    var ElementType = getElementType(Input, this.props);

    var _this$partitionProps = this.partitionProps(),
        htmlInputProps = _this$partitionProps[0],
        rest = _this$partitionProps[1]; // Render with children
    // ----------------------------------------


    if (!childrenUtils.isNil(children)) {
      // add htmlInputProps to the `<input />` child
      var childElements = _map(Children.toArray(children), function (child) {
        if (child.type !== 'input') return child;
        return /*#__PURE__*/cloneElement(child, _this2.handleChildOverrides(child, htmlInputProps));
      });

      return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes
      }), childElements);
    } // Render Shorthand
    // ----------------------------------------


    var actionElement = Button.create(action, {
      autoGenerateKey: false
    });
    var labelElement = Label.create(label, {
      defaultProps: {
        className: cx('label', // add 'left|right corner'
        _includes(labelPosition, 'corner') && labelPosition)
      },
      autoGenerateKey: false
    });
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes
    }), actionPosition === 'left' && actionElement, labelPosition !== 'right' && labelElement, createHTMLInput(input || type, {
      defaultProps: htmlInputProps,
      autoGenerateKey: false
    }), Icon.create(this.computeIcon(), {
      autoGenerateKey: false
    }), actionPosition !== 'left' && actionElement, labelPosition === 'right' && labelElement);
  };

  return Input;
}(Component);

Input.handledProps = ["action", "actionPosition", "as", "children", "className", "disabled", "error", "fluid", "focus", "icon", "iconPosition", "input", "inverted", "label", "labelPosition", "loading", "onChange", "size", "tabIndex", "transparent", "type"];
Input.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** An Input can be formatted to alert the user to an action they may perform. */
  action: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An action can appear along side an Input on the left or right. */
  actionPosition: PropTypes.oneOf(['left']),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** An Input field can show that it is disabled. */
  disabled: PropTypes.bool,

  /** An Input field can show the data contains errors. */
  error: PropTypes.bool,

  /** Take on the size of its container. */
  fluid: PropTypes.bool,

  /** An Input field can show a user is currently interacting with it. */
  focus: PropTypes.bool,

  /** Optional Icon to display inside the Input. */
  icon: PropTypes.oneOfType([PropTypes.bool, customPropTypes.itemShorthand]),

  /** An Icon can appear inside an Input on the left or right. */
  iconPosition: PropTypes.oneOf(['left']),

  /** Shorthand for creating the HTML Input. */
  input: customPropTypes.itemShorthand,

  /** Format to appear on dark backgrounds. */
  inverted: PropTypes.bool,

  /** Optional Label to display along side the Input. */
  label: customPropTypes.itemShorthand,

  /** A Label can appear outside an Input on the left or right. */
  labelPosition: PropTypes.oneOf(['left', 'right', 'left corner', 'right corner']),

  /** An Icon Input field can show that it is currently loading data. */
  loading: PropTypes.bool,

  /**
   * Called on change.
   *
   * @param {ChangeEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and a proposed value.
   */
  onChange: PropTypes.func,

  /** An Input can vary in size. */
  size: PropTypes.oneOf(['mini', 'small', 'large', 'big', 'huge', 'massive']),

  /** An Input can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Transparent Input has no background. */
  transparent: PropTypes.bool,

  /** The HTML input type. */
  type: PropTypes.string
} : {};
Input.defaultProps = {
  type: 'text'
};
Input.create = createShorthandFactory(Input, function (type) {
  return {
    type: type
  };
});
export default Input;