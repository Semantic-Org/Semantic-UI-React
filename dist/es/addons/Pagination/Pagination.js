import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _map from "lodash/map";
import _isNil from "lodash/isNil";
import _invoke from "lodash/invoke";
import PropTypes from 'prop-types';
import React from 'react';
import { ModernAutoControlledComponent as Component, createPaginationItems, customPropTypes, getUnhandledProps } from '../../lib';
import Menu from '../../collections/Menu';
import PaginationItem from './PaginationItem';
/**
 * A component to render a pagination.
 */

var Pagination = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Pagination, _Component);

  function Pagination() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleItemClick = function (e, _ref) {
      var nextActivePage = _ref.value;
      var prevActivePage = _this.state.activePage; // Heads up! We need the cast to the "number" type there, as `activePage` can be a string

      if (+prevActivePage === +nextActivePage) return;

      _this.setState({
        activePage: nextActivePage
      });

      _invoke(_this.props, 'onPageChange', e, _extends({}, _this.props, {
        activePage: nextActivePage
      }));
    };

    _this.handleItemOverrides = function (active, type, value) {
      return function (predefinedProps) {
        return {
          active: active,
          type: type,
          key: type + "-" + value,
          onClick: function onClick(e, itemProps) {
            _invoke(predefinedProps, 'onClick', e, itemProps);

            if (itemProps.type !== 'ellipsisItem') _this.handleItemClick(e, itemProps);
          }
        };
      };
    };

    return _this;
  }

  var _proto = Pagination.prototype;

  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      activePage: 1
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        ariaLabel = _this$props['aria-label'],
        boundaryRange = _this$props.boundaryRange,
        disabled = _this$props.disabled,
        ellipsisItem = _this$props.ellipsisItem,
        siblingRange = _this$props.siblingRange,
        totalPages = _this$props.totalPages;
    var activePage = this.state.activePage;
    var items = createPaginationItems({
      activePage: activePage,
      boundaryRange: boundaryRange,
      hideEllipsis: _isNil(ellipsisItem),
      siblingRange: siblingRange,
      totalPages: totalPages
    });
    var rest = getUnhandledProps(Pagination, this.props);
    return /*#__PURE__*/React.createElement(Menu, _extends({}, rest, {
      "aria-label": ariaLabel,
      pagination: true,
      role: "navigation"
    }), _map(items, function (_ref2) {
      var active = _ref2.active,
          type = _ref2.type,
          value = _ref2.value;
      return PaginationItem.create(_this2.props[type], {
        defaultProps: {
          content: value,
          disabled: disabled,
          value: value
        },
        overrideProps: _this2.handleItemOverrides(active, type, value)
      });
    }));
  };

  return Pagination;
}(Component);

Pagination.handledProps = ["activePage", "aria-label", "boundaryRange", "defaultActivePage", "disabled", "ellipsisItem", "firstItem", "lastItem", "nextItem", "onPageChange", "pageItem", "prevItem", "siblingRange", "totalPages"];
export { Pagination as default };
Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /** A pagination item can have an aria label. */
  'aria-label': PropTypes.string,

  /** Initial activePage value. */
  defaultActivePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active page. */
  activePage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Number of always visible pages at the beginning and end. */
  boundaryRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** A pagination can be disabled. */
  disabled: PropTypes.bool,

  /** A shorthand for PaginationItem. */
  ellipsisItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  firstItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  lastItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  nextItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  pageItem: customPropTypes.itemShorthand,

  /** A shorthand for PaginationItem. */
  prevItem: customPropTypes.itemShorthand,

  /**
   * Called on change of an active page.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onPageChange: PropTypes.func,

  /** Number of always visible pages before and after the current one. */
  siblingRange: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Total number of pages. */
  totalPages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
} : {};
Pagination.autoControlledProps = ['activePage'];
Pagination.defaultProps = {
  'aria-label': 'Pagination Navigation',
  boundaryRange: 1,
  ellipsisItem: '...',
  firstItem: {
    'aria-label': 'First item',
    content: '«'
  },
  lastItem: {
    'aria-label': 'Last item',
    content: '»'
  },
  nextItem: {
    'aria-label': 'Next item',
    content: '⟩'
  },
  pageItem: {},
  prevItem: {
    'aria-label': 'Previous item',
    content: '⟨'
  },
  siblingRange: 1
};
Pagination.Item = PaginationItem;