import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _invoke from "lodash/invoke";
import EventStack from '@semantic-ui-react/event-stack';
import { handleRef, Ref } from '@fluentui/react-component-ref';
import keyboardKey from 'keyboard-key';
import PropTypes from 'prop-types';
import React from 'react';
import { ModernAutoControlledComponent as Component, customPropTypes, doesNodeContainClick } from '../../lib';
import validateTrigger from './utils/validateTrigger';
import PortalInner from './PortalInner';

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
var Portal = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Portal, _Component);

  function Portal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.contentRef = /*#__PURE__*/React.createRef();
    _this.triggerRef = /*#__PURE__*/React.createRef();
    _this.latestDocumentMouseDownEvent = null;

    _this.handleDocumentMouseDown = function (e) {
      _this.latestDocumentMouseDownEvent = e;
    };

    _this.handleDocumentClick = function (e) {
      var closeOnDocumentClick = _this.props.closeOnDocumentClick;
      var currentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;

      if (!_this.contentRef.current || // no portal
      doesNodeContainClick(_this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      currentMouseDownEvent && doesNodeContainClick(_this.contentRef.current, currentMouseDownEvent) || // event originated in the portal but was ended outside
      doesNodeContainClick(_this.contentRef.current, e) // event happened in the portal
      ) {
          return;
        } // ignore the click


      if (closeOnDocumentClick) {
        _this.close(e);
      }
    };

    _this.handleEscape = function (e) {
      if (!_this.props.closeOnEscape) return;
      if (keyboardKey.getCode(e) !== keyboardKey.Escape) return;

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

      _invoke.apply(void 0, [trigger, 'props.onBlur', e].concat(rest)); // IE 11 doesn't work with relatedTarget in blur events


      var target = e.relatedTarget || document.activeElement; // do not close if focus is given to the portal

      var didFocusPortal = _invoke(_this.contentRef.current, 'contains', target);

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

      _invoke.apply(void 0, [trigger, 'props.onClick', e].concat(rest));

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

      _invoke.apply(void 0, [trigger, 'props.onFocus', e].concat(rest));

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

      _invoke.apply(void 0, [trigger, 'props.onMouseLeave', e].concat(rest));

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

      _invoke.apply(void 0, [trigger, 'props.onMouseEnter', e].concat(rest));

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
      var eventClone = _extends({}, e);

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
      var eventClone = _extends({}, e);

      return setTimeout(function () {
        return _this.close(eventClone);
      }, delay || 0);
    };

    _this.handleMount = function () {
      _invoke(_this.props, 'onMount', null, _this.props);
    };

    _this.handleUnmount = function () {
      _invoke(_this.props, 'onUnmount', null, _this.props);
    };

    _this.handleTriggerRef = function (c) {
      _this.triggerRef.current = c;
      handleRef(_this.props.triggerRef, c);
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
      validateTrigger(trigger);
    }

    return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortalInner, {
      innerRef: this.contentRef,
      mountNode: mountNode,
      onMount: this.handleMount,
      onUnmount: this.handleUnmount
    }, children), /*#__PURE__*/React.createElement(EventStack, {
      name: "mouseleave",
      on: this.handlePortalMouseLeave,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/React.createElement(EventStack, {
      name: "mouseenter",
      on: this.handlePortalMouseEnter,
      pool: eventPool,
      target: this.contentRef
    }), /*#__PURE__*/React.createElement(EventStack, {
      name: "mousedown",
      on: this.handleDocumentMouseDown,
      pool: eventPool
    }), /*#__PURE__*/React.createElement(EventStack, {
      name: "click",
      on: this.handleDocumentClick,
      pool: eventPool
    }), /*#__PURE__*/React.createElement(EventStack, {
      name: "keydown",
      on: this.handleEscape,
      pool: eventPool
    })), trigger && /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.handleTriggerRef
    }, /*#__PURE__*/React.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter
    })));
  };

  return Portal;
}(Component);

Portal.handledProps = ["children", "closeOnDocumentClick", "closeOnEscape", "closeOnPortalMouseLeave", "closeOnTriggerBlur", "closeOnTriggerClick", "closeOnTriggerMouseLeave", "defaultOpen", "eventPool", "mountNode", "mouseEnterDelay", "mouseLeaveDelay", "onClose", "onMount", "onOpen", "onUnmount", "open", "openOnTriggerClick", "openOnTriggerFocus", "openOnTriggerMouseEnter", "trigger", "triggerRef"];
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Controls whether or not the portal should close when escape is pressed is displayed. */
  closeOnEscape: PropTypes.bool,

  /**
   * Controls whether or not the portal should close when mousing out of the portal.
   * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
   * gap from the trigger to the portal.
   */
  closeOnPortalMouseLeave: PropTypes.bool,

  /** Controls whether or not the portal should close on blur of the trigger. */
  closeOnTriggerBlur: PropTypes.bool,

  /** Controls whether or not the portal should close on click of the trigger. */
  closeOnTriggerClick: PropTypes.bool,

  /** Controls whether or not the portal should close when mousing out of the trigger. */
  closeOnTriggerMouseLeave: PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: PropTypes.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: PropTypes.number,

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: PropTypes.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: PropTypes.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: PropTypes.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node,

  /** Called with a ref to the trigger node. */
  triggerRef: customPropTypes.ref
} : {};
Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true
};
Portal.autoControlledProps = ['open'];
Portal.Inner = PortalInner;
export default Portal;