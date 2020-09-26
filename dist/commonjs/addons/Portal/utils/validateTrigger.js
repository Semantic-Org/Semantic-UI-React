"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = validateTrigger;

var _react = _interopRequireDefault(require("react"));

var ReactIs = _interopRequireWildcard(require("react-is"));

/**
 * Asserts that a passed element can be used cloned a props will be applied properly.
 */
function validateTrigger(element) {
  if (element) {
    _react.default.Children.only(element);

    if (ReactIs.isFragment(element)) {
      throw new Error('An "React.Fragment" cannot be used as a `trigger`.');
    }
  }
}