"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.placementMapping = exports.positions = exports.positionsMapping = void 0;

var _invert2 = _interopRequireDefault(require("lodash/invert"));

var _keys2 = _interopRequireDefault(require("lodash/keys"));

var positionsMapping = {
  'top center': 'top',
  'top left': 'top-start',
  'top right': 'top-end',
  'bottom center': 'bottom',
  'bottom left': 'bottom-start',
  'bottom right': 'bottom-end',
  'right center': 'right',
  'left center': 'left'
};
exports.positionsMapping = positionsMapping;
var positions = (0, _keys2.default)(positionsMapping);
exports.positions = positions;
var placementMapping = (0, _invert2.default)(positionsMapping);
exports.placementMapping = placementMapping;