"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _invoke2 = _interopRequireDefault(require("lodash/invoke"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _AccordionTitle = _interopRequireDefault(require("./AccordionTitle"));

var _AccordionContent = _interopRequireDefault(require("./AccordionContent"));

/**
 * A panel sub-component for Accordion component.
 */
var AccordionPanel = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(AccordionPanel, _Component);

  function AccordionPanel() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.handleTitleOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e, titleProps) {
          (0, _invoke2.default)(predefinedProps, 'onClick', e, titleProps);
          (0, _invoke2.default)(_this.props, 'onTitleClick', e, titleProps);
        }
      };
    };

    return _this;
  }

  var _proto = AccordionPanel.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        content = _this$props.content,
        index = _this$props.index,
        title = _this$props.title;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _AccordionTitle.default.create(title, {
      autoGenerateKey: false,
      defaultProps: {
        active: active,
        index: index
      },
      overrideProps: this.handleTitleOverrides
    }), _AccordionContent.default.create(content, {
      autoGenerateKey: false,
      defaultProps: {
        active: active
      }
    }));
  };

  return AccordionPanel;
}(_react.Component);

AccordionPanel.handledProps = ["active", "content", "index", "onTitleClick", "title"];
AccordionPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  /** Whether or not the title is in the open state. */
  active: _propTypes.default.bool,

  /** A shorthand for Accordion.Content. */
  content: _lib.customPropTypes.itemShorthand,

  /** A panel index. */
  index: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Called when a panel title is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All item props.
   */
  onTitleClick: _propTypes.default.func,

  /** A shorthand for Accordion.Title. */
  title: _lib.customPropTypes.itemShorthand
} : {};
AccordionPanel.create = (0, _lib.createShorthandFactory)(AccordionPanel, null);
var _default = AccordionPanel;
exports.default = _default;