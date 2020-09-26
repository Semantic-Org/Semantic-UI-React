"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = wrapChild;

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireDefault(require("../Transition"));

/**
 * Wraps a React element with a Transition component.
 *
 * @param {React.ReactElement} child
 * @param {Function} onHide
 * @param {Object} [options={}]
 * @param {String} [options.animation]
 * @param {Number} [options.duration]
 * @param {Boolean} [options.directional]
 * @param {Boolean} [options.transitionOnMount=false]
 * @param {Boolean} [options.visible=true]
 */
function wrapChild(child, onHide, options) {
  if (options === void 0) {
    options = {};
  }

  var key = child.key;
  var _options = options,
      animation = _options.animation,
      directional = _options.directional,
      duration = _options.duration,
      _options$transitionOn = _options.transitionOnMount,
      transitionOnMount = _options$transitionOn === void 0 ? false : _options$transitionOn,
      _options$visible = _options.visible,
      visible = _options$visible === void 0 ? true : _options$visible;
  return /*#__PURE__*/_react.default.createElement(_Transition.default, {
    animation: animation,
    directional: directional,
    duration: duration,
    key: key,
    onHide: onHide,
    reactKey: key,
    transitionOnMount: transitionOnMount,
    visible: visible
  }, child);
}

wrapChild.handledProps = [];