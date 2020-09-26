"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _includes2 = _interopRequireDefault(require("lodash/includes"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _clsx = _interopRequireDefault(require("clsx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var warnIfPropsAreInvalid = function warnIfPropsAreInvalid(props, state) {
  var exclusive = props.exclusive;
  var activeIndex = state.activeIndex;
  /* eslint-disable no-console */

  if (exclusive && typeof activeIndex !== 'number') {
    console.error('`activeIndex` must be a number if `exclusive` is true');
  } else if (!exclusive && !(0, _isArray2.default)(activeIndex)) {
    console.error('`activeIndex` must be an array if `exclusive` is false');
  }
  /* eslint-enable no-console */

};
/**
 * An Accordion can contain sub-accordions.
 */


var AccordionAccordion = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(AccordionAccordion, _Component);

  function AccordionAccordion() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.computeNewIndex = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index; // check to see if index is in array, and remove it, if not then add it

      return (0, _includes2.default)(activeIndex, index) ? (0, _without2.default)(activeIndex, index) : [].concat(activeIndex, [index]);
    };

    _this.handleTitleClick = function (e, titleProps) {
      var index = titleProps.index;

      _this.setState({
        activeIndex: _this.computeNewIndex(index)
      });

      (0, _invoke2.default)(_this.props, 'onTitleClick', e, titleProps);
    };

    _this.isIndexActive = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;
      return exclusive ? activeIndex === index : (0, _includes2.default)(activeIndex, index);
    };

    return _this;
  }

  var _proto = AccordionAccordion.prototype;

  _proto.getInitialAutoControlledState = function getInitialAutoControlledState(_ref) {
    var exclusive = _ref.exclusive;
    return {
      activeIndex: exclusive ? -1 : []
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      warnIfPropsAreInvalid(this.props, this.state);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (process.env.NODE_ENV !== 'production') {
      warnIfPropsAreInvalid(this.props, this.state);
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        panels = _this$props.panels;
    var classes = (0, _clsx.default)('accordion', className);
    var rest = (0, _lib.getUnhandledProps)(AccordionAccordion, this.props);
    var ElementType = (0, _lib.getElementType)(AccordionAccordion, this.props);
    return /*#__PURE__*/_react.default.createElement(ElementType, (0, _extends2.default)({}, rest, {
      className: classes
    }), _lib.childrenUtils.isNil(children) ? (0, _map2.default)(panels, function (panel, index) {
      return _AccordionPanel.default.create(panel, {
        defaultProps: {
          active: _this2.isIndexActive(index),
          index: index,
          onTitleClick: _this2.handleTitleClick
        }
      });
    }) : children);
  };

  return AccordionAccordion;
}(_lib.ModernAutoControlledComponent);

exports.default = AccordionAccordion;
AccordionAccordion.handledProps = ["activeIndex", "as", "children", "className", "defaultActiveIndex", "exclusive", "onTitleClick", "panels"];
AccordionAccordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** Index of the currently active panel. */
  activeIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number])]),

  /** Primary content. */
  children: _propTypes.default.node,

  /** Additional classes. */
  className: _propTypes.default.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number])]),

  /** Only allow one panel open at a time. */
  exclusive: _propTypes.default.bool,

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.func]),

  /** Shorthand array of props for Accordion. */
  panels: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _propTypes.default.arrayOf(_propTypes.default.shape({
    content: _lib.customPropTypes.itemShorthand,
    title: _lib.customPropTypes.itemShorthand
  }))])
} : {};
AccordionAccordion.defaultProps = {
  exclusive: true
};
AccordionAccordion.autoControlledProps = ['activeIndex'];
AccordionAccordion.create = (0, _lib.createShorthandFactory)(AccordionAccordion, function (content) {
  return {
    content: content
  };
});