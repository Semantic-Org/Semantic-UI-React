'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByType = exports.someByType = undefined;

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _some2 = require('lodash/some');

var _some3 = _interopRequireDefault(_some2);

var _react = require('react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Determine if child by type exists in children.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {Boolean}
 */
var someByType = exports.someByType = function someByType(children, type) {
  return (0, _some3.default)(_react.Children.toArray(children), { type: type });
};

/**
 * Find child by type.
 * @param {Object} children The children prop of a component.
 * @param {string|Function} type An html tag name string or React component.
 * @returns {undefined|Object}
 */
var findByType = exports.findByType = function findByType(children, type) {
  return (0, _find3.default)(_react.Children.toArray(children), { type: type });
};