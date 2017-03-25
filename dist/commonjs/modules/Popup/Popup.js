'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _assign2 = require('lodash/assign');

var _assign3 = _interopRequireDefault(_assign2);

var _mapValues2 = require('lodash/mapValues');

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _includes2 = require('lodash/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _without2 = require('lodash/without');

var _without3 = _interopRequireDefault(_without2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lib = require('../../lib');

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _PopupContent = require('./PopupContent');

var _PopupContent2 = _interopRequireDefault(_PopupContent);

var _PopupHeader = require('./PopupHeader');

var _PopupHeader2 = _interopRequireDefault(_PopupHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _lib.makeDebugger)('popup');

var _meta = {
  name: 'Popup',
  type: _lib.META.TYPES.MODULE,
  props: {
    on: ['hover', 'click', 'focus'],
    positioning: ['top left', 'top right', 'bottom right', 'bottom left', 'right center', 'left center', 'top center', 'bottom center'],
    size: (0, _without3.default)(_lib.SUI.SIZES, 'medium', 'big', 'massive'),
    wide: [true, false, 'very']
  }
};

/**
 * A Popup displays additional information on top of a page.
 */

var Popup = function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popup.__proto__ || Object.getPrototypeOf(Popup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.hideOnScroll = function (e) {
      _this.setState({ closed: true });
      window.removeEventListener('scroll', _this.hideOnScroll);
      setTimeout(function () {
        return _this.setState({ closed: false });
      }, 50);
    }, _this.handleClose = function (e) {
      debug('handleClose()');
      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);
    }, _this.handleOpen = function (e) {
      debug('handleOpen()');
      _this.coords = e.currentTarget.getBoundingClientRect();

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);
    }, _this.handlePortalMount = function (e) {
      debug('handlePortalMount()');
      if (_this.props.hideOnScroll) {
        window.addEventListener('scroll', _this.hideOnScroll);
      }

      var onMount = _this.props.onMount;

      if (onMount) onMount(e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      debug('handlePortalUnmount()');
      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(e, _this.props);
    }, _this.popupMounted = function (ref) {
      debug('popupMounted()');
      _this.popupCoords = ref ? ref.getBoundingClientRect() : null;
      _this.setPopupStyle();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popup, [{
    key: 'computePopupStyle',
    value: function computePopupStyle(positions) {
      var style = { position: 'absolute' };

      // Do not access window/document when server side rendering
      if (!_lib.isBrowser) return style;

      var offset = this.props.offset;
      var _window = window,
          pageYOffset = _window.pageYOffset,
          pageXOffset = _window.pageXOffset;
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;


      if ((0, _includes3.default)(positions, 'right')) {
        style.right = Math.round(clientWidth - (this.coords.right + pageXOffset));
        style.left = 'auto';
      } else if ((0, _includes3.default)(positions, 'left')) {
        style.left = Math.round(this.coords.left + pageXOffset);
        style.right = 'auto';
      } else {
        // if not left nor right, we are horizontally centering the element
        var xOffset = (this.coords.width - this.popupCoords.width) / 2;
        style.left = Math.round(this.coords.left + xOffset + pageXOffset);
        style.right = 'auto';
      }

      if ((0, _includes3.default)(positions, 'top')) {
        style.bottom = Math.round(clientHeight - (this.coords.top + pageYOffset));
        style.top = 'auto';
      } else if ((0, _includes3.default)(positions, 'bottom')) {
        style.top = Math.round(this.coords.bottom + pageYOffset);
        style.bottom = 'auto';
      } else {
        // if not top nor bottom, we are vertically centering the element
        var yOffset = (this.coords.height + this.popupCoords.height) / 2;
        style.top = Math.round(this.coords.bottom + pageYOffset - yOffset);
        style.bottom = 'auto';

        var _xOffset = this.popupCoords.width + 8;
        if ((0, _includes3.default)(positions, 'right')) {
          style.right -= _xOffset;
        } else {
          style.left -= _xOffset;
        }
      }

      if (offset) {
        if ((0, _isNumber3.default)(style.right)) {
          style.right -= offset;
        } else {
          style.left -= offset;
        }
      }

      return style;
    }

    // check if the style would display
    // the popup outside of the view port

  }, {
    key: 'isStyleInViewport',
    value: function isStyleInViewport(style) {
      var _window2 = window,
          pageYOffset = _window2.pageYOffset,
          pageXOffset = _window2.pageXOffset;
      var _document$documentEle2 = document.documentElement,
          clientWidth = _document$documentEle2.clientWidth,
          clientHeight = _document$documentEle2.clientHeight;


      var element = {
        top: style.top,
        left: style.left,
        width: this.popupCoords.width,
        height: this.popupCoords.height
      };
      if ((0, _isNumber3.default)(style.right)) {
        element.left = clientWidth - style.right - element.width;
      }
      if ((0, _isNumber3.default)(style.bottom)) {
        element.top = clientHeight - style.bottom - element.height;
      }

      // hidden on top
      if (element.top < pageYOffset) return false;
      // hidden on the bottom
      if (element.top + element.height > pageYOffset + clientHeight) return false;
      // hidden the left
      if (element.left < pageXOffset) return false;
      // hidden on the right
      if (element.left + element.width > pageXOffset + clientWidth) return false;

      return true;
    }
  }, {
    key: 'setPopupStyle',
    value: function setPopupStyle() {
      if (!this.coords || !this.popupCoords) return;
      var positioning = this.props.positioning;
      var style = this.computePopupStyle(positioning);

      // Lets detect if the popup is out of the viewport and adjust
      // the position accordingly
      var positions = (0, _without3.default)(_meta.props.positioning, positioning);
      for (var i = 0; !this.isStyleInViewport(style) && i < positions.length; i++) {
        style = this.computePopupStyle(positions[i]);
        positioning = positions[i];
      }

      // Append 'px' to every numerical values in the style
      style = (0, _mapValues3.default)(style, function (value) {
        return (0, _isNumber3.default)(value) ? value + 'px' : value;
      });
      this.setState({ style: style, positioning: positioning });
    }
  }, {
    key: 'getPortalProps',
    value: function getPortalProps() {
      var portalProps = {};

      var _props = this.props,
          on = _props.on,
          hoverable = _props.hoverable;


      if (hoverable) {
        portalProps.closeOnPortalMouseLeave = true;
        portalProps.mouseLeaveDelay = 300;
      }

      if (on === 'click') {
        portalProps.openOnTriggerClick = true;
        portalProps.closeOnTriggerClick = true;
        portalProps.closeOnDocumentClick = true;
      } else if (on === 'focus') {
        portalProps.openOnTriggerFocus = true;
        portalProps.closeOnTriggerBlur = true;
      } else if (on === 'hover') {
        portalProps.openOnTriggerMouseEnter = true;
        portalProps.closeOnTriggerMouseLeave = true;
        // Taken from SUI: https://git.io/vPmCm
        portalProps.mouseLeaveDelay = 70;
        portalProps.mouseEnterDelay = 50;
      }

      return portalProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          basic = _props2.basic,
          children = _props2.children,
          className = _props2.className,
          content = _props2.content,
          flowing = _props2.flowing,
          header = _props2.header,
          inverted = _props2.inverted,
          size = _props2.size,
          trigger = _props2.trigger,
          wide = _props2.wide;
      var _state = this.state,
          positioning = _state.positioning,
          closed = _state.closed;

      var style = (0, _assign3.default)({}, this.state.style, this.props.style);
      var classes = (0, _classnames2.default)('ui', positioning, size, (0, _lib.useKeyOrValueAndKey)(wide, 'wide'), (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(flowing, 'flowing'), (0, _lib.useKeyOnly)(inverted, 'inverted'), 'popup transition visible', className);

      if (closed) return trigger;

      var unhandled = (0, _lib.getUnhandledProps)(Popup, this.props);
      var portalPropNames = (0, _keys3.default)(_Portal2.default.propTypes);

      var rest = (0, _omit3.default)(unhandled, portalPropNames);
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);
      var ElementType = (0, _lib.getElementType)(Popup, this.props);

      var popupJSX = _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, style: style, ref: this.popupMounted }),
        children,
        !children && _PopupHeader2.default.create(header),
        !children && _PopupContent2.default.create(content)
      );

      var mergedPortalProps = _extends({}, this.getPortalProps(), portalProps);
      debug('portal props:', mergedPortalProps);

      return _react2.default.createElement(
        _Portal2.default,
        _extends({}, mergedPortalProps, {
          trigger: trigger,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount
        }),
        popupJSX
      );
    }
  }]);

  return Popup;
}(_react.Component);

Popup.propTypes = {
  /** Display the popup without the pointing arrow */
  basic: _react.PropTypes.bool,

  /** You may pass a content as children of the Popup */
  children: _react.PropTypes.node,

  /** Classes to add to the Popup className. */
  className: _react.PropTypes.string,

  /** Simple text content for the popover */
  content: _react.PropTypes.node,

  /** A Flowing popup have no maximum width and continue to flow to fit its content */
  flowing: _react.PropTypes.bool,

  /** Takes up the entire width of its offset container */
  // TODO: implement the Popup fluid layout
  // fluid: PropTypes.bool,

  /** Header displayed above the content in bold */
  header: _react.PropTypes.string,

  /** Whether the popup should not close on hover */
  hoverable: _react.PropTypes.bool,

  /** Invert the colors of the popup */
  inverted: _react.PropTypes.bool,

  /** The node where the popup should mount.. */
  hideOnScroll: _react.PropTypes.bool,

  /** Horizontal offset in pixels to be applied to the popup */
  offset: _react.PropTypes.number,

  /** Event triggering the popup */
  on: _react.PropTypes.oneOf(_meta.props.on),

  /**
   * Called when a close event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: _react.PropTypes.func,

  /**
   * Called when the portal is mounted on the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: _react.PropTypes.func,

  /**
   * Called when an open event happens
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: _react.PropTypes.func,

  /**
   * Called when the portal is unmounted from the DOM
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: _react.PropTypes.func,

  /** Positioning for the popover */
  positioning: _react.PropTypes.oneOf(_meta.props.positioning),

  /** Popup size */
  size: _react.PropTypes.oneOf(_meta.props.size),

  /** custom popup style */
  style: _react.PropTypes.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: _react.PropTypes.node,

  /** Popup width */
  wide: _react.PropTypes.oneOf(_meta.props.wide)
};
Popup.defaultProps = {
  positioning: 'top left',
  on: 'hover'
};
Popup._meta = _meta;
Popup.Content = _PopupContent2.default;
Popup.Header = _PopupHeader2.default;
exports.default = Popup;