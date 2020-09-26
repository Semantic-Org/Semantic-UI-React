import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _without from "lodash/without";
import _isNil from "lodash/isNil";
import _merge from "lodash/merge";
import _invoke from "lodash/invoke";
import _isArray from "lodash/isArray";
import _pick from "lodash/pick";
import _includes from "lodash/includes";
import _reduce from "lodash/reduce";
import EventStack from '@semantic-ui-react/event-stack';
import { Ref } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { Component, createRef } from 'react';
import { Popper } from 'react-popper';
import shallowEqual from 'shallowequal';
import { eventStack, childrenUtils, customPropTypes, getElementType, getUnhandledProps, SUI, useKeyOnly, useKeyOrValueAndKey } from '../../lib';
import Portal from '../../addons/Portal';
import { placementMapping, positions, positionsMapping } from './lib/positions';
import createReferenceProxy from './lib/createReferenceProxy';
import PopupContent from './PopupContent';
import PopupHeader from './PopupHeader';

/**
 * A Popup displays additional information on top of a page.
 */
var Popup = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Popup, _Component);

  function Popup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {};
    _this.open = false;
    _this.triggerRef = /*#__PURE__*/createRef();

    _this.getPortalProps = function () {
      var portalProps = {};
      var _this$props = _this.props,
          on = _this$props.on,
          hoverable = _this$props.hoverable;
      var normalizedOn = _isArray(on) ? on : [on];

      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (_includes(normalizedOn, 'hover')) {
        portalProps.openOnTriggerClick = false;
        portalProps.closeOnTriggerClick = false;
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true; // Taken from SUI: https://git.io/vPmCm

        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      if (_includes(normalizedOn, 'click')) {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      }

      if (_includes(normalizedOn, 'focus')) {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      }

      return portalProps;
    };

    _this.hideOnScroll = function (e) {
      _this.setState({
        closed: true
      });

      eventStack.unsub('scroll', _this.hideOnScroll, {
        target: window
      });
      _this.timeoutId = setTimeout(function () {
        _this.setState({
          closed: false
        });
      }, 50);

      _this.handleClose(e);
    };

    _this.handleClose = function (e) {
      _invoke(_this.props, 'onClose', e, _this.props);
    };

    _this.handleOpen = function (e) {
      _invoke(_this.props, 'onOpen', e, _this.props);
    };

    _this.handlePortalMount = function (e) {
      _invoke(_this.props, 'onMount', e, _this.props);
    };

    _this.handlePortalUnmount = function (e) {
      _this.positionUpdate = null;

      _invoke(_this.props, 'onUnmount', e, _this.props);
    };

    _this.renderContent = function (_ref) {
      var popperPlacement = _ref.placement,
          popperRef = _ref.ref,
          scheduleUpdate = _ref.scheduleUpdate,
          popperStyle = _ref.style;
      var _this$props2 = _this.props,
          basic = _this$props2.basic,
          children = _this$props2.children,
          className = _this$props2.className,
          content = _this$props2.content,
          hideOnScroll = _this$props2.hideOnScroll,
          flowing = _this$props2.flowing,
          header = _this$props2.header,
          inverted = _this$props2.inverted,
          size = _this$props2.size,
          style = _this$props2.style,
          wide = _this$props2.wide;
      var contentRestProps = _this.state.contentRestProps;
      _this.positionUpdate = scheduleUpdate;
      var classes = cx('ui', placementMapping[popperPlacement], size, useKeyOrValueAndKey(wide, 'wide'), useKeyOnly(basic, 'basic'), useKeyOnly(flowing, 'flowing'), useKeyOnly(inverted, 'inverted'), 'popup transition visible', className);
      var ElementType = getElementType(Popup, _this.props);

      var styles = _extends({
        // Heads up! We need default styles to get working correctly `flowing`
        left: 'auto',
        right: 'auto'
      }, popperStyle, style);

      return /*#__PURE__*/React.createElement(Ref, {
        innerRef: popperRef
      }, /*#__PURE__*/React.createElement(ElementType, _extends({}, contentRestProps, {
        className: classes,
        style: styles
      }), childrenUtils.isNil(children) ? /*#__PURE__*/React.createElement(React.Fragment, null, PopupHeader.create(header, {
        autoGenerateKey: false
      }), PopupContent.create(content, {
        autoGenerateKey: false
      })) : children, hideOnScroll && /*#__PURE__*/React.createElement(EventStack, {
        on: _this.hideOnScroll,
        name: "scroll",
        target: "window"
      })));
    };

    return _this;
  }

  Popup.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.closed || state.disabled) return {};
    var unhandledProps = getUnhandledProps(Popup, props);

    var contentRestProps = _reduce(unhandledProps, function (acc, val, key) {
      if (!_includes(Portal.handledProps, key)) acc[key] = val;
      return acc;
    }, {});

    var portalRestProps = _pick(unhandledProps, Portal.handledProps);

    return {
      contentRestProps: contentRestProps,
      portalRestProps: portalRestProps
    };
  };

  var _proto = Popup.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var depsEqual = shallowEqual(this.props.popperDependencies, prevProps.popperDependencies);

    if (!depsEqual) {
      this.handleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  };

  _proto.handleUpdate = function handleUpdate() {
    if (this.positionUpdate) this.positionUpdate();
  };

  _proto.render = function render() {
    var _this$props3 = this.props,
        context = _this$props3.context,
        disabled = _this$props3.disabled,
        eventsEnabled = _this$props3.eventsEnabled,
        offset = _this$props3.offset,
        pinned = _this$props3.pinned,
        popperModifiers = _this$props3.popperModifiers,
        position = _this$props3.position,
        positionFixed = _this$props3.positionFixed,
        trigger = _this$props3.trigger;
    var _this$state = this.state,
        closed = _this$state.closed,
        portalRestProps = _this$state.portalRestProps;

    if (closed || disabled) {
      return trigger;
    }

    var modifiers = _merge({
      arrow: {
        enabled: false
      },
      flip: {
        enabled: !pinned
      },
      // There are issues with `keepTogether` and `offset`
      // https://github.com/FezVrasta/popper.js/issues/557
      keepTogether: {
        enabled: !!offset
      },
      offset: {
        offset: offset
      }
    }, popperModifiers);

    var referenceElement = createReferenceProxy(_isNil(context) ? this.triggerRef : context);

    var mergedPortalProps = _extends({}, this.getPortalProps(), portalRestProps);

    return /*#__PURE__*/React.createElement(Portal, _extends({}, mergedPortalProps, {
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount,
      trigger: trigger,
      triggerRef: this.triggerRef
    }), /*#__PURE__*/React.createElement(Popper, {
      eventsEnabled: eventsEnabled,
      modifiers: modifiers,
      placement: positionsMapping[position],
      positionFixed: positionFixed,
      referenceElement: referenceElement
    }, this.renderContent));
  };

  return Popup;
}(Component);

Popup.handledProps = ["as", "basic", "children", "className", "content", "context", "disabled", "eventsEnabled", "flowing", "header", "hideOnScroll", "hoverable", "inverted", "offset", "on", "onClose", "onMount", "onOpen", "onUnmount", "pinned", "popperDependencies", "popperModifiers", "position", "positionFixed", "size", "style", "trigger", "wide"];
export { Popup as default };
Popup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Display the popup without the pointing arrow. */
  basic: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Simple text content for the popover. */
  content: customPropTypes.itemShorthand,

  /** Existing element the pop-up should be bound to. */
  context: PropTypes.oneOfType([PropTypes.object, customPropTypes.refObject]),

  /** A disabled popup only renders its trigger. */
  disabled: PropTypes.bool,

  /** Enables the Popper.js event listeners. */
  eventsEnabled: PropTypes.bool,

  /** A flowing Popup has no maximum width and continues to flow to fit its content. */
  flowing: PropTypes.bool,

  /** Takes up the entire width of its offset container. */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** Hide the Popup when scrolling the window. */
  hideOnScroll: PropTypes.bool,

  /** Whether the popup should not close on hover. */
  hoverable: PropTypes.bool,

  /** Invert the colors of the Popup. */
  inverted: PropTypes.bool,

  /** Offset value to apply to rendered popup. Accepts the following units:
   * - px or unit-less, interpreted as pixels
   * - %, percentage relative to the length of the trigger element
   * - %p, percentage relative to the length of the popup element
   * - vw, CSS viewport width unit
   * - vh, CSS viewport height unit
   */
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Events triggering the popup. */
  on: PropTypes.oneOfType([PropTypes.oneOf(['hover', 'click', 'focus']), PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus']))]),

  /**
   * Called when a close event happens.
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
   * Called when an open event happens.
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

  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: PropTypes.bool,

  /** Position for the popover. */
  position: PropTypes.oneOf(positions),

  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: PropTypes.bool,

  /** An object containing custom settings for the Popper.js modifiers. */
  popperModifiers: PropTypes.object,

  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: PropTypes.array,

  /** Popup size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: PropTypes.node,

  /** Popup width. */
  wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])])
} : {};
Popup.defaultProps = {
  disabled: false,
  eventsEnabled: true,
  offset: 0,
  on: ['click', 'hover'],
  pinned: false,
  position: 'top left'
};
Popup.Content = PopupContent;
Popup.Header = PopupHeader;