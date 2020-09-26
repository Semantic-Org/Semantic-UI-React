"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _values2 = _interopRequireDefault(require("lodash/values"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _has2 = _interopRequireDefault(require("lodash/has"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _mapValues2 = _interopRequireDefault(require("lodash/mapValues"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _childMapping = require("./utils/childMapping");

var _wrapChild = _interopRequireDefault(require("./utils/wrapChild"));

/**
 * A Transition.Group animates children as they mount and unmount.
 */
var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(TransitionGroup, _React$Component);

  function TransitionGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      // Keeping a callback under the state is a hack to make it accessible under getDerivedStateFromProps()
      handleOnHide: function handleOnHide(nothing, childProps) {
        var reactKey = childProps.reactKey;

        _this.setState(function (state) {
          var children = (0, _extends2.default)({}, state.children);
          delete children[reactKey];
          return {
            children: children
          };
        });
      }
    };
    return _this;
  }

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var animation = props.animation,
        duration = props.duration,
        directional = props.directional;
    var prevMapping = state.children; // A short circuit for an initial render as there will be no `prevMapping`

    if (typeof prevMapping === 'undefined') {
      return {
        children: (0, _mapValues2.default)((0, _childMapping.getChildMapping)(props.children), function (child) {
          return (0, _wrapChild.default)(child, state.handleOnHide, {
            animation: animation,
            duration: duration,
            directional: directional
          });
        })
      };
    }

    var nextMapping = (0, _childMapping.getChildMapping)(props.children);
    var children = (0, _childMapping.mergeChildMappings)(prevMapping, nextMapping);
    (0, _forEach2.default)(children, function (child, key) {
      var hasPrev = (0, _has2.default)(prevMapping, key);
      var hasNext = (0, _has2.default)(nextMapping, key);
      var prevChild = prevMapping[key];
      var isLeaving = !(0, _get2.default)(prevChild, 'props.visible'); // Heads up!
      // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped

      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = (0, _wrapChild.default)(child, state.handleOnHide, {
          animation: animation,
          duration: duration,
          directional: directional,
          transitionOnMount: true
        });
        return;
      } // Heads up!
      // An item is old (exiting), it will be picked from `prevChildren`, so it has been already
      // wrapped, so should be only updated


      if (!hasNext && hasPrev && !isLeaving) {
        children[key] = /*#__PURE__*/_react.default.cloneElement(prevChild, {
          visible: false
        });
        return;
      } // Heads up!
      // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
      // so we should wrap it again


      var _prevChild$props = prevChild.props,
          visible = _prevChild$props.visible,
          transitionOnMount = _prevChild$props.transitionOnMount;
      children[key] = (0, _wrapChild.default)(child, state.handleOnHide, {
        animation: animation,
        duration: duration,
        directional: directional,
        transitionOnMount: transitionOnMount,
        visible: visible
      });
    });
    return {
      children: children
    };
  };

  var _proto = TransitionGroup.prototype;

  _proto.render = function render() {
    var children = this.state.children;
    var ElementType = (0, _lib.getElementType)(TransitionGroup, this.props);
    var rest = (0, _lib.getUnhandledProps)(TransitionGroup, this.props);
    return /*#__PURE__*/_react.default.createElement(ElementType, rest, (0, _values2.default)(children));
  };

  return TransitionGroup;
}(_react.default.Component);

exports.default = TransitionGroup;
TransitionGroup.handledProps = ["animation", "as", "children", "directional", "duration"];
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Named animation event to used. Must be defined in CSS. */
  animation: _propTypes.default.oneOfType([_propTypes.default.oneOf(_lib.SUI.TRANSITIONS), _propTypes.default.string]),

  /** Primary content. */
  children: _propTypes.default.node,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: _propTypes.default.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    hide: _propTypes.default.number.isRequired,
    show: _propTypes.default.number.isRequired
  }), _propTypes.default.string])
} : {};
TransitionGroup.defaultProps = {
  as: _react.default.Fragment,
  animation: 'fade',
  duration: 500
};