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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalActions = require('./ModalActions');

var _ModalActions2 = _interopRequireDefault(_ModalActions);

var _ModalDescription = require('./ModalDescription');

var _ModalDescription2 = _interopRequireDefault(_ModalDescription);

var _Icon = require('../../elements/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('../../addons/Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _lib = require('../../lib');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = (0, _lib.makeDebugger)('modal');

var _meta = {
  name: 'Modal',
  type: _lib.META.TYPES.MODULE,
  props: {
    size: ['fullscreen', 'large', 'small'],
    dimmer: ['inverted', 'blurring']
  }
};

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site
 * @see Confirm
 * @see Portal
 */

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleClose = function (e) {
      debug('close()');

      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleOpen = function (e) {
      debug('open()');

      var onOpen = _this.props.onOpen;

      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
    }, _this.handlePortalMount = function (e) {
      debug('handlePortalMount()');
      var _this$props = _this.props,
          dimmer = _this$props.dimmer,
          mountNode = _this$props.mountNode;


      if (dimmer) {
        debug('adding dimmer');
        mountNode.classList.add('dimmable', 'dimmed');

        if (dimmer === 'blurring') {
          debug('adding blurred dimmer');
          mountNode.classList.add('blurring');
        }
      }

      _this.setPosition();

      var onMount = _this.props.onMount;

      if (onMount) onMount(e, _this.props);
    }, _this.handlePortalUnmount = function (e) {
      debug('handlePortalUnmount()');

      // Always remove all dimmer classes.
      // If the dimmer value changes while the modal is open, then removing its
      // current value could leave cruft classes previously added.
      var mountNode = _this.props.mountNode;

      mountNode.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable');

      cancelAnimationFrame(_this.animationRequestId);

      var onUnmount = _this.props.onUnmount;

      if (onUnmount) onUnmount(e, _this.props);
    }, _this.setPosition = function () {
      if (_this._modalNode) {
        var mountNode = _this.props.mountNode;

        var _this$_modalNode$getB = _this._modalNode.getBoundingClientRect(),
            height = _this$_modalNode$getB.height;

        var marginTop = -Math.round(height / 2);
        var scrolling = height >= window.innerHeight;

        var newState = {};

        if (_this.state.marginTop !== marginTop) {
          newState.marginTop = marginTop;
        }

        if (_this.state.scrolling !== scrolling) {
          newState.scrolling = scrolling;

          if (scrolling) {
            mountNode.classList.add('scrolling');
          } else {
            mountNode.classList.remove('scrolling');
          }
        }

        if (Object.keys(newState).length > 0) _this.setState(newState);
      }

      _this.animationRequestId = requestAnimationFrame(_this.setPosition);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Modal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      debug('componentWillUnmount()');
      this.handlePortalUnmount();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      var _props = this.props,
          basic = _props.basic,
          children = _props.children,
          className = _props.className,
          closeIcon = _props.closeIcon,
          dimmer = _props.dimmer,
          mountNode = _props.mountNode,
          size = _props.size;

      // Short circuit when server side rendering

      if (!_lib.isBrowser) return null;

      var _state = this.state,
          marginTop = _state.marginTop,
          scrolling = _state.scrolling;

      var classes = (0, _classnames2.default)('ui', size, (0, _lib.useKeyOnly)(basic, 'basic'), (0, _lib.useKeyOnly)(scrolling, 'scrolling'), 'modal transition visible active', className);
      var unhandled = (0, _lib.getUnhandledProps)(Modal, this.props);
      var portalPropNames = (0, _keys3.default)(_Portal2.default.propTypes);

      var rest = (0, _omit3.default)(unhandled, portalPropNames);
      var portalProps = (0, _pick3.default)(unhandled, portalPropNames);
      var ElementType = (0, _lib.getElementType)(Modal, this.props);

      var closeIconName = closeIcon === true ? 'close' : closeIcon;

      var modalJSX = _react2.default.createElement(
        ElementType,
        _extends({}, rest, { className: classes, style: { marginTop: marginTop }, ref: function ref(c) {
            return _this2._modalNode = c;
          } }),
        _Icon2.default.create(closeIconName, { onClick: this.handleClose }),
        children
      );

      // wrap dimmer modals
      var dimmerClasses = !dimmer ? null : (0, _classnames2.default)('ui', dimmer === 'inverted' && 'inverted', 'page modals dimmer transition visible active');

      // Heads up!
      //
      // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
      // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
      //
      // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
      // We need the immediate child to be the dimmer to :not() blur the modal itself!
      // Otherwise, the portal div is also blurred, blurring the modal.
      //
      // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

      return _react2.default.createElement(
        _Portal2.default,
        _extends({
          closeOnRootNodeClick: true,
          closeOnDocumentClick: false
        }, portalProps, {
          className: dimmerClasses,
          mountNode: mountNode,
          onClose: this.handleClose,
          onMount: this.handlePortalMount,
          onOpen: this.handleOpen,
          onUnmount: this.handlePortalUnmount,
          open: open
        }),
        modalJSX
      );
    }
  }]);

  return Modal;
}(_lib.AutoControlledComponent);

Modal.propTypes = {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _react.PropTypes.node,

  /** Additional classes. */
  className: _react.PropTypes.string,

  /** Icon */
  closeIcon: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.object, _react.PropTypes.bool]),

  /** A modal can reduce its complexity */
  basic: _react.PropTypes.bool,

  /** Initial value of open. */
  defaultOpen: _react.PropTypes.bool,

  /** A modal can appear in a dimmer */
  dimmer: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(_meta.props.dimmer)]),

  /** The node where the modal should mount.. */
  mountNode: _react.PropTypes.any,

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

  /** Controls whether or not the Modal is displayed. */
  open: _react.PropTypes.bool,

  /** A modal can vary in size */
  size: _react.PropTypes.oneOf(_meta.props.size)

};
Modal.defaultProps = {
  dimmer: true,
  // Do not access document when server side rendering
  mountNode: _lib.isBrowser ? document.body : null
};
Modal.autoControlledProps = ['open'];
Modal._meta = _meta;
Modal.Header = _ModalHeader2.default;
Modal.Content = _ModalContent2.default;
Modal.Description = _ModalDescription2.default;
Modal.Actions = _ModalActions2.default;
exports.default = Modal;