import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _map from "lodash/map";
import _get from "lodash/get";
import _invoke from "lodash/invoke";
import PropTypes from 'prop-types';
import React from 'react';
import { ModernAutoControlledComponent as Component, customPropTypes, getElementType, getUnhandledProps } from '../../lib';
import Grid from '../../collections/Grid/Grid';
import GridColumn from '../../collections/Grid/GridColumn';
import Menu from '../../collections/Menu/Menu';
import TabPane from './TabPane';
/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */

var Tab = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Tab, _Component);

  function Tab() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleItemClick = function (e, _ref) {
      var index = _ref.index;

      _invoke(_this.props, 'onTabChange', e, _extends({}, _this.props, {
        activeIndex: index
      }));

      _this.setState({
        activeIndex: index
      });
    };

    return _this;
  }

  var _proto = Tab.prototype;

  _proto.getInitialAutoControlledState = function getInitialAutoControlledState() {
    return {
      activeIndex: 0
    };
  };

  _proto.renderItems = function renderItems() {
    var _this$props = this.props,
        panes = _this$props.panes,
        renderActiveOnly = _this$props.renderActiveOnly;
    var activeIndex = this.state.activeIndex;
    if (renderActiveOnly) return _invoke(_get(panes, "[" + activeIndex + "]"), 'render', this.props);
    return _map(panes, function (_ref2, index) {
      var pane = _ref2.pane;
      return TabPane.create(pane, {
        overrideProps: {
          active: index === activeIndex
        }
      });
    });
  };

  _proto.renderMenu = function renderMenu() {
    var _this$props2 = this.props,
        menu = _this$props2.menu,
        panes = _this$props2.panes,
        menuPosition = _this$props2.menuPosition;
    var activeIndex = this.state.activeIndex;

    if (menu.tabular === true && menuPosition === 'right') {
      menu.tabular = 'right';
    }

    return Menu.create(menu, {
      autoGenerateKey: false,
      overrideProps: {
        items: _map(panes, 'menuItem'),
        onItemClick: this.handleItemClick,
        activeIndex: activeIndex
      }
    });
  };

  _proto.renderVertical = function renderVertical(menu) {
    var _this$props3 = this.props,
        grid = _this$props3.grid,
        menuPosition = _this$props3.menuPosition;

    var paneWidth = grid.paneWidth,
        tabWidth = grid.tabWidth,
        gridProps = _objectWithoutPropertiesLoose(grid, ["paneWidth", "tabWidth"]);

    var position = menuPosition || menu.props.tabular === 'right' && 'right' || 'left';
    return /*#__PURE__*/React.createElement(Grid, gridProps, position === 'left' && GridColumn.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }), GridColumn.create({
      width: paneWidth,
      children: this.renderItems(),
      stretched: true
    }, {
      autoGenerateKey: false
    }), position === 'right' && GridColumn.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }));
  };

  _proto.render = function render() {
    var menu = this.renderMenu();
    var rest = getUnhandledProps(Tab, this.props);
    var ElementType = getElementType(Tab, this.props);

    if (menu.props.vertical) {
      return /*#__PURE__*/React.createElement(ElementType, rest, this.renderVertical(menu));
    }

    return /*#__PURE__*/React.createElement(ElementType, rest, menu.props.attached !== 'bottom' && menu, this.renderItems(), menu.props.attached === 'bottom' && menu);
  };

  return Tab;
}(Component);

Tab.handledProps = ["activeIndex", "as", "defaultActiveIndex", "grid", "menu", "menuPosition", "onTabChange", "panes", "renderActiveOnly"];
Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** The initial activeIndex. */
  defaultActiveIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Index of the currently active tab. */
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Shorthand props for the Menu.
   * tabular, if true, will derive final value from `menuPosition`, otherwise set 'left' or 'right' explicitly.
   */
  menu: PropTypes.object,

  /** Align vertical menu */
  menuPosition: PropTypes.oneOf(['left', 'right']),

  /** Shorthand props for the Grid. Only applicable to vertical menus. */
  grid: PropTypes.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: PropTypes.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * { menuItem: 'Home', render: () => <Tab.Pane /> }
   * or
   * { menuItem: 'Home', pane: 'Welcome' }
   */
  panes: PropTypes.arrayOf(PropTypes.shape({
    menuItem: customPropTypes.itemShorthand,
    pane: customPropTypes.itemShorthand,
    render: PropTypes.func
  })),

  /** A Tab can render only active pane. */
  renderActiveOnly: PropTypes.bool
} : {};
Tab.autoControlledProps = ['activeIndex'];
Tab.defaultProps = {
  grid: {
    paneWidth: 12,
    tabWidth: 4
  },
  menu: {
    attached: true,
    tabular: true
  },
  renderActiveOnly: true
};
Tab.Pane = TabPane;
export default Tab;