"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _isUndefined2 = _interopRequireDefault(require("lodash/isUndefined"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _Transition = _interopRequireDefault(require("../../modules/Transition"));

var _computeStatuses = require("../../modules/Transition/utils/computeStatuses");

var _lib = require("../../lib");

/**
 * A sugar for `Portal` and `Transition`.
 * @see Portal
 * @see Transition
 */
var TransitionablePortal = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(TransitionablePortal, _Component);

  function TransitionablePortal() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {};

    _this.handlePortalClose = function () {
      _this.setState({
        portalOpen: -1
      });
    };

    _this.handlePortalOpen = function () {
      _this.setState({
        portalOpen: true
      });
    };

    _this.handleTransitionHide = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;

      _this.setState({
        transitionVisible: false
      });

      (0, _invoke2.default)(_this.props, 'onClose', null, (0, _extends2.default)({}, data, {
        portalOpen: false,
        transitionVisible: false
      }));
      (0, _invoke2.default)(_this.props, 'onHide', null, (0, _extends2.default)({}, data, {
        portalOpen: portalOpen,
        transitionVisible: false
      }));
    };

    _this.handleTransitionStart = function (nothing, data) {
      var portalOpen = _this.state.portalOpen;
      var status = data.status;
      var transitionVisible = status === _computeStatuses.TRANSITION_STATUS_ENTERING;
      (0, _invoke2.default)(_this.props, 'onStart', null, (0, _extends2.default)({}, data, {
        portalOpen: portalOpen,
        transitionVisible: transitionVisible
      })); // Heads up! TransitionablePortal fires onOpen callback on the start of transition animation

      if (!transitionVisible) return;

      _this.setState({
        transitionVisible: transitionVisible
      });

      (0, _invoke2.default)(_this.props, 'onOpen', null, (0, _extends2.default)({}, data, {
        transitionVisible: transitionVisible,
        portalOpen: true
      }));
    };

    return _this;
  }

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  TransitionablePortal.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    // This is definitely a hack :(
    //
    // It's coupled with handlePortalClose() for force set the state of `portalOpen` omitting
    // props.open. It's related to implementation of the component itself as `onClose()` will be
    // called after a transition will end.
    // https://github.com/Semantic-Org/Semantic-UI-React/issues/2382
    if (state.portalOpen === -1) {
      return {
        portalOpen: false
      };
    }

    if ((0, _isUndefined2.default)(props.open)) {
      return null;
    }

    return {
      portalOpen: props.open
    };
  } // ----------------------------------------
  // Callback handling
  // ----------------------------------------
  ;

  var _proto = TransitionablePortal.prototype;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        transition = _this$props.transition;
    var _this$state = this.state,
        portalOpen = _this$state.portalOpen,
        transitionVisible = _this$state.transitionVisible;
    var open = portalOpen || transitionVisible;
    var rest = (0, _lib.getUnhandledProps)(TransitionablePortal, this.props);
    return /*#__PURE__*/_react.default.createElement(_Portal.default, (0, _extends2.default)({}, rest, {
      open: open,
      onOpen: this.handlePortalOpen,
      onClose: this.handlePortalClose
    }), /*#__PURE__*/_react.default.createElement(_Transition.default, (0, _extends2.default)({}, transition, {
      transitionOnMount: true,
      onStart: this.handleTransitionStart,
      onHide: this.handleTransitionHide,
      visible: portalOpen
    }), children));
  };

  return TransitionablePortal;
}(_react.Component);

exports.default = TransitionablePortal;
TransitionablePortal.handledProps = ["children", "onClose", "onHide", "onOpen", "onStart", "open", "transition"];
TransitionablePortal.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Primary content. */
  children: _propTypes.default.node.isRequired,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback on each transition that changes visibility to hidden.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onHide: _propTypes.default.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and internal state.
   */
  onOpen: _propTypes.default.func,

  /**
   * Callback on animation start.
   *
   * @param {null}
   * @param {object} data - All props with transition status and internal state.
   */
  onStart: _propTypes.default.func,

  /** Controls whether or not the portal is displayed. */
  open: _propTypes.default.bool,

  /** Transition props. */
  transition: _propTypes.default.object
} : {};
TransitionablePortal.defaultProps = {
  transition: {
    animation: 'scale',
    duration: 400
  }
};