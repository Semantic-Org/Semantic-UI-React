"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _isBrowser = _interopRequireDefault(require("../isBrowser"));

// useLayoutEffect() produces a warning with SSR rendering
// https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
var useIsomorphicLayoutEffect = (0, _isBrowser.default)() && process.env.NODE_ENV !== 'test' ? _react.default.useLayoutEffect : _react.default.useEffect;
var _default = useIsomorphicLayoutEffect;
exports.default = _default;