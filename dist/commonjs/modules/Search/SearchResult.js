'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Note: You technically only need the 'content' wrapper when there's an
// image. However, optionally wrapping it makes this function a lot more
// complicated and harder to read. Since always wrapping it doesn't affect
// the style in any way let's just do that.
//
// Note: To avoid requiring a wrapping div, we return an array here so to
// prevent rendering issues each node needs a unique key.
var defaultRenderer = function defaultRenderer(_ref) {
  var image = _ref.image,
      price = _ref.price,
      title = _ref.title,
      description = _ref.description;
  return [image && _react2.default.createElement(
    'div',
    { key: 'image', className: 'image' },
    (0, _lib.createHTMLImage)(image)
  ), _react2.default.createElement(
    'div',
    { key: 'content', className: 'content' },
    price && _react2.default.createElement(
      'div',
      { className: 'price' },
      price
    ),
    title && _react2.default.createElement(
      'div',
      { className: 'title' },
      title
    ),
    description && _react2.default.createElement(
      'div',
      { className: 'description' },
      description
    )
  )];
};

var SearchResult = function (_Component) {
  _inherits(SearchResult, _Component);

  function SearchResult() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchResult);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref2, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchResult, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          renderer = _props.renderer;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), 'result', className);
      var rest = (0, _lib.getUnhandledProps)(SearchResult, this.props);
      var ElementType = (0, _lib.getElementType)(SearchResult, this.props);

      // Note: You technically only need the 'content' wrapper when there's an
      // image. However, optionally wrapping it makes this function a lot more
      // complicated and harder to read. Since always wrapping it doesn't affect
      // the style in any way let's just do that.
      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        renderer ? renderer(this.props) : defaultRenderer(this.props)
      );
    }
  }]);

  return SearchResult;
}(_react.Component);

SearchResult.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** The item currently selected by keyboard shortcut. */
  active: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Additional text with less emphasis. */
  description: _react.PropTypes.string,

  /** A unique identifier. */
  id: _react.PropTypes.number,

  /** Add an image to the item. */
  image: _react.PropTypes.string,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /** Customized text for price. */
  price: _react.PropTypes.string,

  /**
   * A function that returns the result contents.
   * Receives all SearchResult props.
   */
  renderer: _react.PropTypes.func,

  /** Display title. */
  title: _react.PropTypes.string
};
SearchResult._meta = {
  name: 'SearchResult',
  parent: 'Search',
  type: _lib.META.TYPES.MODULE
};
exports.default = SearchResult;