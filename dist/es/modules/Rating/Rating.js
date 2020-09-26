import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _without from "lodash/without";
import _times from "lodash/times";
import _invoke from "lodash/invoke";
import cx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import { ModernAutoControlledComponent as Component, getElementType, getUnhandledProps, SUI, useKeyOnly } from '../../lib';
import RatingIcon from './RatingIcon';
/**
 * A rating indicates user interest in content.
 */

var Rating = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Rating, _Component);

  function Rating() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(_args)) || this;

    _this.handleIconClick = function (e, _ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          clearable = _this$props.clearable,
          disabled = _this$props.disabled,
          maxRating = _this$props.maxRating,
          onRate = _this$props.onRate;
      var rating = _this.state.rating;
      if (disabled) return; // default newRating is the clicked icon
      // allow toggling a binary rating
      // allow clearing ratings

      var newRating = index + 1;

      if (clearable === 'auto' && maxRating === 1) {
        newRating = +!rating;
      } else if (clearable === true && newRating === rating) {
        newRating = 0;
      } // set rating


      _this.setState({
        rating: newRating,
        isSelecting: false
      });

      if (onRate) onRate(e, _extends({}, _this.props, {
        rating: newRating
      }));
    };

    _this.handleIconMouseEnter = function (e, _ref2) {
      var index = _ref2.index;
      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: index,
        isSelecting: true
      });
    };

    _this.handleMouseLeave = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _invoke.apply(void 0, [_this.props, 'onMouseLeave'].concat(args));

      if (_this.props.disabled) return;

      _this.setState({
        selectedIndex: -1,
        isSelecting: false
      });
    };

    return _this;
  }

  var _proto = Rating.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        className = _this$props2.className,
        disabled = _this$props2.disabled,
        icon = _this$props2.icon,
        maxRating = _this$props2.maxRating,
        size = _this$props2.size;
    var _this$state = this.state,
        rating = _this$state.rating,
        selectedIndex = _this$state.selectedIndex,
        isSelecting = _this$state.isSelecting;
    var classes = cx('ui', icon, size, useKeyOnly(disabled, 'disabled'), useKeyOnly(isSelecting && !disabled && selectedIndex >= 0, 'selected'), 'rating', className);
    var rest = getUnhandledProps(Rating, this.props);
    var ElementType = getElementType(Rating, this.props);
    return /*#__PURE__*/React.createElement(ElementType, _extends({}, rest, {
      className: classes,
      role: "radiogroup",
      onMouseLeave: this.handleMouseLeave,
      tabIndex: disabled ? 0 : -1
    }), _times(maxRating, function (i) {
      return /*#__PURE__*/React.createElement(RatingIcon, {
        tabIndex: disabled ? -1 : 0,
        active: rating >= i + 1,
        "aria-checked": rating === i + 1,
        "aria-posinset": i + 1,
        "aria-setsize": maxRating,
        index: i,
        key: i,
        onClick: _this2.handleIconClick,
        onMouseEnter: _this2.handleIconMouseEnter,
        selected: selectedIndex >= i && isSelecting
      });
    }));
  };

  return Rating;
}(Component);

Rating.handledProps = ["as", "className", "clearable", "defaultRating", "disabled", "icon", "maxRating", "onRate", "rating", "size"];
export { Rating as default };
Rating.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /**
   * You can clear the rating by clicking on the current start rating.
   * By default a rating will be only clearable if there is 1 icon.
   * Setting to `true`/`false` will allow or disallow a user to clear their rating.
   */
  clearable: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['auto'])]),

  /** The initial rating value. */
  defaultRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** You can disable or enable interactive rating.  Makes a read-only rating. */
  disabled: PropTypes.bool,

  /** A rating can use a set of star or heart icons. */
  icon: PropTypes.oneOf(['star', 'heart']),

  /** The total number of icons. */
  maxRating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Called after user selects a new rating.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed rating.
   */
  onRate: PropTypes.func,

  /** The current number of active icons. */
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A progress bar can vary in size. */
  size: PropTypes.oneOf(_without(SUI.SIZES, 'medium', 'big'))
} : {};
Rating.autoControlledProps = ['rating'];
Rating.defaultProps = {
  clearable: 'auto',
  maxRating: 1
};
Rating.Icon = RatingIcon;