import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { createShorthandFactory } from '../../lib';
import MenuItem from '../../collections/Menu/MenuItem';
/**
 * An item of a pagination.
 */

var PaginationItem = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PaginationItem, _Component);

  function PaginationItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleClick = function (e) {
      _invoke(_this.props, 'onClick', e, _this.props);
    };

    _this.handleKeyDown = function (e) {
      _invoke(_this.props, 'onKeyDown', e, _this.props);

      if (keyboardKey.getCode(e) === keyboardKey.Enter) _invoke(_this.props, 'onClick', e, _this.props);
    };

    _this.handleOverrides = function () {
      return {
        onClick: _this.handleClick,
        onKeyDown: _this.handleKeyDown
      };
    };

    return _this;
  }

  var _proto = PaginationItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        type = _this$props.type;
    var disabled = this.props.disabled || type === 'ellipsisItem';
    return MenuItem.create(this.props, {
      defaultProps: {
        active: active,
        'aria-current': active,
        'aria-disabled': disabled,
        disabled: disabled,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        tabIndex: disabled ? -1 : 0
      },
      overrideProps: this.handleOverrides
    });
  };

  return PaginationItem;
}(Component);

PaginationItem.handledProps = ["active", "disabled", "onClick", "onKeyDown", "type"];
PaginationItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can be active. */
  active: PropTypes.bool,

  /** A pagination item can be disabled. */
  disabled: PropTypes.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: PropTypes.func,

  /**
   * Called on key down.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onKeyDown: PropTypes.func,

  /** A pagination should have a type. */
  type: PropTypes.oneOf(['ellipsisItem', 'firstItem', 'prevItem', 'pageItem', 'nextItem', 'lastItem'])
} : {};
PaginationItem.create = createShorthandFactory(PaginationItem, function (content) {
  return {
    content: content
  };
});
export default PaginationItem;