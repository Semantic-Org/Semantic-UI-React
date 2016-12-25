'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _AccordionContent = require('./AccordionContent');

var _AccordionContent2 = _interopRequireDefault(_AccordionContent);

var _AccordionTitle = require('./AccordionTitle');

var _AccordionTitle2 = _interopRequireDefault(_AccordionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * An accordion allows users to toggle the display of sections of content
 */
var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _ref;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args)));

    _this.state = {};

    _this.handleTitleClick = function (e, index) {
      var _this$props = _this.props,
          onTitleClick = _this$props.onTitleClick,
          exclusive = _this$props.exclusive;
      var activeIndex = _this.state.activeIndex;


      var newIndex = void 0;
      if (exclusive) {
        newIndex = index === activeIndex ? -1 : index;
      } else {
        // check to see if index is in array, and remove it, if not then add it
        newIndex = (0, _includes3.default)(activeIndex, index) ? (0, _without3.default)(activeIndex, index) : [].concat(_toConsumableArray(activeIndex), [index]);
      }
      _this.trySetState({ activeIndex: newIndex });
      if (onTitleClick) onTitleClick(e, index);
    };

    _this.isIndexActive = function (index) {
      var exclusive = _this.props.exclusive;
      var activeIndex = _this.state.activeIndex;

      return exclusive ? activeIndex === index : (0, _includes3.default)(activeIndex, index);
    };

    _this.renderChildren = function () {
      var children = _this.props.children;

      var titleIndex = 0;
      var contentIndex = 0;

      return _react.Children.map(children, function (child) {
        var isTitle = child.type === _AccordionTitle2.default;
        var isContent = child.type === _AccordionContent2.default;

        if (isTitle) {
          var _ret = function () {
            var currentIndex = titleIndex;
            var isActive = (0, _has3.default)(child, 'props.active') ? child.props.active : _this.isIndexActive(titleIndex);
            var onClick = function onClick(e) {
              _this.handleTitleClick(e, currentIndex);
              if (child.props.onClick) child.props.onClick(e, currentIndex);
            };
            titleIndex++;
            return {
              v: (0, _react.cloneElement)(child, _extends({}, child.props, { active: isActive, onClick: onClick }))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (isContent) {
          var isActive = (0, _has3.default)(child, 'props.active') ? child.props.active : _this.isIndexActive(contentIndex);
          contentIndex++;
          return (0, _react.cloneElement)(child, _extends({}, child.props, { active: isActive }));
        }

        return child;
      });
    };

    _this.renderPanels = function () {
      var panels = _this.props.panels;

      var children = [];

      (0, _each3.default)(panels, function (panel, i) {
        var isActive = (0, _has3.default)(panel, 'active') ? panel.active : _this.isIndexActive(i);
        var onClick = function onClick(e) {
          _this.handleTitleClick(e, i);
          if (panel.onClick) panel.onClick(e, i);
        };

        children.push(_react2.default.createElement(
          _AccordionTitle2.default,
          { key: panel.title + '-title', active: isActive, onClick: onClick },
          _react2.default.createElement(_Icon2.default, { name: 'dropdown' }),
          panel.title
        ));
        children.push(_react2.default.createElement(
          _AccordionContent2.default,
          { key: panel.title + '-content', active: isActive },
          panel.content
        ));
      });

      return children;
    };

    _this.state = {
      activeIndex: _this.props.exclusive ? -1 : [-1]
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          fluid = _props.fluid,
          inverted = _props.inverted,
          panels = _props.panels,
          styled = _props.styled;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(styled, 'styled'), 'accordion', className);
      var rest = (0, _omit3.default)(this.props, (0, _keys3.default)(Accordion.propTypes));
      var ElementType = (0, _lib.getElementType)(Accordion, this.props);

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes }),
        panels ? this.renderPanels() : this.renderChildren()
      );
    }
  }]);

  return Accordion;
}(_lib.AutoControlledComponent);

Accordion.defaultProps = {
  exclusive: true
};
Accordion.autoControlledProps = ['activeIndex'];
Accordion.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Index of the currently active panel. */
  activeIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Initial activeIndex value. */
  defaultActiveIndex: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),

  /** Only allow one panel open at a time */
  exclusive: _react.PropTypes.bool,

  /** Format to take up the width of it's container. */
  fluid: _react.PropTypes.bool,

  /** Format for dark backgrounds. */
  inverted: _react.PropTypes.bool,

  /** Called with (event, index) when a panel title is clicked. */
  onTitleClick: _react.PropTypes.func,

  /**
   * Create simple accordion panels from an array of { text: <string>, content: <custom> } objects.
   * Object can optionally define an `active` key to open/close the panel.
   * Mutually exclusive with children.
   * TODO: AccordionPanel should be a sub-component
   */
  panels: _lib.customPropTypes.every([_lib.customPropTypes.disallow(['children']), _react.PropTypes.arrayOf(_react.PropTypes.shape({
    active: _react.PropTypes.bool,
    title: _react.PropTypes.string,
    content: _lib.customPropTypes.contentShorthand,
    onClick: _react.PropTypes.func
  }))]),

  /** Adds some basic styling to accordion panels. */
  styled: _react.PropTypes.bool
};
Accordion._meta = {
  name: 'Accordion',
  type: _lib.META.TYPES.MODULE
};
Accordion.Content = _AccordionContent2.default;
Accordion.Title = _AccordionTitle2.default;
exports.default = Accordion;