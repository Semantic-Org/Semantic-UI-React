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

var _Image = require('../../elements/Image');

var _Image2 = _interopRequireDefault(_Image);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardDescription = require('./CardDescription');

var _CardDescription2 = _interopRequireDefault(_CardDescription);

var _CardGroup = require('./CardGroup');

var _CardGroup2 = _interopRequireDefault(_CardGroup);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMeta = require('./CardMeta');

var _CardMeta2 = _interopRequireDefault(_CardMeta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Card',
  type: _lib.META.TYPES.VIEW,
  props: {
    color: _lib.SUI.COLORS
  }
};

/**
 * A card displays site content in a manner similar to a playing card
 */

var Card = function (_Component) {
  _inherits(Card, _Component);

  function Card() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Card);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          centered = _props.centered,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          description = _props.description,
          extra = _props.extra,
          fluid = _props.fluid,
          header = _props.header,
          href = _props.href,
          image = _props.image,
          meta = _props.meta,
          onClick = _props.onClick,
          raised = _props.raised;


      var classes = (0, _classnames2.default)('ui', color, (0, _lib.useKeyOnly)(centered, 'centered'), (0, _lib.useKeyOnly)(fluid, 'fluid'), (0, _lib.useKeyOnly)(raised, 'raised'), 'card', className);
      var rest = (0, _lib.getUnhandledProps)(Card, this.props);
      var ElementType = (0, _lib.getElementType)(Card, this.props, function () {
        if (onClick) return 'a';
      });

      if (children) {
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
          children
        );
      }

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, href: href, onClick: this.handleClick }),
        _Image2.default.create(image),
        (description || header || meta) && _react2.default.createElement(_CardContent2.default, { description: description, header: header, meta: meta }),
        extra && _react2.default.createElement(
          _CardContent2.default,
          { extra: true },
          extra
        )
      );
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A Card can center itself inside its container. */
  centered: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** A Card can be formatted to display different colors. */
  color: _react.PropTypes.oneOf(_meta.props.color),

  /** Shorthand for CardDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** Shorthand for primary content of CardContent. */
  extra: _lib.customPropTypes.contentShorthand,

  /** A Card can be formatted to take up the width of its container. */
  fluid: _react.PropTypes.bool,

  /** Shorthand for CardHeader. */
  header: _lib.customPropTypes.itemShorthand,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _react.PropTypes.string,

  /** A card can contain an Image component. */
  image: _lib.customPropTypes.itemShorthand,

  /** Shorthand for CardMeta. */
  meta: _lib.customPropTypes.itemShorthand,

  /**
   * Called on click. When passed, the component renders as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /** A Card can be formatted to raise above the page. */
  raised: _react.PropTypes.bool
};
Card._meta = _meta;
Card.Content = _CardContent2.default;
Card.Description = _CardDescription2.default;
Card.Group = _CardGroup2.default;
Card.Header = _CardHeader2.default;
Card.Meta = _CardMeta2.default;
exports.default = Card;