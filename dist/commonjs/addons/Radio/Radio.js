'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../lib');

var _Checkbox = require('../../modules/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A Radio is sugar for <Checkbox radio />.
 * Useful for exclusive groups of sliders or toggles.
 * @see Checkbox
 * @see Form
 */
function Radio(props) {
  var slider = props.slider,
      toggle = props.toggle,
      type = props.type;

  var rest = (0, _lib.getUnhandledProps)(Radio, props);
  // const ElementType = getElementType(Radio, props)
  // radio, slider, toggle are exclusive
  // use an undefined radio if slider or toggle are present
  var radio = !(slider || toggle) || undefined;

  return _react2.default.createElement(_Checkbox2.default, _extends({}, rest, { type: type, radio: radio, slider: slider, toggle: toggle }));
}

Radio._meta = {
  name: 'Radio',
  type: _lib.META.TYPES.ADDON,
  props: {
    type: _Checkbox2.default._meta.props.type
  }
};

Radio.propTypes = {
  /** Format to emphasize the current selection state */
  slider: _Checkbox2.default.propTypes.slider,

  /** Format to show an on or off choice */
  toggle: _Checkbox2.default.propTypes.toggle,

  /** HTML input type, either checkbox or radio. */
  type: _react.PropTypes.oneOf(Radio._meta.props.type)
};

Radio.defaultProps = {
  type: 'radio'
};

exports.default = Radio;