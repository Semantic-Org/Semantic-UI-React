'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _DimmerDimmable = require('./DimmerDimmable');

var _DimmerDimmable2 = _interopRequireDefault(_DimmerDimmable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Dimmer',
  type: _lib.META.TYPES.MODULE
};

/**
 * A dimmer hides distractions to focus attention on particular content.
 */

var Dimmer = function (_Component) {
  _inherits(Dimmer, _Component);

  function Dimmer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dimmer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dimmer.__proto__ || Object.getPrototypeOf(Dimmer)).call.apply(_ref, [this].concat(args))), _this), _this.handlePortalMount = function () {
      if (_lib.isBrowser) document.body.classList.add('dimmed', 'dimmable');
    }, _this.handlePortalUnmount = function () {
      if (_lib.isBrowser) document.body.classList.remove('dimmed', 'dimmable');
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          onClickOutside = _this$props.onClickOutside;


      if (onClick) onClick(e, _this.props);
      if (_this.center && _this.center !== e.target && _this.center.contains(e.target)) return;
      if (onClickOutside) onClickOutside(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dimmer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          content = _props.content,
          disabled = _props.disabled,
          inverted = _props.inverted,
          page = _props.page,
          simple = _props.simple;


      var classes = (0, _classnames2.default)('ui', (0, _lib.useKeyOnly)(active, 'active transition visible'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(inverted, 'inverted'), (0, _lib.useKeyOnly)(page, 'page'), (0, _lib.useKeyOnly)(simple, 'simple'), 'dimmer', className);
      var rest = (0, _lib.getUnhandledProps)(Dimmer, this.props);
      var ElementType = (0, _lib.getElementType)(Dimmer, this.props);

      var childrenJSX = (children || content) && _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(
          'div',
          { className: 'center', ref: function ref(center) {
              return _this2.center = center;
            } },
          children || content
        )
      );

      if (page) {
        return _react2.default.createElement(
          _Portal2.default,
          {
            closeOnEscape: false,
            closeOnDocumentClick: false,
            onMount: this.handlePortalMount,
            onUnmount: this.handlePortalUnmount,
            open: active,
            openOnTriggerClick: false
          },
          _react2.default.createElement(
            ElementType,
            _extends({}, rest, { className: classes, onClick: this.handleClick }),
            childrenJSX
          )
        );
      }

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        childrenJSX
      );
    }
  }]);

  return Dimmer;
}(_react.Component);

// Dimmer is not yet defined inside the class
// Do not use a static property initializer


Dimmer.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** An active dimmer will dim its parent container. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A disabled dimmer cannot be activated */
  disabled: _react.PropTypes.bool,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /**
   * Handles click outside Dimmer's content, but inside Dimmer area.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClickOutside: _react.PropTypes.func,

  /** A dimmer can be formatted to have its colors inverted. */
  inverted: _react.PropTypes.bool,

  /** A dimmer can be formatted to be fixed to the page. */
  page: _react.PropTypes.bool,

  /** A dimmer can be controlled with simple prop. */
  simple: _react.PropTypes.bool
};
Dimmer._meta = _meta;
Dimmer.Dimmable = _DimmerDimmable2.default;
exports.default = Dimmer;
Dimmer.create = (0, _lib.createShorthandFactory)(Dimmer, function (value) {
  return { content: value };
});