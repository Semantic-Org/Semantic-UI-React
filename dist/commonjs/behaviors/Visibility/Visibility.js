"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _reactComponentRef = require("@fluentui/react-component-ref");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

/**
 * Visibility provides a set of callbacks for when a content appears in the viewport.
 */
var Visibility = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Visibility, _Component);

  function Visibility() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.calculations = {
      bottomPassed: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      offScreen: false,
      onScreen: false,
      topPassed: false,
      topVisible: false
    };
    _this.firedCallbacks = [];
    _this.ref = /*#__PURE__*/(0, _react.createRef)();

    _this.fire = function (_ref, value, reverse) {
      var callback = _ref.callback,
          name = _ref.name;

      if (reverse === void 0) {
        reverse = false;
      }

      var _this$props = _this.props,
          continuous = _this$props.continuous,
          once = _this$props.once; // Heads up! For the execution is required:
      // - current value correspond to the fired direction
      // - `continuous` is true or calculation values are different

      var matchesDirection = _this.calculations[value] !== reverse;
      var executionPossible = continuous || _this.calculations[value] !== _this.oldCalculations[value];
      if (matchesDirection && executionPossible) _this.execute(callback, name); // Heads up! We should remove callback from the happened when it's not `once`

      if (!once) _this.firedCallbacks = (0, _without2.default)(_this.firedCallbacks, name);
    };

    _this.handleUpdate = function () {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(_this.update);
    };

    _this.update = function () {
      if (!_this.mounted) return;
      _this.ticking = false;
      _this.oldCalculations = _this.calculations;
      _this.calculations = _this.computeCalculations();
      _this.pageYOffset = _this.getPageYOffset();
      var _this$props2 = _this.props,
          onBottomPassed = _this$props2.onBottomPassed,
          onBottomPassedReverse = _this$props2.onBottomPassedReverse,
          onBottomVisible = _this$props2.onBottomVisible,
          onBottomVisibleReverse = _this$props2.onBottomVisibleReverse,
          onPassing = _this$props2.onPassing,
          onPassingReverse = _this$props2.onPassingReverse,
          onTopPassed = _this$props2.onTopPassed,
          onTopPassedReverse = _this$props2.onTopPassedReverse,
          onTopVisible = _this$props2.onTopVisible,
          onTopVisibleReverse = _this$props2.onTopVisibleReverse,
          onOffScreen = _this$props2.onOffScreen,
          onOnScreen = _this$props2.onOnScreen,
          updateOn = _this$props2.updateOn;
      var forward = {
        bottomPassed: {
          callback: onBottomPassed,
          name: 'onBottomPassed'
        },
        bottomVisible: {
          callback: onBottomVisible,
          name: 'onBottomVisible'
        },
        passing: {
          callback: onPassing,
          name: 'onPassing'
        },
        offScreen: {
          callback: onOffScreen,
          name: 'onOffScreen'
        },
        onScreen: {
          callback: onOnScreen,
          name: 'onOnScreen'
        },
        topPassed: {
          callback: onTopPassed,
          name: 'onTopPassed'
        },
        topVisible: {
          callback: onTopVisible,
          name: 'onTopVisible'
        }
      };
      var reverse = {
        bottomPassed: {
          callback: onBottomPassedReverse,
          name: 'onBottomPassedReverse'
        },
        bottomVisible: {
          callback: onBottomVisibleReverse,
          name: 'onBottomVisibleReverse'
        },
        passing: {
          callback: onPassingReverse,
          name: 'onPassingReverse'
        },
        topPassed: {
          callback: onTopPassedReverse,
          name: 'onTopPassedReverse'
        },
        topVisible: {
          callback: onTopVisibleReverse,
          name: 'onTopVisibleReverse'
        }
      };
      (0, _invoke2.default)(_this.props, 'onUpdate', null, (0, _extends2.default)({}, _this.props, {
        calculations: _this.calculations
      }));

      _this.fireOnPassed(); // Heads up! Reverse callbacks should be fired first


      (0, _forEach2.default)(reverse, function (data, value) {
        return _this.fire(data, value, true);
      });
      (0, _forEach2.default)(forward, function (data, value) {
        return _this.fire(data, value);
      });
      if (updateOn === 'repaint') _this.handleUpdate();
    };

    return _this;
  }

  var _proto = Visibility.prototype;

  // ----------------------------------------
  // Lifecycle
  // ----------------------------------------
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    if (!(0, _lib.isBrowser)()) return;
    var _this$props3 = this.props,
        context = _this$props3.context,
        fireOnMount = _this$props3.fireOnMount,
        updateOn = _this$props3.updateOn;
    this.pageYOffset = this.getPageYOffset();
    this.attachHandlers(context, updateOn);
    if (fireOnMount) this.update();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var cleanHappened = prevProps.continuous !== this.props.continuous || prevProps.once !== this.props.once || prevProps.updateOn !== this.props.updateOn; // Heads up! We should clean up array of happened callbacks, if values of these props are changed

    if (cleanHappened) this.firedCallbacks = [];

    if (prevProps.context !== this.props.context || prevProps.updateOn !== this.props.updateOn) {
      this.unattachHandlers(prevProps.context);
      this.attachHandlers(this.props.context, this.props.updateOn);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var context = this.props.context;
    this.unattachHandlers(context);
    this.mounted = false;
  };

  _proto.attachHandlers = function attachHandlers(context, updateOn) {
    if (updateOn === 'events') {
      if (context) {
        _lib.eventStack.sub('resize', this.handleUpdate, {
          target: context
        });

        _lib.eventStack.sub('scroll', this.handleUpdate, {
          target: context
        });
      }

      return;
    } // Heads up!
    // We will deal with `repaint` there


    this.handleUpdate();
  };

  _proto.unattachHandlers = function unattachHandlers(context) {
    if (context) {
      _lib.eventStack.unsub('resize', this.handleUpdate, {
        target: context
      });

      _lib.eventStack.unsub('scroll', this.handleUpdate, {
        target: context
      });
    }

    if (this.frameId) cancelAnimationFrame(this.frameId);
  } // ----------------------------------------
  // Callback handling
  // ----------------------------------------
  ;

  _proto.execute = function execute(callback, name) {
    var continuous = this.props.continuous;
    if (!callback) return; // Heads up! When `continuous` is true, callback will be fired always

    if (!continuous && (0, _includes2.default)(this.firedCallbacks, name)) return;
    callback(null, (0, _extends2.default)({}, this.props, {
      calculations: this.calculations
    }));
    this.firedCallbacks.push(name);
  };

  _proto.fireOnPassed = function fireOnPassed() {
    var _this2 = this;

    var _this$calculations = this.calculations,
        percentagePassed = _this$calculations.percentagePassed,
        pixelsPassed = _this$calculations.pixelsPassed;
    var onPassed = this.props.onPassed;
    (0, _forEach2.default)(onPassed, function (callback, passed) {
      var pixelsValue = Number(passed);

      if (pixelsValue && pixelsPassed >= pixelsValue) {
        _this2.execute(callback, passed);

        return;
      }

      var matchPercentage = ("" + passed).match(/^(\d+)%$/);
      if (!matchPercentage) return;
      var percentageValue = Number(matchPercentage[1]) / 100;
      if (percentagePassed >= percentageValue) _this2.execute(callback, passed);
    });
  };

  // ----------------------------------------
  // Helpers
  // ----------------------------------------
  _proto.computeCalculations = function computeCalculations() {
    var offset = this.props.offset;

    var _this$ref$current$get = this.ref.current.getBoundingClientRect(),
        bottom = _this$ref$current$get.bottom,
        height = _this$ref$current$get.height,
        top = _this$ref$current$get.top,
        width = _this$ref$current$get.width;

    var _normalizeOffset = (0, _lib.normalizeOffset)(offset),
        topOffset = _normalizeOffset[0],
        bottomOffset = _normalizeOffset[1];

    var newOffset = this.getPageYOffset();
    var direction = newOffset > this.pageYOffset ? 'down' : 'up';
    var topPassed = top < topOffset;
    var bottomPassed = bottom < bottomOffset;
    var pixelsPassed = bottomPassed ? 0 : Math.max(top * -1, 0);
    var percentagePassed = pixelsPassed / height;
    var bottomVisible = bottom >= bottomOffset && bottom <= window.innerHeight;
    var topVisible = top >= topOffset && top <= window.innerHeight;
    var fits = topVisible && bottomVisible;
    var passing = topPassed && !bottomPassed;
    var onScreen = (topVisible || topPassed) && !bottomPassed;
    var offScreen = !onScreen;
    return {
      bottomPassed: bottomPassed,
      bottomVisible: bottomVisible,
      direction: direction,
      fits: fits,
      height: height,
      passing: passing,
      percentagePassed: percentagePassed,
      pixelsPassed: pixelsPassed,
      offScreen: offScreen,
      onScreen: onScreen,
      topPassed: topPassed,
      topVisible: topVisible,
      width: width
    };
  };

  _proto.getPageYOffset = function getPageYOffset() {
    var context = this.props.context;

    if (context) {
      // Heads up! `window` doesn't have `pageYOffset` property
      return context === window ? window.pageYOffset : context.scrollTop;
    }

    return 0;
  } // ----------------------------------------
  // Render
  // ----------------------------------------
  ;

  _proto.render = function render() {
    var children = this.props.children;
    var ElementType = (0, _lib.getElementType)(Visibility, this.props);
    var rest = (0, _lib.getUnhandledProps)(Visibility, this.props);
    return /*#__PURE__*/_react.default.createElement(_reactComponentRef.Ref, {
      innerRef: this.ref
    }, /*#__PURE__*/_react.default.createElement(ElementType, rest, children));
  };

  return Visibility;
}(_react.Component);

exports.default = Visibility;
Visibility.handledProps = ["as", "children", "context", "continuous", "fireOnMount", "offset", "onBottomPassed", "onBottomPassedReverse", "onBottomVisible", "onBottomVisibleReverse", "onOffScreen", "onOnScreen", "onPassed", "onPassing", "onPassingReverse", "onTopPassed", "onTopPassedReverse", "onTopVisible", "onTopVisibleReverse", "onUpdate", "once", "updateOn"];
Visibility.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Context which visibility should attach onscroll events. */
  context: _propTypes.default.object,

  /**
   * When set to true a callback will occur anytime an element passes a condition not just immediately after the
   * threshold is met.
   */
  continuous: _propTypes.default.bool,

  /** Fires callbacks immediately after mount. */
  fireOnMount: _propTypes.default.bool,

  /**
   * Element's bottom edge has passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassed: _propTypes.default.func,

  /**
   * Element's bottom edge has not passed top of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomPassedReverse: _propTypes.default.func,

  /**
   * Element's bottom edge has passed bottom of screen
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisible: _propTypes.default.func,

  /**
   * Element's bottom edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onBottomVisibleReverse: _propTypes.default.func,

  /**
   * Value that context should be adjusted in pixels. Useful for making content appear below content fixed to the
   * page.
   */
  offset: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]))]),

  /** When set to false a callback will occur each time an element passes the threshold for a condition. */
  once: _propTypes.default.bool,

  /** Element is not visible on the screen. */
  onPassed: _propTypes.default.object,

  /**
   * Any part of an element is visible on screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassing: _propTypes.default.func,

  /**
   * Element's top has not passed top of screen but bottom has.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onPassingReverse: _propTypes.default.func,

  /**
   * Element is not visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOffScreen: _propTypes.default.func,

  /**
   * Element is visible on the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onOnScreen: _propTypes.default.func,

  /**
   * Element's top edge has passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassed: _propTypes.default.func,

  /**
   * Element's top edge has not passed top of the screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopPassedReverse: _propTypes.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisible: _propTypes.default.func,

  /**
   * Element's top edge has not passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onTopVisibleReverse: _propTypes.default.func,

  /**
   * Element's top edge has passed bottom of screen.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUpdate: _propTypes.default.func,

  /**
   * Allows to choose the mode of the position calculations:
   * - `events` - (default) update and fire callbacks only on scroll/resize events
   * - `repaint` - update and fire callbacks on browser repaint (animation frames)
   */
  updateOn: _propTypes.default.oneOf(['events', 'repaint'])
} : {};
Visibility.defaultProps = {
  context: (0, _lib.isBrowser)() ? window : null,
  continuous: false,
  offset: [0, 0],
  once: true,
  updateOn: 'events'
};