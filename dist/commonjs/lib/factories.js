'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHTMLLabel = exports.createHTMLInput = exports.createHTMLImage = exports.getChildKey = undefined;

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isNumber2 = require('lodash/isNumber');

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createShorthand = createShorthand;
exports.createShorthandFactory = createShorthandFactory;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ============================================================
// Factory Utilities
// ============================================================
/**
 * A pure function that generates a unique child key hash code from an element's props.
 *
 * @param {object} props A ReactElement's props object.
 * @returns {number}
 */
var getChildKey = exports.getChildKey = function getChildKey(props) {
  var key = props.key,
      childKey = props.childKey;

  // already defines a key

  if (key) return key;

  // defines a childKey function or value
  if (childKey) return typeof childKey === 'function' ? childKey(props) : childKey;

  // 1. Stringify props to a short as possible run on string of key/values.
  // 2. Don't stringify entire functions, use the function name || 'f'.
  // 3. Generate a short hash number from the string.
  //     props  : { color: 'red', onClick: handleClick }
  //     string : 'color:"red",onClick:handleClick'
  //     hash   : 110042245
  return Object.keys(props).map(function (name) {
    var val = props[name];
    var type = typeof val === 'undefined' ? 'undefined' : _typeof(val);

    var valueString = type === 'string' && val || type === 'number' && val || type === 'boolean' && (val ? 'true' : 'false') || type === 'function' && (val.name || 'function') || Array.isArray(val) && ['[', val.join(','), ']'].join('') || val === null && 'null' || type === 'object' && ['{', Object.keys(val).map(function (k) {
      return [k, ':', val[k]].join('');
    }), '}'].join('') || val === undefined && 'undefined';

    return [name, ':', valueString].join('');
  }).join(',');
};

// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {object|function} [defaultProps={}] Default props object or function (called with regular props).
 * @param {boolean} generateKey Whether or not to generate a child key, useful for collections.
 * @returns {object|null}
 */
function createShorthand(Component, mapValueToProps, val) {
  var defaultProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var generateKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }
  // short circuit for disabling shorthand
  if (val === null) return null;

  var isReactElement = (0, _react.isValidElement)(val);
  var isPropsObject = (0, _isPlainObject3.default)(val);
  var isPrimitiveValue = (0, _isString3.default)(val) || (0, _isNumber3.default)(val) || (0, _isArray3.default)(val);

  // ----------------------------------------
  // Build up props
  // ----------------------------------------

  // User's props
  var usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val);

  // Default props
  defaultProps = (0, _isFunction3.default)(defaultProps) ? defaultProps(usersProps) : defaultProps;

  // Merge props and className
  var props = _extends({}, defaultProps, usersProps);

  if ((0, _has3.default)(usersProps, 'className') || (0, _has3.default)(defaultProps.className)) {
    props.className = (0, _classnames2.default)(defaultProps.className, usersProps.className); // eslint-disable-line react/prop-types
  }

  // Generate child key
  if (generateKey) props.key = getChildKey(props); // eslint-disable-line react/prop-types

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (isReactElement) return (0, _react.cloneElement)(val, props);

  // Create ReactElements from built up props
  if (isPrimitiveValue || isPropsObject) return _react2.default.createElement(Component, props);

  // Otherwise null
  return null;
}

// ============================================================
// Factories Creators
// ============================================================

function createShorthandFactory(Component, mapValueToProps, generateKey) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, defaultProps) {
    return createShorthand(Component, mapValueToProps, val, defaultProps, generateKey);
  };
}

// ============================================================
// HTML Factories
// ============================================================
var createHTMLImage = exports.createHTMLImage = createShorthandFactory('img', function (value) {
  return { src: value };
});
var createHTMLInput = exports.createHTMLInput = createShorthandFactory('input', function (value) {
  return { type: value };
});
var createHTMLLabel = exports.createHTMLLabel = createShorthandFactory('label', function (value) {
  return { children: value };
});