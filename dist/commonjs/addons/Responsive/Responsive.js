"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _isVisible = _interopRequireDefault(require("./lib/isVisible"));

/**
 * Responsive can control visibility of content.
 *
 * @deprecated This component is deprecated and will be removed in next major release.
 */
var Responsive = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Responsive, _Component);

  function Responsive() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      visible: true
    };

    _this.handleResize = function (e) {
      if (_this.ticking) return;
      _this.ticking = true;
      _this.frameId = requestAnimationFrame(function () {
        return _this.handleUpdate(e);
      });
    };

    _this.handleUpdate = function (e) {
      _this.ticking = false;
      var visible = _this.state.visible;
      var width = (0, _invoke2.default)(_this.props, 'getWidth');
      var nextVisible = (0, _isVisible.default)(width, _this.props);
      if (visible !== nextVisible) _this.setState({
        visible: nextVisible
      });
      (0, _invoke2.default)(_this.props, 'onUpdate', e, (0, _extends2.default)({}, _this.props, {
        width: width
      }));
    };

    return _this;
  }

  Responsive.getDerivedStateFromProps = function getDerivedStateFromProps(props) {
    var width = (0, _invoke2.default)(props, 'getWidth');
    var visible = (0, _isVisible.default)(width, props);
    return {
      visible: visible
    };
  };

  var _proto = Responsive.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var fireOnMount = this.props.fireOnMount;

    if (process.env.NODE_ENV !== 'production') {
      if (!Responsive.__deprecationWarningWasRaised) {
        Responsive.__deprecationWarningWasRaised = true; // eslint-disable-next-line no-console

        console.warn('Warning: "Responsive" component from Semantic UI React is deprecated and will be removed in the next major release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4008');
      }
    }

    _lib.eventStack.sub('resize', this.handleResize, {
      target: 'window'
    });

    if (fireOnMount) this.handleUpdate();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _lib.eventStack.unsub('resize', this.handleResize, {
      target: 'window'
    });

    cancelAnimationFrame(this.frameId);
  } // ----------------------------------------
  // Event handlers
  // ----------------------------------------
  ;

  // ----------------------------------------
  // Render
  // ----------------------------------------
  _proto.render = function render() {
    var children = this.props.children;
    var visible = this.state.visible;
    var ElementType = (0, _lib.getElementType)(Responsive, this.props);
    var rest = (0, _lib.getUnhandledProps)(Responsive, this.props);
    if (visible) return /*#__PURE__*/_react.default.createElement(ElementType, rest, children);
    return null;
  };

  return Responsive;
}(_react.Component);

exports.default = Responsive;
Responsive.handledProps = ["as", "children", "fireOnMount", "getWidth", "maxWidth", "minWidth", "onUpdate"];
Responsive.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Primary content. */
  children: _propTypes.default.node,

  /** Fires callbacks immediately after mount. */
  fireOnMount: _propTypes.default.bool,

  /**
   * Called to get width of screen. Defaults to using `window.innerWidth` when in a browser;
   * otherwise, assumes a width of 0.
   */
  getWidth: _propTypes.default.func,

  /** The maximum width at which content will be displayed. */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** The minimum width at which content will be displayed. */
  minWidth: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Called on update.
   *
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onUpdate: _propTypes.default.func
} : {};
Responsive.defaultProps = {
  getWidth: function getWidth() {
    return (0, _lib.isBrowser)() ? window.innerWidth : 0;
  }
};
Responsive.onlyMobile = {
  minWidth: 320,
  maxWidth: 767
};
Responsive.onlyTablet = {
  minWidth: 768,
  maxWidth: 991
};
Responsive.onlyComputer = {
  minWidth: 992
};
Responsive.onlyLargeScreen = {
  minWidth: 1200,
  maxWidth: 1919
};
Responsive.onlyWidescreen = {
  minWidth: 1920
};

if (process.env.NODE_ENV !== 'production') {
  Responsive.__deprecationWarningWasRaised = false;
}