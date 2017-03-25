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

var _SidebarPushable = require('./SidebarPushable');

var _SidebarPushable2 = _interopRequireDefault(_SidebarPushable);

var _SidebarPusher = require('./SidebarPusher');

var _SidebarPusher2 = _interopRequireDefault(_SidebarPusher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Sidebar',
  type: _lib.META.TYPES.MODULE,
  props: {
    animation: ['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along'],
    direction: ['top', 'right', 'bottom', 'left'],
    width: ['very thin', 'thin', 'wide', 'very wide']
  }
};

/**
 * A sidebar hides additional content beside a page.
 */

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.startAnimating = function () {
      var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

      clearTimeout(_this.stopAnimatingTimer);

      _this.setState({ animating: true });

      _this.stopAnimatingTimer = setTimeout(function () {
        return _this.setState({ animating: false });
      }, duration);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sidebar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.visible !== this.props.visible) {
        this.startAnimating();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var animating = this.state.animating;
      var _props = this.props,
          animation = _props.animation,
          className = _props.className,
          children = _props.children,
          direction = _props.direction,
          visible = _props.visible,
          width = _props.width;


      var classes = (0, _classnames2.default)('ui', 'sidebar', (0, _lib.useKeyOnly)(animating, 'animating'), direction, width, animation, (0, _lib.useKeyOnly)(visible, 'visible'), className);

      var rest = (0, _lib.getUnhandledProps)(Sidebar, this.props);
      var ElementType = (0, _lib.getElementType)(Sidebar, this.props);

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes }),
        children
      );
    }
  }]);

  return Sidebar;
}(_lib.AutoControlledComponent);

Sidebar._meta = _meta;
Sidebar.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Animation style. */
  animation: _react.PropTypes.oneOf(Sidebar._meta.props.animation),

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Initial value of visible. */
  defaultVisible: _react.PropTypes.bool,

  /** Direction the sidebar should appear on */
  direction: _react.PropTypes.oneOf(Sidebar._meta.props.direction),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: _react.PropTypes.bool,

  /** Sidebar width */
  width: _react.PropTypes.oneOf(Sidebar._meta.props.width)
};
Sidebar.Pushable = _SidebarPushable2.default;
Sidebar.Pusher = _SidebarPusher2.default;
Sidebar.defaultProps = {
  direction: 'left'
};
Sidebar.autoControlledProps = ['visible'];
exports.default = Sidebar;