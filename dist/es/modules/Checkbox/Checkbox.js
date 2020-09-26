import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _set from "lodash/set";
import _invoke from "lodash/invoke";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import { Ref } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { ModernAutoControlledComponent as Component, createHTMLLabel, customPropTypes, getElementType, getUnhandledProps, htmlInputAttrs, partitionHTMLProps, useKeyOnly } from '../../lib';

/**
 * A checkbox allows a user to select a value from a small set of options, often binary.
 * @see Form
 * @see Radio
 */
var Checkbox = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Checkbox, _Component);

  function Checkbox() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.inputRef = /*#__PURE__*/createRef();
    _this.labelRef = /*#__PURE__*/createRef();

    _this.canToggle = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          radio = _this$props.radio,
          readOnly = _this$props.readOnly;
      var checked = _this.state.checked;
      return !disabled && !readOnly && !(radio && checked);
    };

    _this.computeTabIndex = function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tabIndex = _this$props2.tabIndex;
      if (!_isNil(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    };

    _this.handleClick = function (e) {
      var id = _this.props.id;
      var _this$state = _this.state,
          checked = _this$state.checked,
          indeterminate = _this$state.indeterminate;

      var isInputClick = _invoke(_this.inputRef.current, 'contains', e.target);

      var isLabelClick = _invoke(_this.labelRef.current, 'contains', e.target);

      var isRootClick = !isLabelClick && !isInputClick;
      var hasId = !_isNil(id);
      var isLabelClickAndForwardedToInput = isLabelClick && hasId; // https://github.com/Semantic-Org/Semantic-UI-React/pull/3351

      if (!isLabelClickAndForwardedToInput) {
        _invoke(_this.props, 'onClick', e, _extends({}, _this.props, {
          checked: !checked,
          indeterminate: !!indeterminate
        }));
      }

      if (_this.isClickFromMouse) {
        _this.isClickFromMouse = false;

        if (isLabelClick && !hasId) {
          _this.handleChange(e);
        } // Changes should be triggered for the slider variation


        if (isRootClick) {
          _this.handleChange(e);
        }

        if (isLabelClick && hasId) {
          // To prevent two clicks from being fired from the component we have to stop the propagation
          // from the "input" click: https://github.com/Semantic-Org/Semantic-UI-React/issues/3433
          e.stopPropagation();
        }
      }
    };

    _this.handleChange = function (e) {
      var checked = _this.state.checked;
      if (!_this.canToggle()) return;

      _invoke(_this.props, 'onChange', e, _extends({}, _this.props, {
        checked: !checked,
        indeterminate: false
      }));

      _this.setState({
        checked: !checked,
        indeterminate: false
      });
    };

    _this.handleMouseDown = function (e) {
      var _this$state2 = _this.state,
          checked = _this$state2.checked,
          indeterminate = _this$state2.indeterminate;

      _invoke(_this.props, 'onMouseDown', e, _extends({}, _this.props, {
        checked: !!checked,
        indeterminate: !!indeterminate
      }));

      if (!e.defaultPrevented) {
        _invoke(_this.inputRef.current, 'focus');
      } // Heads up!
      // We need to call "preventDefault" to keep element focused.


      e.preventDefault();
    };

    _this.handleMouseUp = function (e) {
      var _this$state3 = _this.state,
          checked = _this$state3.checked,
          indeterminate = _this$state3.indeterminate;
      _this.isClickFromMouse = true;

      _invoke(_this.props, 'onMouseUp', e, _extends({}, _this.props, {
        checked: !!checked,
        indeterminate: !!indeterminate
      }));
    };

    _this.setIndeterminate = function () {
      var indeterminate = _this.state.indeterminate;

      _set(_this.inputRef, 'current.indeterminate', !!indeterminate);
    };

    return _this;
  }

  var _proto = Checkbox.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setIndeterminate();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.setIndeterminate();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        className = _this$props3.className,
        disabled = _this$props3.disabled,
        label = _this$props3.label,
        id = _this$props3.id,
        name = _this$props3.name,
        radio = _this$props3.radio,
        readOnly = _this$props3.readOnly,
        slider = _this$props3.slider,
        toggle = _this$props3.toggle,
        type = _this$props3.type,
        value = _this$props3.value;
    var _this$state4 = this.state,
        checked = _this$state4.checked,
        indeterminate = _this$state4.indeterminate;
    var classes = cx('ui', useKeyOnly(checked, 'checked'), useKeyOnly(disabled, 'disabled'), useKeyOnly(indeterminate, 'indeterminate'), // auto apply fitted class to compact white space when there is no label
    // https://semantic-ui.com/modules/checkbox.html#fitted
    useKeyOnly(_isNil(label), 'fitted'), useKeyOnly(radio, 'radio'), useKeyOnly(readOnly, 'read-only'), useKeyOnly(slider, 'slider'), useKeyOnly(toggle, 'toggle'), 'checkbox', className);
    var unhandled = getUnhandledProps(Checkbox, this.props);
    var ElementType = getElementType(Checkbox, this.props);

    var _partitionHTMLProps = partitionHTMLProps(unhandled, {
      htmlProps: htmlInputAttrs
    }),
        htmlInputProps = _partitionHTMLProps[0],
        rest = _partitionHTMLProps[1]; // Heads Up!
    // Do not remove empty labels, they are required by SUI CSS


    var labelElement = createHTMLLabel(label, {
      defaultProps: {
        htmlFor: id
      },
      autoGenerateKey: false
    }) || /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    });
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      onClick: this.handleClick,
      onChange: this.handleChange,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    }), /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.inputRef
    }, /*#__PURE__*/React.createElement("input", _extends({}, htmlInputProps, {
      checked: checked,
      className: "hidden",
      disabled: disabled,
      id: id,
      name: name,
      readOnly: true,
      tabIndex: this.computeTabIndex(),
      type: type,
      value: value
    }))), /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.labelRef
    }, labelElement));
  };

  return Checkbox;
}(Component);

Checkbox.handledProps = ["as", "checked", "className", "defaultChecked", "defaultIndeterminate", "disabled", "fitted", "id", "indeterminate", "label", "name", "onChange", "onClick", "onMouseDown", "onMouseUp", "radio", "readOnly", "slider", "tabIndex", "toggle", "type", "value"];
export { Checkbox as default };
Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Whether or not checkbox is checked. */
  checked: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** The initial value of checked. */
  defaultChecked: PropTypes.bool,

  /** Whether or not checkbox is indeterminate. */
  defaultIndeterminate: PropTypes.bool,

  /** A checkbox can appear disabled and be unable to change states */
  disabled: PropTypes.bool,

  /** Removes padding for a label. Auto applied when there is no label. */
  fitted: PropTypes.bool,

  /** A unique identifier. */
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Whether or not checkbox is indeterminate. */
  indeterminate: PropTypes.bool,

  /** The text of the associated label element. */
  label: customPropTypes.itemShorthand,

  /** The HTML input name. */
  name: PropTypes.string,

  /**
   * Called when the user attempts to change the checked state.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed checked/indeterminate state.
   */
  onChange: PropTypes.func,

  /**
   * Called when the checkbox or label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onClick: PropTypes.func,

  /**
   * Called when the user presses down on the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseDown: PropTypes.func,

  /**
   * Called when the user releases the mouse.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and current checked/indeterminate state.
   */
  onMouseUp: PropTypes.func,

  /** Format as a radio element. This means it is an exclusive option. */
  radio: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['slider', 'toggle'])]),

  /** A checkbox can be read-only and unable to change states. */
  readOnly: PropTypes.bool,

  /** Format to emphasize the current selection state. */
  slider: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'toggle'])]),

  /** A checkbox can receive focus. */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Format to show an on or off choice. */
  toggle: customPropTypes.every([PropTypes.bool, customPropTypes.disallow(['radio', 'slider'])]),

  /** HTML input type, either checkbox or radio. */
  type: PropTypes.oneOf(['checkbox', 'radio']),

  /** The HTML input value. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
} : {};
Checkbox.defaultProps = {
  type: 'checkbox'
};
Checkbox.autoControlledProps = ['checked', 'indeterminate'];