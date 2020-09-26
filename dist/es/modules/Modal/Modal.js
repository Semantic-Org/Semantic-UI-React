import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _isPlainObject from "lodash/isPlainObject";
import _pick from "lodash/pick";
import _includes from "lodash/includes";
import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";
import _invoke from "lodash/invoke";
import { Ref } from '@fluentui/react-component-ref';
import cx from 'clsx';
import PropTypes from 'prop-types';
import React, { createRef, isValidElement } from 'react';
import shallowEqual from 'shallowequal';
import { ModernAutoControlledComponent as Component, childrenUtils, customPropTypes, doesNodeContainClick, eventStack, getElementType, getUnhandledProps, isBrowser, useKeyOnly } from '../../lib';
import Icon from '../../elements/Icon';
import Portal from '../../addons/Portal';
import ModalActions from './ModalActions';
import ModalContent from './ModalContent';
import ModalDescription from './ModalDescription';
import ModalDimmer from './ModalDimmer';
import ModalHeader from './ModalHeader';
import { canFit, getLegacyStyles, isLegacy } from './utils';

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Modal, _Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.legacy = isBrowser() && isLegacy();
    _this.ref = /*#__PURE__*/createRef();
    _this.dimmerRef = /*#__PURE__*/createRef();
    _this.latestDocumentMouseDownEvent = null;

    _this.getMountNode = function () {
      return isBrowser() ? _this.props.mountNode || document.body : null;
    };

    _this.handleActionsOverrides = function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          _invoke(predefinedProps, 'onActionClick', e, actionProps);

          _invoke(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    };

    _this.handleClose = function (e) {
      _invoke(_this.props, 'onClose', e, _this.props);

      _this.setState({
        open: false
      });
    };

    _this.handleDocumentMouseDown = function (e) {
      _this.latestDocumentMouseDownEvent = e;
    };

    _this.handleDocumentClick = function (e) {
      var closeOnDimmerClick = _this.props.closeOnDimmerClick;
      var currentDocumentMouseDownEvent = _this.latestDocumentMouseDownEvent;
      _this.latestDocumentMouseDownEvent = null;
      if (!closeOnDimmerClick || doesNodeContainClick(_this.ref.current, currentDocumentMouseDownEvent) || doesNodeContainClick(_this.ref.current, e)) return;

      _invoke(_this.props, 'onClose', e, _this.props);

      _this.setState({
        open: false
      });
    };

    _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          _invoke(predefinedProps, 'onClick', e);

          _this.handleClose(e);
        }
      };
    };

    _this.handleOpen = function (e) {
      _invoke(_this.props, 'onOpen', e, _this.props);

      _this.setState({
        open: true
      });
    };

    _this.handlePortalMount = function (e) {
      var eventPool = _this.props.eventPool;

      _this.setState({
        scrolling: false
      });

      _this.setPositionAndClassNames();

      eventStack.sub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack.sub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _invoke(_this.props, 'onMount', e, _this.props);
    };

    _this.handlePortalUnmount = function (e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);
      eventStack.unsub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });
      eventStack.unsub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _invoke(_this.props, 'onUnmount', e, _this.props);
    };

    _this.setPositionAndClassNames = function () {
      var centered = _this.props.centered;
      var scrolling;
      var newState = {};

      if (_this.ref.current) {
        var rect = _this.ref.current.getBoundingClientRect();

        var isFitted = canFit(rect);
        scrolling = !isFitted; // Styles should be computed for IE11

        var legacyStyles = _this.legacy ? getLegacyStyles(isFitted, centered, rect) : {};

        if (!shallowEqual(_this.state.legacyStyles, legacyStyles)) {
          newState.legacyStyles = legacyStyles;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }
      }

      if (!_isEmpty(newState)) _this.setState(newState);
      _this.animationRequestId = requestAnimationFrame(_this.setPositionAndClassNames);
    };

    _this.renderContent = function (rest) {
      var _this$props = _this.props,
          actions = _this$props.actions,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          closeIcon = _this$props.closeIcon,
          content = _this$props.content,
          header = _this$props.header,
          size = _this$props.size,
          style = _this$props.style;
      var _this$state = _this.state,
          legacyStyles = _this$state.legacyStyles,
          scrolling = _this$state.scrolling;
      var classes = cx('ui', size, useKeyOnly(basic, 'basic'), useKeyOnly(_this.legacy, 'legacy'), useKeyOnly(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = getElementType(Modal, _this.props);
      var closeIconName = closeIcon === true ? 'close' : closeIcon;
      var closeIconJSX = Icon.create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });
      return /*#__PURE__*/React.createElement(Ref, {
        innerRef: _this.ref
      }, /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
        className: classes,
        style: _extends({}, legacyStyles, style)
      }), closeIconJSX, childrenUtils.isNil(children) ? /*#__PURE__*/React.createElement(React.Fragment, null, ModalHeader.create(header, {
        autoGenerateKey: false
      }), ModalContent.create(content, {
        autoGenerateKey: false
      }), ModalActions.create(actions, {
        overrideProps: _this.handleActionsOverrides
      })) : children));
    };

    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.handlePortalUnmount();
  } // Do not access document when server side rendering
  ;

  _proto.render = function render() {
    var _this$props2 = this.props,
        centered = _this$props2.centered,
        closeOnDocumentClick = _this$props2.closeOnDocumentClick,
        dimmer = _this$props2.dimmer,
        eventPool = _this$props2.eventPool,
        trigger = _this$props2.trigger;
    var _this$state2 = this.state,
        open = _this$state2.open,
        scrolling = _this$state2.scrolling;
    var mountNode = this.getMountNode(); // Short circuit when server side rendering

    if (!isBrowser()) {
      return /*#__PURE__*/isValidElement(trigger) ? trigger : null;
    }

    var unhandled = getUnhandledProps(Modal, this.props);
    var portalPropNames = Portal.handledProps;

    var rest = _reduce(unhandled, function (acc, val, key) {
      if (!_includes(portalPropNames, key)) acc[key] = val;
      return acc;
    }, {});

    var portalProps = _pick(unhandled, portalPropNames); // Heads up!
    //
    // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
    // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
    //
    // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
    // We need the immediate child to be the dimmer to :not() blur the modal itself!
    // Otherwise, the portal div is also blurred, blurring the modal.
    //
    // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.


    return /*#__PURE__*/React.createElement(Portal, _extends({
      closeOnDocumentClick: closeOnDocumentClick
    }, portalProps, {
      trigger: trigger,
      eventPool: eventPool,
      mountNode: mountNode,
      open: open,
      onClose: this.handleClose,
      onMount: this.handlePortalMount,
      onOpen: this.handleOpen,
      onUnmount: this.handlePortalUnmount
    }), /*#__PURE__*/React.createElement(Ref, {
      innerRef: this.dimmerRef
    }, ModalDimmer.create(_isPlainObject(dimmer) ? dimmer : {}, {
      autoGenerateKey: false,
      defaultProps: {
        blurring: dimmer === 'blurring',
        inverted: dimmer === 'inverted'
      },
      overrideProps: {
        children: this.renderContent(rest),
        centered: centered,
        mountNode: mountNode,
        scrolling: scrolling
      }
    })));
  };

  return Modal;
}(Component);

Modal.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** A modal can be vertically centered in the viewport */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: PropTypes.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Simple text content for the Modal. */
  content: customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.object, PropTypes.oneOf(['inverted', 'blurring'])]),

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** Modal displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: PropTypes.func,

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

  /** Controls whether or not the Modal is displayed. */
  open: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),

  /** Custom styles. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node
  /**
   * NOTE: Any unhandled props that are defined in Portal are passed-through
   * to the wrapping Portal.
   */

} : {};
Modal.defaultProps = {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal'
};
Modal.autoControlledProps = ['open'];
Modal.Actions = ModalActions;
Modal.Content = ModalContent;
Modal.Description = ModalDescription;
Modal.Dimmer = ModalDimmer;
Modal.Header = ModalHeader;
export default Modal;