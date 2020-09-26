"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("react");

var _lib = require("../../lib");

var _TransitionGroup = _interopRequireDefault(require("./TransitionGroup"));

var _computeStatuses = require("./utils/computeStatuses");

var _TRANSITION_CALLBACK_, _TRANSITION_STYLE_TYP;

var TRANSITION_CALLBACK_TYPE = (_TRANSITION_CALLBACK_ = {}, _TRANSITION_CALLBACK_[_computeStatuses.TRANSITION_STATUS_ENTERED] = 'show', _TRANSITION_CALLBACK_[_computeStatuses.TRANSITION_STATUS_EXITED] = 'hide', _TRANSITION_CALLBACK_);
var TRANSITION_STYLE_TYPE = (_TRANSITION_STYLE_TYP = {}, _TRANSITION_STYLE_TYP[_computeStatuses.TRANSITION_STATUS_ENTERING] = 'show', _TRANSITION_STYLE_TYP[_computeStatuses.TRANSITION_STATUS_EXITING] = 'hide', _TRANSITION_STYLE_TYP);
/**
 * A transition is an animation usually used to move content in or out of view.
 */

var Transition = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Transition, _Component);

  function Transition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      status: _computeStatuses.TRANSITION_STATUS_INITIAL
    };

    _this.handleStart = function (nextStatus) {
      var duration = _this.props.duration;
      var durationType = TRANSITION_CALLBACK_TYPE[nextStatus];
      var durationValue = (0, _lib.normalizeTransitionDuration)(duration, durationType);
      _this.timeoutId = setTimeout(function () {
        return _this.setState({
          status: nextStatus
        });
      }, durationValue);
    };

    _this.updateStatus = function (prevState) {
      if (prevState.status !== _this.state.status) {
        // Timeout should be cleared in any case as previous can lead set to unexpected `nextStatus`
        clearTimeout(_this.timeoutId);

        if (_this.state.nextStatus) {
          _this.handleStart(_this.state.nextStatus);
        }
      }

      if (!prevState.animating && _this.state.animating) {
        (0, _invoke2.default)(_this.props, 'onStart', null, (0, _extends2.default)({}, _this.props, {
          status: _this.state.status
        }));
      }

      if (prevState.animating && !_this.state.animating) {
        var callback = _this.state.status === _computeStatuses.TRANSITION_STATUS_ENTERED ? 'onShow' : 'onHide';
        (0, _invoke2.default)(_this.props, 'onComplete', null, (0, _extends2.default)({}, _this.props, {
          status: _this.state.status
        }));
        (0, _invoke2.default)(_this.props, callback, null, (0, _extends2.default)({}, _this.props, {
          status: _this.state.status
        }));
      }
    };

    _this.computeClasses = function () {
      var _this$props = _this.props,
          animation = _this$props.animation,
          directional = _this$props.directional,
          children = _this$props.children;
      var _this$state = _this.state,
          animating = _this$state.animating,
          status = _this$state.status;
      var childClasses = (0, _get2.default)(children, 'props.className');
      var isDirectional = (0, _isNil2.default)(directional) ? (0, _includes2.default)(_lib.SUI.DIRECTIONAL_TRANSITIONS, animation) : directional;

      if (isDirectional) {
        return (0, _clsx.default)(animation, childClasses, (0, _lib.useKeyOnly)(animating, 'animating'), (0, _lib.useKeyOnly)(status === _computeStatuses.TRANSITION_STATUS_ENTERING, 'in'), (0, _lib.useKeyOnly)(status === _computeStatuses.TRANSITION_STATUS_EXITING, 'out'), (0, _lib.useKeyOnly)(status === _computeStatuses.TRANSITION_STATUS_EXITED, 'hidden'), (0, _lib.useKeyOnly)(status !== _computeStatuses.TRANSITION_STATUS_EXITED, 'visible'), 'transition');
      }

      return (0, _clsx.default)(animation, childClasses, (0, _lib.useKeyOnly)(animating, 'animating transition'));
    };

    _this.computeStyle = function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          duration = _this$props2.duration;
      var status = _this.state.status;
      var childStyle = (0, _get2.default)(children, 'props.style');
      var type = TRANSITION_STYLE_TYPE[status];
      var animationDuration = type && (0, _lib.normalizeTransitionDuration)(duration, type) + "ms";
      return (0, _extends2.default)({}, childStyle, {
        animationDuration: animationDuration
      });
    };

    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var derivedState = (0, _computeStatuses.computeStatuses)({
      mountOnShow: props.mountOnShow,
      status: state.status,
      transitionOnMount: props.transitionOnMount,
      visible: props.visible,
      unmountOnHide: props.unmountOnHide
    });
    return derivedState;
  };

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus({});
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    this.updateStatus(prevState);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeoutId);
  } // ----------------------------------------
  // Callback handling
  // ----------------------------------------
  ;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var children = this.props.children;
    var status = this.state.status;

    if (status === _computeStatuses.TRANSITION_STATUS_UNMOUNTED) {
      return null;
    }

    return /*#__PURE__*/(0, _react.cloneElement)(children, {
      className: this.computeClasses(),
      style: this.computeStyle()
    });
  };

  return Transition;
}(_react.Component);

exports.default = Transition;
Transition.INITIAL = _computeStatuses.TRANSITION_STATUS_INITIAL;
Transition.ENTERED = _computeStatuses.TRANSITION_STATUS_ENTERED;
Transition.ENTERING = _computeStatuses.TRANSITION_STATUS_ENTERING;
Transition.EXITED = _computeStatuses.TRANSITION_STATUS_EXITED;
Transition.EXITING = _computeStatuses.TRANSITION_STATUS_EXITING;
Transition.UNMOUNTED = _computeStatuses.TRANSITION_STATUS_UNMOUNTED;
Transition.Group = _TransitionGroup.default;
Transition.handledProps = ["animation", "children", "directional", "duration", "mountOnShow", "onComplete", "onHide", "onShow", "onStart", "reactKey", "transitionOnMount", "unmountOnHide", "visible"];
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Named animation event to used. Must be defined in CSS. */
  animation: _propTypes.default.oneOfType([_propTypes.default.oneOf(_lib.SUI.TRANSITIONS), _propTypes.default.string]),

  /** Primary content. */
  children: _propTypes.default.element.isRequired,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: _propTypes.default.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    hide: _propTypes.default.number,
    show: _propTypes.default.number
  }), _propTypes.default.string]),

  /** Show the component; triggers the enter or exit animation. */
  visible: _propTypes.default.bool,

  /** Wait until the first "enter" transition to mount the component (add it to the DOM). */
  mountOnShow: _propTypes.default.bool,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onComplete: _propTypes.default.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onHide: _propTypes.default.func,

  /**
   * Callback on each transition that changes visibility to shown.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onShow: _propTypes.default.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with status.
   */
  onStart: _propTypes.default.func,

  /** React's key of the element. */
  reactKey: _propTypes.default.string,

  /** Run the enter animation when the component mounts, if it is initially shown. */
  transitionOnMount: _propTypes.default.bool,

  /** Unmount the component (remove it from the DOM) when it is not shown. */
  unmountOnHide: _propTypes.default.bool
} : {};
Transition.defaultProps = {
  animation: 'fade',
  duration: 500,
  visible: true,
  mountOnShow: true,
  transitionOnMount: false,
  unmountOnHide: false
};