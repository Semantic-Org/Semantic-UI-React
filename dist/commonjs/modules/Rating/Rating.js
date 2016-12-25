'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _times2 = require('lodash/times');

var _times3 = _interopRequireDefault(_times2);

var _invoke2 = require('lodash/invoke');

var _invoke3 = _interopRequireDefault(_invoke2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _RatingIcon = require('./RatingIcon');

var _RatingIcon2 = _interopRequireDefault(_RatingIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _meta = {
  name: 'Rating',
  type: _lib.META.TYPES.MODULE,
  props: {
    clearable: ['auto'],
    icon: ['star', 'heart'],
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big')
  }
};

/**
 * A rating indicates user interest in content
 */

var Rating = function (_Component) {
  _inherits(Rating, _Component);

  function Rating() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rating);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rating.__proto__ || Object.getPrototypeOf(Rating)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Rating, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          disabled = _props.disabled,
          icon = _props.icon,
          maxRating = _props.maxRating,
          size = _props.size;
      var _state = this.state,
          rating = _state.rating,
          selectedIndex = _state.selectedIndex,
          isSelecting = _state.isSelecting;


      var classes = (0, _classnames2.default)('ui', icon, size, (0, _lib.useKeyOnly)(disabled, 'disabled'), (0, _lib.useKeyOnly)(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
      var rest = (0, _lib.getUnhandledProps)(Rating, this.props);
      var ElementType = (0, _lib.getElementType)(Rating, this.props);

      return _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, role: 'radiogroup', onMouseLeave: this.handleMouseLeave }),
        (0, _times3.default)(maxRating, function (i) {
          return _react2.default.createElement(_RatingIcon2.default, {
            active: rating >= i + 1,
            index: i,
            key: i,
            'aria-checked': rating === i + 1,
            'aria-posinset': i + 1,
            'aria-setsize': maxRating,
            onClick: _this2.handleIconClick,
            onMouseEnter: _this2.handleIconMouseEnter,
            selected: selectedIndex >= i && isSelecting
          });
        })
      );
    }
  }]);

  return Rating;
}(_lib.AutoControlledComponent);

Rating.autoControlledProps = ['rating'];
Rating.defaultProps = {
  clearable: 'auto',
  maxRating: 1
};
Rating.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: _react.PropTypes.oneOfType([_react.PropTypes.oneOf(_meta.props.clearable), _react.PropTypes.bool]),

  /** The initial rating value. */
  defaultRating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: _react.PropTypes.bool,

  /** A rating can use a set of star or heart icons. */
  icon: _react.PropTypes.oneOf(_meta.props.icon),

  /** The total number of icons. */
  maxRating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: _react.PropTypes.func,

  /** The current number of active icons. */
  rating: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

  /** A progress bar can vary in size. */
  size: _react.PropTypes.oneOf(_meta.props.size)
};
Rating._meta = _meta;
Rating.Icon = _RatingIcon2.default;

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleIconClick = function (e, _ref2) {
    var index = _ref2.index;
    var _props2 = _this3.props,
        clearable = _props2.clearable,
        disabled = _props2.disabled,
        maxRating = _props2.maxRating,
        onRate = _props2.onRate;
    var rating = _this3.state.rating;

    if (disabled) return;

    // default newRating is the clicked icon
    // allow toggling a binary rating
    // allow clearing ratings
    var newRating = index + 1;
    if (clearable === 'auto' && maxRating === 1) {
      newRating = +!rating;
    } else if (clearable === true && newRating === rating) {
      newRating = 0;
    }

    // set rating
    _this3.trySetState({ rating: newRating }, { isSelecting: false });
    if (onRate) onRate(e, _extends({}, _this3.props, { rating: newRating }));
  };

  this.handleIconMouseEnter = function (e, _ref3) {
    var index = _ref3.index;

    if (_this3.props.disabled) return;

    _this3.setState({ selectedIndex: index, isSelecting: true });
  };

  this.handleMouseLeave = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _invoke3.default.apply(undefined, [_this3.props, 'onMouseLeave'].concat(args));

    if (_this3.props.disabled) return;

    _this3.setState({ selectedIndex: -1, isSelecting: false });
  };
};

exports.default = Rating;