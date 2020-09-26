"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _eventStack = _interopRequireDefault(require("@semantic-ui-react/event-stack"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _keyboardKey = _interopRequireDefault(require("keyboard-key"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _validateTrigger = _interopRequireDefault(require("./utils/validateTrigger"));

var _PortalInner = _interopRequireDefault(require("./PortalInner"));

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
var Portal = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Portal, _Component);

  function Portal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.contentRef = /*#__PURE__*/_react.default.createRef();
    _this.triggerRef = /*#__PURE__*/_react.default.createRef();
    _this.latestDocumentMouseDownEvent = null;

    _this.handleDocumentMouseDown = function (e) {
      _this.latestDocumentMouseDownEvent = e;
    };

    _this.handleDocumentClick = function (e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;

      if (!_this.contentRef.current || // no portal
      (0, _lib.doesNodeContainClick)(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && (0, _lib.doesNodeContainClick)(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      (0, _lib.doesNodeContainClick)(_this.contentRef.current, e) // event happened in the portal
      ) {
          return;
        } // ignore the click


      if (closeOnDocumentClick) {
        _this.close(e);
      }
    };

    _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (_keyboardKey.default.getCode(e) !== _keyboardKey.default.Escape) return;

      _this.close(e);
    };

    _this.handlePortalMouseLeave = function (e) {
      var _this$props = _this.props,
          closeOnPortalMouseLeave = _this$props.closeOnPortalMouseLeave,
          mouseLeaveDelay = _this$props.mouseLeaveDelay;
      if (!closeOnPortalMouseLeave) return; // Do not close the portal when 'mouseleave' is triggered by children

      if (e.target !== _this.contentRef.current) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };

    _this.handlePortalMouseEnter = function () {
      // In order to enable mousing from the trigger to the portal, we need to
      // clear the mouseleave timer that was set when leaving the trigger.
      var closeOnPortalMouseLeave = _this.props.closeOnPortalMouseLeave;
      if (!closeOnPortalMouseLeave) return;
      clearTimeout(_this.mouseLeaveTimer);
    };

    _this.handleTriggerBlur = function (e) {
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          closeOnTriggerBlur = _this$props2.closeOnTriggerBlur; // Call original event handler

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      _invoke2.default.apply(void 0, [trigger, 'props.onBlur', e].concat(rest)); // IE 11 doesn't work with relatedTarget in blur events


      var target = e.relatedTarget || document.activeElement; // do not close if focus is given to the portal

      var didFocusPortal = (0, _invoke2.default)(_this.contentRef.current, 'contains', target);
      if (!closeOnTriggerBlur || didFocusPortal) return;

      _this.close(e);
    };

    _this.handleTriggerClick = function (e) {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeOnTriggerClick = _this$props3.closeOnTriggerClick,
          openOnTriggerClick = _this$props3.openOnTriggerClick;
      var open = _this.state.open; // Call original event handler

      for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        rest[_key3 - 1] = arguments[_key3];
      }

      _invoke2.default.apply(void 0, [trigger, 'props.onClick', e].concat(rest));

      if (open && closeOnTriggerClick) {
        _this.close(e);
      } else if (!open && openOnTriggerClick) {
        _this.open(e);
      }
    };

    _this.handleTriggerFocus = function (e) {
      var _this$props4 = _this.props,
          trigger = _this$props4.trigger,
          openOnTriggerFocus = _this$props4.openOnTriggerFocus; // Call original event handler

      for (var _len4 = arguments.length, rest = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        rest[_key4 - 1] = arguments[_key4];
      }

      _invoke2.default.apply(void 0, [trigger, 'props.onFocus', e].concat(rest));

      if (!openOnTriggerFocus) return;

      _this.open(e);
    };

    _this.handleTriggerMouseLeave = function (e) {
      clearTimeout(_this.mouseEnterTimer);
      var _this$props5 = _this.props,
          trigger = _this$props5.trigger,
          closeOnTriggerMouseLeave = _this$props5.closeOnTriggerMouseLeave,
          mouseLeaveDelay = _this$props5.mouseLeaveDelay; // Call original event handler

      for (var _len5 = arguments.length, rest = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        rest[_key5 - 1] = arguments[_key5];
      }

      _invoke2.default.apply(void 0, [trigger, 'props.onMouseLeave', e].concat(rest));

      if (!closeOnTriggerMouseLeave) return;
      _this.mouseLeaveTimer = _this.closeWithTimeout(e, mouseLeaveDelay);
    };

    _this.handleTriggerMouseEnter = function (e) {
      clearTimeout(_this.mouseLeaveTimer);
      var _this$props6 = _this.props,
          trigger = _this$props6.trigger,
          mouseEnterDelay = _this$props6.mouseEnterDelay,
          openOnTriggerMouseEnter = _this$props6.openOnTriggerMouseEnter; // Call original event handler

      for (var _len6 = arguments.length, rest = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        rest[_key6 - 1] = arguments[_key6];
      }

      _invoke2.default.apply(void 0, [trigger, 'props.onMouseEnter', e].concat(rest));

      if (!openOnTriggerMouseEnter) return;
      _this.mouseEnterTimer = _this.openWithTimeout(e, mouseEnterDelay);
    };

    _this.open = function (e) {
      var onOpen = _this.props.onOpen;
      if (onOpen) onOpen(e, _this.props);

      _this.setState({
        open: true
      });
    };

    _this.openWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends2.default)({}, e);
      return setTimeout(function () {
        return _this.open(eventClone);
      }, delay || 0);
    };

    _this.close = function (e) {
      var onClose = _this.props.onClose;
      if (onClose) onClose(e, _this.props);

      _this.setState({
        open: false
      });
    };

    _this.closeWithTimeout = function (e, delay) {
      // React wipes the entire event object and suggests using e.persist() if
      // you need the event for async access. However, even with e.persist
      // certain required props (e.g. currentTarget) are null so we're forced to clone.
      var eventClone = (0, _extends2.default)({}, e);
      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    };

    _this.handleMount = function () {
      (0, _invoke2.default)(_this.props, 'onMount', null, _this.props);
    };

    _this.handleUnmount = function () {
      (0, _invoke2.default)(_this.props, 'onUnmount', null, _this.props);
    };

    _this.handleTriggerRef = function (c) {
      _this.triggerRef.current = c;
      (0, _reactComponentRef.handleRef)(_this.props.triggerRef, c);
    };

    return _this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up timers
    clearTimeout(this.mouseEnterTimer);
    clearTimeout(this.mouseLeaveTimer);
  } // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------
  ;

  _proto.render = function render() {
    var _this$props7 = this.props,
        children = _this$props7.children,
        eventPool = _this$props7.eventPool,
        mountNode = _this$props7.mountNode,
        trigger = _this$props7.trigger;
    var open = this.state.open;
    /* istanbul ignore else */

    if (process.env.NODE_ENV !== 'production') {
      (0, _validateTrigger.default)(trigger);
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, open && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_PortalInner.default, {
      innerRef: this.contentRef,
      mountNode: mountNode,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, children), /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: eventPool
    }), /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "click",
      on: this.handleDocumentClick,
      pool: eventPool
    }), /*#__PURE__*/_react.default.createElement(_eventStack.default, {
      name: "keydown",
      on: this.handleEscape,
      pool: eventPool
    })), trigger && /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.handleTriggerRef
    }, /*#__PURE__*/_react.default.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  };

  return Portal;
}(_lib.ModernAutoControlledComponent);

Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes.default.node.isRequired,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes.default.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: _propTypes.default.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: _propTypes.default.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: _propTypes.default.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: _propTypes.default.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: _propTypes.default.bool,

  /** Initial value of open. */
  defaultOpen: _propTypes.default.bool,

  /** Event pool namespace that is used to handle component events */
  eventPool: _propTypes.default.string,

  /** The node where the portal should mount. */
  mountNode: _propTypes.default.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: _propTypes.default.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: _propTypes.default.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _propTypes.default.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _propTypes.default.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _propTypes.default.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _propTypes.default.func,

  /** Controls whether or not the portal is displayed. */
  open: _propTypes.default.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: _propTypes.default.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: _propTypes.default.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: _propTypes.default.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: _propTypes.default.node,

  /** Called with a ref to the trigger node. */
  triggerRef: _lib.customPropTypes.ref
} : {};
Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal.Inner = _PortalInner.default;
var _default = Portal;
exports.default = _default;