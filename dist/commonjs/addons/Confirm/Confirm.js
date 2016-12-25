'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Button = require('../../elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require('../../modules/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Confirm modal gives the user a choice to confirm or cancel an action
 * @see Modal
 */
function Confirm(props) {
  var open = props.open,
      cancelButton = props.cancelButton,
      confirmButton = props.confirmButton,
      header = props.header,
      content = props.content,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel;

  var rest = (0, _lib.getUnhandledProps)(Confirm, props);

  // `open` is auto controlled by the Modal
  // It cannot be present (even undefined) with `defaultOpen`
  // only apply it if the user provided an open prop
  var openProp = {};
  if ((0, _has3.default)(props, 'open')) openProp.open = open;

  return _react2.default.createElement(
    _Modal2.default,
    _extends({}, openProp, { size: 'small', onClose: onCancel }, rest),
    header && _react2.default.createElement(
      _Modal2.default.Header,
      null,
      header
    ),
    content && _react2.default.createElement(
      _Modal2.default.Content,
      null,
      content
    ),
    _react2.default.createElement(
      _Modal2.default.Actions,
      null,
      _react2.default.createElement(
        _Button2.default,
        { onClick: onCancel },
        cancelButton
      ),
      _react2.default.createElement(
        _Button2.default,
        { primary: true, onClick: onConfirm },
        confirmButton
      )
    )
  );
}

Confirm._meta = {
  name: 'Confirm',
  type: _lib.META.TYPES.ADDON
};

Confirm.propTypes = {
  /** Whether or not the modal is visible */
  open: _react.PropTypes.bool,

  /** The cancel button text */
  cancelButton: _react.PropTypes.string,

  /** The OK button text */
  confirmButton: _react.PropTypes.string,

  /** The ModalHeader text */
  header: _react.PropTypes.string,

  /** The ModalContent text. */
  content: _react.PropTypes.string,

  /** Called when the OK button is clicked */
  onConfirm: _react.PropTypes.func,

  /** Called when the Cancel button is clicked */
  onCancel: _react.PropTypes.func
};

Confirm.defaultProps = {
  cancelButton: 'Cancel',
  confirmButton: 'OK',
  content: 'Are you sure?'
};

exports.default = Confirm;