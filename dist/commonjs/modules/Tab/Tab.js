"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

var _Grid = _interopRequireDefault(require("../../collections/Grid/Grid"));

var _GridColumn = _interopRequireDefault(require("../../collections/Grid/GridColumn"));

var _Menu = _interopRequireDefault(require("../../collections/Menu/Menu"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

/**
 * A Tab is a hidden section of content activated by a Menu.
 * @see Menu
 * @see Segment
 */
var Tab = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(Tab, _Component);

  function Tab() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleItemClick = function (e, _ref) {
      var index = _ref.index;
      (0, _invoke2.default)(_this.props, 'onTabChange', e, (0, _extends2.default)({}, _this.props, {
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
    if (renderActiveOnly) return (0, _invoke2.default)((0, _get2.default)(panes, "[" + activeIndex + "]"), 'render', this.props);
    return (0, _map2.default)(panes, function (_ref2, index) {
      var pane = _ref2.pane;
      return _TabPane.default.create(pane, {
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

    return _Menu.default.create(menu, {
      autoGenerateKey: false,
      overrideProps: {
        items: (0, _map2.default)(panes, 'menuItem'),
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
        gridProps = (0, _objectWithoutPropertiesLoose2.default)(grid, ["paneWidth", "tabWidth"]);
    var position = menuPosition || menu.props.tabular === 'right' && 'right' || 'left';
    return /*#__PURE__*/_react.default.createElement(_Grid.default, gridProps, position === 'left' && _GridColumn.default.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }), _GridColumn.default.create({
      width: paneWidth,
      children: this.renderItems(),
      stretched: true
    }, {
      autoGenerateKey: false
    }), position === 'right' && _GridColumn.default.create({
      width: tabWidth,
      children: menu
    }, {
      autoGenerateKey: false
    }));
  };

  _proto.render = function render() {
    var menu = this.renderMenu();
    var rest = (0, _lib.getUnhandledProps)(Tab, this.props);
    var ElementType = (0, _lib.getElementType)(Tab, this.props);

    if (menu.props.vertical) {
      return /*#__PURE__*/_react.default.createElement(ElementType, rest, this.renderVertical(menu));
    }

    return /*#__PURE__*/_react.default.createElement(ElementType, rest, menu.props.attached !== 'bottom' && menu, this.renderItems(), menu.props.attached === 'bottom' && menu);
  };

  return Tab;
}(_lib.ModernAutoControlledComponent);

Tab.handledProps = ["activeIndex", "as", "defaultActiveIndex", "grid", "menu", "menuPosition", "onTabChange", "panes", "renderActiveOnly"];
Tab.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _propTypes.default.elementType,

  /** The initial activeIndex. */
  defaultActiveIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /** Index of the currently active tab. */
  activeIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Shorthand props for the Menu.
   * tabular, if true, will derive final value from `menuPosition`, otherwise set 'left' or 'right' explicitly.
   */
  menu: _propTypes.default.object,

  /** Align vertical menu */
  menuPosition: _propTypes.default.oneOf(['left', 'right']),

  /** Shorthand props for the Grid. Only applicable to vertical menus. */
  grid: _propTypes.default.object,

  /**
   * Called on tab change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed new activeIndex.
   * @param {object} data.activeIndex - The new proposed activeIndex.
   */
  onTabChange: _propTypes.default.func,

  /**
   * Array of objects describing each Menu.Item and Tab.Pane:
   * { menuItem: 'Home', render: () => <Tab.Pane /> }
   * or
   * { menuItem: 'Home', pane: 'Welcome' }
   */
  panes: _propTypes.default.arrayOf(_propTypes.default.shape({
    menuItem: _lib.customPropTypes.itemShorthand,
    pane: _lib.customPropTypes.itemShorthand,
    render: _propTypes.default.func
  })),

  /** A Tab can render only active pane. */
  renderActiveOnly: _propTypes.default.bool
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
Tab.Pane = _TabPane.default;
var _default = Tab;
exports.default = _default;