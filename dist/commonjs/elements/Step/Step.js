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

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

var _StepDescription = require('./StepDescription');

var _StepDescription2 = _interopRequireDefault(_StepDescription);

var _StepGroup = require('./StepGroup');

var _StepGroup2 = _interopRequireDefault(_StepGroup);

var _StepTitle = require('./StepTitle');

var _StepTitle2 = _interopRequireDefault(_StepTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A step shows the completion status of an activity in a series of activities
 */
var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Step);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Step.__proto__ || Object.getPrototypeOf(Step)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (e) {
      var onClick = _this.props.onClick;


      if (onClick) onClick(e, _this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Step, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children,
          className = _props.className,
          completed = _props.completed,
          description = _props.description,
          disabled = _props.disabled,
          href = _props.href,
          icon = _props.icon,
          link = _props.link,
          onClick = _props.onClick,
          title = _props.title;


      var classes = (0, _classnames2.default)((0, _lib.useKeyOnly)(active, 'active'), (0, _lib.useKeyOnly)(completed, 'completed'), (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(link, 'link'), 'step', className);
      var rest = (0, _lib.getUnhandledProps)(Step, this.props);
      var ElementType = (0, _lib.getElementType)(Step, this.props, function () {
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
        _Icon2.default.create(icon),
        _react2.default.createElement(_StepContent2.default, { description: description, title: title })
      );
    }
  }]);

  return Step;
}(_react.Component);

Step.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** A step can be highlighted as active. */
  active: _react.PropTypes.bool,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** A step can show that a user has completed it. */
  completed: _react.PropTypes.bool,

  /** Shorthand for StepDescription. */
  description: _lib.customPropTypes.itemShorthand,

  /** Show that the Loader is inactive. */
  disabled: _react.PropTypes.bool,

  /** Shorthand for Icon. */
  icon: _lib.customPropTypes.itemShorthand,

  /** A step can be link. */
  link: _react.PropTypes.bool,

  /** Render as an `a` tag instead of a `div` and adds the href attribute. */
  href: _react.PropTypes.string,

  /**
   * Called on click. When passed, the component will render as an `a`
   * tag by default instead of a `div`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: _react.PropTypes.func,

  /** A step can show a ordered sequence of steps. Passed from StepGroup. */
  ordered: _react.PropTypes.bool,

  /** Shorthand for StepTitle. */
  title: _lib.customPropTypes.itemShorthand
};
Step._meta = {
  name: 'Step',
  type: _lib.META.TYPES.ELEMENT
};
Step.Content = _StepContent2.default;
Step.Description = _StepDescription2.default;
Step.Group = _StepGroup2.default;
Step.Title = _StepTitle2.default;
exports.default = Step;