'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isUndefined2 = require('lodash/isUndefined');

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Image = require('../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _LabelDetail = require('./LabelDetail');

var _LabelDetail2 = _interopRequireDefault(_LabelDetail);

var _LabelGroup = require('./LabelGroup');

var _LabelGroup2 = _interopRequireDefault(_LabelGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Label',
  type: _lib.META.TYPES.ELEMENT,
  props: {
    attached: ['top', 'bottom', 'top right', 'top left', 'bottom left', 'bottom right'],
    color: _lib.SUI.COLORS,
    corner: ['left', 'right'],
    pointing: ['above', 'below', 'left', 'right'],
    ribbon: ['right'],
    size: _lib.SUI.SIZES
  }
};

/**
 * A label displays content classification
 */

var Label = function (_Component) {
  _inherits(Label, _Component);

  function Label() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Label);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Label.__proto__ || Object.getPrototypeOf(Label)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _this.handleRemove = function (e) {
      var onRemove = _this.props.onRemove;


      if (onRemove) onRemove(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Label, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          attached = _props.attached,
          basic = _props.basic,
          children = _props.children,
          circular = _props.circular,
          className = _props.className,
          color = _props.color,
          content = _props.content,
          corner = _props.corner,
          detail = _props.detail,
          empty = _props.empty,
          floating = _props.floating,
          horizontal = _props.horizontal,
          icon = _props.icon,
          image = _props.image,
          onRemove = _props.onRemove,
          pointing = _props.pointing,
          removeIcon = _props.removeIcon,
          ribbon = _props.ribbon,
          size = _props.size,
          tag = _props.tag;


      var pointingClass = pointing === true && 'pointing' || (pointing === 'left' || pointing === 'right') && pointing + ' pointing' || (pointing === 'above' || pointing === 'below') && 'pointing ' + pointing;

      var classes = (0, _classnames2.default)('ui', color, pointingClass, size, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(circular, 'circular'), (0, _lib.useKeyOnly)(empty, 'empty'), (0, _lib.useKeyOnly)(floating, 'floating'), (0, _lib.useKeyOnly)(horizontal, 'horizontal'), (0, _lib.useKeyOnly)(image === true, 'image'), (0, _lib.useKeyOnly)(tag, 'tag'), (0, _lib.useKeyOrValueAndKey)(corner, 'corner'), (0, _lib.useKeyOrValueAndKey)(ribbon, 'ribbon'), (0, _lib.useValueAndKey)(attached, 'attached'), 'label', className);
      var rest = (0, _lib.getUnhandledProps)(Label, this.props);
      var ElementType = (0, _lib.getElementType)(Label, this.props);

      if (children) {
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      var removeIconShorthand = (0, _isUndefined3.default)(removeIcon) ? 'delete' : removeIcon;

      return _react2.default.createElement(
        ElementType,
        _extends({ className: classes, onClick: this.handleClick }, rest),
        _Icon2.default.create(icon),
        typeof image !== 'boolean' && _Image2.default.create(image),
        content,
        (0, _lib.createShorthand)(_LabelDetail2.default, function (val) {
          return { content: val };
        }, detail),
        onRemove && _Icon2.default.create(removeIconShorthand, { onClick: this.handleRemove })
      );
    }
  }]);

  return Label;
}(_react.Component);

// Label is not yet defined inside the class
// Do not use a static property initializer


Label.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A label can be active. */
  active: _react.PropTypes.bool,

  /** A label can attach to a content segment. */
  attached: _react.PropTypes.oneOf(_meta.props.attached),

  /** A label can reduce its complexity. */
  basic: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** A label can be circular. */
  circular: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Color of the label. */
  color: _react.PropTypes.oneOf(_meta.props.color),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A label can position itself in the corner of an element. */
  corner: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.corner)]),

  /** Shorthand for LabelDetail. */
  detail: _lib.customPropTypes.itemShorthand,

  /** Formats the label as a dot. */
  empty: _lib.customPropTypes.every([_lib.customPropTypes.demand(['circular']), _react.PropTypes.bool]),

  /** Float above another element in the upper right corner. */
  floating: _react.PropTypes.bool,

  /** A horizontal label is formatted to label content along-side it horizontally. */
  horizontal: _react.PropTypes.bool,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** A label can be formatted to emphasize an image or prop can be used as shorthand for Image. */
  image: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** A label can point to content next to it. */
  pointing: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.pointing)]),

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /**
   * Adds an "x" icon, called when "x" is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onRemove: _react.PropTypes.func,

  /** Shorthand for Icon to appear as the last child and trigger onRemove. */
  removeIcon: _lib.customPropTypes.itemShorthand,

  /** A label can appear as a ribbon attaching itself to an element. */
  ribbon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.ribbon)]),

  /** A label can have different sizes. */
  size: _react.PropTypes.oneOf(_meta.props.size),

  /** A label can appear as a tag. */
  tag: _react.PropTypes.bool
};
Label._meta = _meta;
Label.Detail = _LabelDetail2.default;
Label.Group = _LabelGroup2.default;
exports.default = Label;
Label.create = (0, _lib.createShorthandFactory)(Label, function (value) {
  return { content: value };
});