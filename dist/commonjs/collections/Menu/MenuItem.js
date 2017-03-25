'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _startCase2 = require('lodash/startCase');

var _startCase3 = _interopRequireDefault(_startCase2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'MenuItem',
  type: _lib.META.TYPES.COLLECTION,
  parent: 'Menu',
  props: {
    color: _lib.SUI.COLORS,
    fitted: ['horizontally', 'vertically'],
    position: ['right']
  }
};

var MenuItem = function (_Component) {
  _inherits(MenuItem, _Component);

  function MenuItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          color = _props.color,
          content = _props.content,
          fitted = _props.fitted,
          header = _props.header,
          icon = _props.icon,
          link = _props.link,
          name = _props.name,
          onClick = _props.onClick,
          position = _props.position;


      var classes = (0, _classnames2.default)(color, position, (0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(icon === true || icon && !(name || content), 'icon'), (0, _lib.useKeyOnly)(header, 'header'), (0, _lib.useKeyOnly)(link, 'link'), (0, _lib.useKeyOrValueAndKey)(fitted, 'fitted'), 'item', className);
      var ElementType = (0, _lib.getElementType)(MenuItem, this.props, function () {
        if (onClick) return 'a';
      });
      var rest = (0, _lib.getUnhandledProps)(MenuItem, this.props);

      if (children) {
        return _react2.default.createElement(
          ElementType,
          _extends({}, rest, { className: classes, onClick: this.handleClick }),
          children
        );
      }

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, onClick: this.handleClick }),
        _Icon2.default.create(icon),
        content || (0, _startCase3.default)(name)
      );
    }
  }]);

  return MenuItem;
}(_react.Component);

MenuItem.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A menu item can be active. */
  active: _react.PropTypes.bool,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Additional colors can be specified. */
  color: _react.PropTypes.oneOf(_meta.props.color),

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand,

  /** A menu item or menu can remove element padding, vertically or horizontally. */
  fitted: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.fitted)]),

  /** A menu item may include a header or may itself be a header. */
  header: _react.PropTypes.bool,

  /** MenuItem can be only icon. */
  icon: _react.PropTypes.oneOfType([_react.PropTypes.bool, _lib.customPropTypes.itemShorthand]),

  /** MenuItem index inside Menu. */
  index: _react.PropTypes.number,

  /** A menu item can be link. */
  link: _react.PropTypes.bool,

  /** Internal name of the MenuItem. */
  name: _react.PropTypes.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /** A menu item can take right position. */
  position: _react.PropTypes.oneOf(_meta.props.position)
};
MenuItem._meta = _meta;
exports.default = MenuItem;


MenuItem.create = (0, _lib.createShorthandFactory)(MenuItem, function (val) {
  return { content: val, name: val };
}, true);