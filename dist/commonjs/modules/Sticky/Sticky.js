"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

/**
 * Sticky content stays fixed to the browser viewport while another column of content is visible on the page.
 */
var Sticky = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Sticky, _Component);

  function Sticky() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      active: true,
      sticky: false
    };
    _this.stickyRef = /*#__PURE__*/(0, _react.createRef)();
    _this.triggerRef = /*#__PURE__*/(0, _react.createRef)();

    _this.addListeners = function (scrollContext) {
      var scrollContextNode = (0, _reactComponentRef.isRefObject)(scrollContext) ? scrollContext.current : scrollContext;

      if (scrollContextNode) {
        _lib.eventStack.sub('resize', _this.handleUpdate, {
          target: scrollContextNode
        });

        _lib.eventStack.sub('scroll', _this.handleUpdate, {
          target: scrollContextNode
        });
      }
    };

    _this.removeListeners = function (scrollContext) {
      var scrollContextNode = (0, _reactComponentRef.isRefObject)(scrollContext) ? scrollContext.current : scrollContext;

      if (scrollContextNode) {
        _lib.eventStack.unsub('resize', _this.handleUpdate, {
          target: scrollContextNode
        });

        _lib.eventStack.unsub('scroll', _this.handleUpdate, {
          target: scrollContextNode
        });
      }
    };

    _this.update = function (e) {
      var pushing = _this.state.pushing;
      _this.ticking = false;

      _this.assignRects();

      if (pushing) {
        if (_this.didReachStartingPoint()) return _this.stickToContextTop(e);
        if (_this.didTouchScreenBottom()) return _this.stickToScreenBottom(e);
        return _this.stickToContextBottom(e);
      }

      if (_this.isOversized()) {
        if (_this.contextRect.top > 0) return _this.stickToContextTop(e);
        if (_this.contextRect.bottom < window.innerHeight) return _this.stickToContextBottom(e);
      }

      if (_this.didTouchScreenTop()) {
        if (_this.didReachContextBottom()) return _this.stickToContextBottom(e);
        return _this.stickToScreenTop(e);
      }

      return _this.stickToContextTop(e);
    };

    _this.handleUpdate = function (e) {
      if (!_this.ticking) {
        _this.ticking = true;
        _this.frameId = requestAnimationFrame(function () {
          return _this.update(e);
        });
      }
    };

    _this.assignRects = function () {
      var context = _this.props.context;
      var contextNode = (0, _reactComponentRef.isRefObject)(context) ? context.current : context || document.body;
      _this.triggerRect = _this.triggerRef.current.getBoundingClientRect();
      _this.contextRect = contextNode.getBoundingClientRect();
      _this.stickyRect = _this.stickyRef.current.getBoundingClientRect();
    };

    _this.didReachContextBottom = function () {
      var offset = _this.props.offset;
      return _this.stickyRect.height + offset >= _this.contextRect.bottom;
    };

    _this.didReachStartingPoint = function () {
      return _this.stickyRect.top <= _this.triggerRect.top;
    };

    _this.didTouchScreenTop = function () {
      return _this.triggerRect.top < _this.props.offset;
    };

    _this.didTouchScreenBottom = function () {
      var bottomOffset = _this.props.bottomOffset;
      return _this.contextRect.bottom + bottomOffset > window.innerHeight;
    };

    _this.isOversized = function () {
      return _this.stickyRect.height > window.innerHeight;
    };

    _this.pushing = function (pushing) {
      var possible = _this.props.pushing;
      if (possible) _this.setState({
        pushing: pushing
      });
    };

    _this.stick = function (e, bound) {
      _this.setState({
        bound: bound,
        sticky: true
      });

      (0, _invoke2.default)(_this.props, 'onStick', e, _this.props);
    };

    _this.unstick = function (e, bound) {
      _this.setState({
        bound: bound,
        sticky: false
      });

      (0, _invoke2.default)(_this.props, 'onUnstick', e, _this.props);
    };

    _this.stickToContextBottom = function (e) {
      (0, _invoke2.default)(_this.props, 'onBottom', e, _this.props);

      _this.stick(e, true);

      _this.pushing(true);
    };

    _this.stickToContextTop = function (e) {
      (0, _invoke2.default)(_this.props, 'onTop', e, _this.props);

      _this.unstick(e, false);

      _this.pushing(false);
    };

    _this.stickToScreenBottom = function (e) {
      var bottom = _this.props.bottomOffset;

      _this.stick(e, false);

      _this.setState({
        bottom: bottom,
        top: null
      });
    };

    _this.stickToScreenTop = function (e) {
      var top = _this.props.offset;

      _this.stick(e, false);

      _this.setState({
        top: top,
        bottom: null
      });
    };

    return _this;
  }

  var _proto = Sticky.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (!(0, _lib.isBrowser)()) return;
    var active = this.state.active;

    if (active) {
      this.handleUpdate();
      this.addListeners(this.props.scrollContext);
    }
  };

  Sticky.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (state.active !== props.active && !props.active) {
      return {
        active: props.active,
        sticky: false
      };
    }

    return {
      active: props.active
    };
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.active === this.state.active) {
      if (prevProps.scrollContext !== this.props.scrollContext) {
        this.removeListeners(prevProps.scrollContext);
        this.addListeners(this.props.scrollContext);
      }

      return;
    }

    if (this.state.active) {
      this.handleUpdate();
      this.addListeners(this.props.scrollContext);
      return;
    }

    this.removeListeners(prevProps.scrollContext);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!(0, _lib.isBrowser)()) return;
    var active = this.state.active;

    if (active) {
      this.removeListeners(this.props.scrollContext);
      cancelAnimationFrame(this.frameId);
    }
  } // ----------------------------------------
  // Events
  // ----------------------------------------
  ;

  _proto.computeStyle = function computeStyle() {
    var styleElement = this.props.styleElement;
    var _this$state = this.state,
        bottom = _this$state.bottom,
        bound = _this$state.bound,
        sticky = _this$state.sticky,
        top = _this$state.top;
    if (!sticky) return styleElement;
    return (0, _extends2.default)({
      bottom: bound ? 0 : bottom,
      top: bound ? undefined : top,
      width: this.triggerRect.width
    }, styleElement);
  } // Return true when the component reached the bottom of the context
  ;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
    var _this$state2 = this.state,
        bottom = _this$state2.bottom,
        bound = _this$state2.bound,
        sticky = _this$state2.sticky;
    var rest = (0, _lib.getUnhandledProps)(Sticky, this.props);
    var ElementType = (0, _lib.getElementType)(Sticky, this.props);
    var containerClasses = (0, _clsx.default)(sticky && 'ui', sticky && 'stuck-container', sticky && (bound ? 'bound-container' : 'fixed-container'), className);
    var elementClasses = (0, _clsx.default)('ui', sticky && (bound ? 'bound bottom' : 'fixed'), sticky && !bound && (bottom === null ? 'top' : 'bottom'), 'sticky');
    var triggerStyles = sticky && this.stickyRect ? {
      height: this.stickyRect.height
    } : {};
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: containerClasses
    }), /*#__PURE__*/_react.default.createElement("div", {
      ref: this.triggerRef,
      style: triggerStyles
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: elementClasses,
      ref: this.stickyRef,
      style: this.computeStyle()
    }, children));
  };

  return Sticky;
}(_react.Component);

exports.default = Sticky;
Sticky.handledProps = ["active", "as", "bottomOffset", "children", "className", "context", "offset", "onBottom", "onStick", "onTop", "onUnstick", "pushing", "scrollContext", "styleElement"];
Sticky.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** A Sticky can be active. */
  active: _propTypes.default.bool,

  /** Offset in pixels from the bottom of the screen when fixing element to viewport. */
  bottomOffset: _propTypes.default.number,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Context which sticky element should stick to. */
  context: _propTypes.default.oneOfType([_lib.customPropTypes.domNode, _lib.customPropTypes.refObject]),

  /** Offset in pixels from the top of the screen when fixing element to viewport. */
  offset: _propTypes.default.number,

  /**
   * Callback when element is bound to bottom of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBottom: _propTypes.default.func,

  /**
   * Callback when element is fixed to page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onStick: _propTypes.default.func,

  /**
   * Callback when element is bound to top of parent container.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onTop: _propTypes.default.func,

  /**
   * Callback when element is unfixed from page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onUnstick: _propTypes.default.func,

  /** Whether element should be "pushed" by the viewport, attaching to the bottom of the screen when scrolling up. */
  pushing: _propTypes.default.bool,

  /** Context which sticky should attach onscroll events. */
  scrollContext: _propTypes.default.oneOfType([_lib.customPropTypes.domNode, _lib.customPropTypes.refObject]),

  /** Custom style for sticky element. */
  styleElement: _propTypes.default.object
} : {};
Sticky.defaultProps = {
  active: true,
  bottomOffset: 0,
  offset: 0,
  scrollContext: (0, _lib.isBrowser)() ? window : null
};