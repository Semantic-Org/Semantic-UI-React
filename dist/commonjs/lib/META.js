'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrivate = exports.isChild = exports.isParent = exports.isModule = exports.isView = exports.isElement = exports.isCollection = exports.isAddon = exports.isType = exports.isMeta = exports.TYPES = undefined;

var _startsWith2 = require('lodash/fp/startsWith');

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _has2 = require('lodash/fp/has');

var _has3 = _interopRequireDefault(_has2);

var _eq2 = require('lodash/fp/eq');

var _eq3 = _interopRequireDefault(_eq2);

var _flow2 = require('lodash/fp/flow');

var _flow3 = _interopRequireDefault(_flow2);

var _curry2 = require('lodash/fp/curry');

var _curry3 = _interopRequireDefault(_curry2);

var _get2 = require('lodash/fp/get');

var _get3 = _interopRequireDefault(_get2);

var _includes2 = require('lodash/fp/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _values2 = require('lodash/fp/values');

var _values3 = _interopRequireDefault(_values2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPES = exports.TYPES = {
  ADDON: 'addon',
  COLLECTION: 'collection',
  ELEMENT: 'element',
  VIEW: 'view',
  MODULE: 'module'
};

var TYPE_VALUES = (0, _values3.default)(TYPES);

/**
 * Determine if an object qualifies as a META object.
 * It must have the required keys and valid values.
 * @private
 * @param {Object} _meta A proposed component _meta object.
 * @returns {Boolean}
 */
var isMeta = exports.isMeta = function isMeta(_meta) {
  return (0, _includes3.default)((0, _get3.default)('type', _meta), TYPE_VALUES);
};

/**
 * Extract a component's _meta object and optional key.
 * Handles literal _meta objects, classes with _meta, objects with _meta
 * @private
 * @param {function|object} metaArg A class, a component instance, or meta object..
 * @returns {object|string|undefined}
 */
var getMeta = function getMeta(metaArg) {
  // literal
  if (isMeta(metaArg)) return metaArg;

  // from prop
  else if (isMeta((0, _get3.default)('_meta', metaArg))) return metaArg._meta;

    // from class
    else if (isMeta((0, _get3.default)('constructor._meta', metaArg))) return metaArg.constructor._meta;
};

var metaHasKeyValue = (0, _curry3.default)(function (key, val, metaArg) {
  return (0, _flow3.default)(getMeta, (0, _get3.default)(key), (0, _eq3.default)(val))(metaArg);
});
var isType = exports.isType = metaHasKeyValue('type');

// ----------------------------------------
// Export
// ----------------------------------------

// type
var isAddon = exports.isAddon = isType(TYPES.ADDON);
var isCollection = exports.isCollection = isType(TYPES.COLLECTION);
var isElement = exports.isElement = isType(TYPES.ELEMENT);
var isView = exports.isView = isType(TYPES.VIEW);
var isModule = exports.isModule = isType(TYPES.MODULE);

// parent
var isParent = exports.isParent = (0, _flow3.default)(getMeta, (0, _has3.default)('parent'), (0, _eq3.default)(false));
var isChild = exports.isChild = (0, _flow3.default)(getMeta, (0, _has3.default)('parent'));

// other
var isPrivate = exports.isPrivate = (0, _flow3.default)(getMeta, (0, _get3.default)('name'), (0, _startsWith3.default)('_'));