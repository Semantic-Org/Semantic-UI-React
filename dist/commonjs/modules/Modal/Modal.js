"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _reduce2 = _interopRequireDefault(require("lodash/reduce"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _shallowequal = _interopRequireDefault(require("shallowequal"));

var _lib = require("../../lib");

var _Icon = _interopRequireDefault(require("../../elements/Icon"));

var _Portal = _interopRequireDefault(require("../../addons/Portal"));

var _ModalActions = _interopRequireDefault(require("./ModalActions"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _ModalDescription = _interopRequireDefault(require("./ModalDescription"));

var _ModalDimmer = _interopRequireDefault(require("./ModalDimmer"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _utils = require("./utils");

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
var Modal = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Modal, _Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.legacy = (0, _lib.isBrowser)() && (0, _utils.isLegacy)();
    _this.ref = /*#__PURE__*/(0, _react.createRef)();
    _this.dimmerRef = /*#__PURE__*/(0, _react.createRef)();
    _this.latestDocumentMouseDownEvent = null;

    _this.getMountNode = function () {
      return (0, _lib.isBrowser)() ? _this.props.mountNode || document.body : null;
    };

    _this.handleActionsOverrides = function (predefinedProps) {
      return {
        onActionClick: function onActionClick(e, actionProps) {
          (0, _invoke2.default)(predefinedProps, 'onActionClick', e, actionProps);
          (0, _invoke2.default)(_this.props, 'onActionClick', e, _this.props);

          _this.handleClose(e);
        }
      };
    };

    _this.handleClose = function (e) {
      (0, _invoke2.default)(_this.props, 'onClose', e, _this.props);

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
      if (!closeOnDimmerClick || (0, _lib.doesNodeContainClick)(_this.ref.current, currentDocumentMouseDownEvent) || (0, _lib.doesNodeContainClick)(_this.ref.current, e)) return;
      (0, _invoke2.default)(_this.props, 'onClose', e, _this.props);

      _this.setState({
        open: false
      });
    };

    _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          (0, _invoke2.default)(predefinedProps, 'onClick', e);

          _this.handleClose(e);
        }
      };
    };

    _this.handleOpen = function (e) {
      (0, _invoke2.default)(_this.props, 'onOpen', e, _this.props);

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

      _lib.eventStack.sub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _lib.eventStack.sub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      (0, _invoke2.default)(_this.props, 'onMount', e, _this.props);
    };

    _this.handlePortalUnmount = function (e) {
      var eventPool = _this.props.eventPool;
      cancelAnimationFrame(_this.animationRequestId);

      _lib.eventStack.unsub('mousedown', _this.handleDocumentMouseDown, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      _lib.eventStack.unsub('click', _this.handleDocumentClick, {
        pool: eventPool,
        target: _this.dimmerRef.current
      });

      (0, _invoke2.default)(_this.props, 'onUnmount', e, _this.props);
    };

    _this.setPositionAndClassNames = function () {
      var centered = _this.props.centered;
      var scrolling;
      var newState = {};

      if (_this.ref.current) {
        var rect = _this.ref.current.getBoundingClientRect();

        var isFitted = (0, _utils.canFit)(rect);
        scrolling = !isFitted; // Styles should be computed for IE11

        var legacyStyles = _this.legacy ? (0, _utils.getLegacyStyles)(isFitted, centered, rect) : {};

        if (!(0, _shallowequal.default)(_this.state.legacyStyles, legacyStyles)) {
          newState.legacyStyles = legacyStyles;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;
        }
      }

      if (!(0, _isEmpty2.default)(newState)) _this.setState(newState);
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
      var classes = (0, _clsx.default)('ui', size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(_this.legacy, 'legacy'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'modal transition visible active', className);
      var ElementType = (0, _lib.getElementType)(Modal, _this.props);
      var closeIconName = closeIcon === true ? 'close' : closeIcon;

      var closeIconJSX = _Icon.default.create(closeIconName, {
        overrideProps: _this.handleIconOverrides
      });

      return /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
        innerRef: _this.ref
      }, /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
        className: classes,
        style: (0, _extends2.default)({}, legacyStyles, style)
      }), closeIconJSX, _lib.childrenUtils.isNil(children) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _ModalHeader.default.create(header, {
        autoGenerateKey: false
      }), _ModalContent.default.create(content, {
        autoGenerateKey: false
      }), _ModalActions.default.create(actions, {
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

    if (!(0, _lib.isBrowser)()) {
      return /*#__PURE__*/(0, _react.isValidElement)(trigger) ? trigger : null;
    }

    var unhandled = (0, _lib.getUnhandledProps)(Modal, this.props);
    var portalPropNames = _Portal.default.handledProps;
    var rest = (0, _reduce2.default)(unhandled, function (acc, val, key) {
      if (!(0, _includes2.default)(portalPropNames, key)) acc[key] = val;
      return acc;
    }, {});
    var portalProps = (0, _pick2.default)(unhandled, portalPropNames); // Heads up!
    //
    // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
    // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
    //
    // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
    // We need the immediate child to be the dimmer to :not() blur the modal itself!
    // Otherwise, the portal div is also blurred, blurring the modal.
    //
    // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

    return /*#__PURE__*/_react.default.createElement(_Portal.default, (0, _extends2.default)({
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
    }), /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.dimmerRef
    }, _ModalDimmer.default.create((0, _isPlainObject2.default)(dimmer) ? dimmer : {}, {
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
}(_lib.ModernAutoControlledComponent);

Modal.handledProps = ["actions", "as", "basic", "centered", "children", "className", "closeIcon", "closeOnDimmerClick", "closeOnDocumentClick", "content", "defaultOpen", "dimmer", "eventPool", "header", "mountNode", "onActionClick", "onClose", "onMount", "onOpen", "onUnmount", "open", "size", "style", "trigger"];
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: _lib.customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: _propTypes.default.bool,

  /** A modal can be vertically centered in the viewport */
  centered: _propTypes.default.bool,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.object, _propTypes.default.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: _propTypes.default.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: _propTypes.default.bool,

  /** Simple text content for the Modal. */
  content: _lib.customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: _propTypes.default.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.func, _propTypes.default.object, _propTypes.default.oneOf(['inverted', 'blurring'])]),

  /** Event pool namespace that is used to handle component events */
  eventPool: _propTypes.default.string,

  /** Modal displayed above the content in bold. */
  header: _lib.customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: _propTypes.default.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: _propTypes.default.func,

  /**
   * Called when a close event happens.
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
   * Called when an open event happens.
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

  /** Controls whether or not the Modal is displayed. */
  open: _propTypes.default.bool,

  /** A modal can vary in size */
  size: _propTypes.default.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),

  /** Custom styles. */
  style: _propTypes.default.object,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: _propTypes.default.node
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
Modal.Actions = _ModalActions.default;
Modal.Content = _ModalContent.default;
Modal.Description = _ModalDescription.default;
Modal.Dimmer = _ModalDimmer.default;
Modal.Header = _ModalHeader.default;
var _default = Modal;
exports.default = _default;