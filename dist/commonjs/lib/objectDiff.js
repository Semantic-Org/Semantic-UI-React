'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectDiff = undefined;

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _transform2 = require('lodash/transform');

var _transform3 = _interopRequireDefault(_transform2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Naive and inefficient object difference, intended for development / debugging use only.
 * Deleted keys are shown as [DELETED].
 * @param {{}} source The source object
 * @param {{}} target The target object.
 * @returns {{}} A new object containing new/modified/deleted keys.
 * @example
 * import { objectDiff } from 'src/lib'
 *
 * const a = { key: 'val', foo: 'bar' }
 * const b = { key: 'val', foo: 'baz' }
 *
 * objectDiff(a, b)
 * //=> { foo: 'baz' }
 */
var objectDiff = exports.objectDiff = function objectDiff(source, target) {
  return (0, _transform3.default)(source, function (res, val, key) {
    // deleted keys
    if (!(0, _has3.default)(target, key)) res[key] = '[DELETED]';
    // new keys / changed values
    else if (!(0, _isEqual3.default)(val, target[key])) res[key] = target[key];
  }, {});
};