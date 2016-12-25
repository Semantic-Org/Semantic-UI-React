'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecate = exports.collectionShorthand = exports.itemShorthand = exports.contentShorthand = exports.demand = exports.givenProps = exports.some = exports.every = exports.disallow = exports.suggest = exports.as = undefined;

var _isObject2 = require('lodash/fp/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _pick2 = require('lodash/fp/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _keys2 = require('lodash/fp/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _isPlainObject2 = require('lodash/fp/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _isFunction2 = require('lodash/fp/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _compact2 = require('lodash/fp/compact');

var _compact3 = _interopRequireDefault(_compact2);

var _take2 = require('lodash/fp/take');

var _take3 = _interopRequireDefault(_take2);

var _sortBy2 = require('lodash/fp/sortBy');

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _sum2 = require('lodash/fp/sum');

var _sum3 = _interopRequireDefault(_sum2);

var _min2 = require('lodash/fp/min');

var _min3 = _interopRequireDefault(_min2);

var _map2 = require('lodash/fp/map');

var _map3 = _interopRequireDefault(_map2);

var _flow2 = require('lodash/fp/flow');

var _flow3 = _interopRequireDefault(_flow2);

var _includes2 = require('lodash/fp/includes');

var _includes3 = _interopRequireDefault(_includes2);

var _isNil2 = require('lodash/fp/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _react = require('react');

var _leven = require('./leven');

var _leven2 = _interopRequireDefault(_leven);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var typeOf = function typeOf() {
  var _Object$prototype$toS;

  return (_Object$prototype$toS = Object.prototype.toString).call.apply(_Object$prototype$toS, arguments);
};

/**
 * Ensure a component can render as a give prop value.
 */
var as = exports.as = function as() {
  return _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]).apply(undefined, arguments);
};

/**
 * Similar to PropTypes.oneOf but shows closest matches.
 * Word order is ignored allowing `left chevron` to match `chevron left`.
 * Useful for very large lists of options (e.g. Icon name, Flag name, etc.)
 * @param {string[]} suggestions An array of allowed values.
 */
var suggest = exports.suggest = function suggest(suggestions) {
  return function (props, propName, componentName) {
    if (!Array.isArray(suggestions)) {
      throw new Error(['Invalid argument supplied to suggest, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }
    var propValue = props[propName];

    // skip if prop is undefined or is included in the suggestions
    if ((0, _isNil3.default)(propValue) || propValue === false || (0, _includes3.default)(propValue, suggestions)) return;

    // find best suggestions
    var propValueWords = propValue.split(' ');

    /* eslint-disable max-nested-callbacks */
    var bestMatches = (0, _flow3.default)((0, _map3.default)(function (suggestion) {
      var suggestionWords = suggestion.split(' ');

      var propValueScore = (0, _flow3.default)((0, _map3.default)(function (x) {
        return (0, _map3.default)(function (y) {
          return (0, _leven2.default)(x, y);
        }, suggestionWords);
      }), (0, _map3.default)(_min3.default), _sum3.default)(propValueWords);

      var suggestionScore = (0, _flow3.default)((0, _map3.default)(function (x) {
        return (0, _map3.default)(function (y) {
          return (0, _leven2.default)(x, y);
        }, propValueWords);
      }), (0, _map3.default)(_min3.default), _sum3.default)(suggestionWords);

      return { suggestion: suggestion, score: propValueScore + suggestionScore };
    }), (0, _sortBy3.default)(['score', 'suggestion']), (0, _take3.default)(3))(suggestions);
    /* eslint-enable max-nested-callbacks */

    // skip if a match scored 0
    // since we're matching on words (classNames) this allows any word order to pass validation
    // e.g. `left chevron` vs `chevron left`
    if (bestMatches.some(function (x) {
      return x.score === 0;
    })) return;

    return new Error(['Invalid prop `' + propName + '` of value `' + propValue + '` supplied to `' + componentName + '`.', '\n\nInstead of `' + propValue + '`, did you mean:', bestMatches.map(function (x) {
      return '\n  - ' + x.suggestion;
    }).join(''), '\n'].join(''));
  };
};

/**
 * Disallow other props form being defined with this prop.
 * @param {string[]} disallowedProps An array of props that cannot be used with this prop.
 */
var disallow = exports.disallow = function disallow(disallowedProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(disallowedProps)) {
      throw new Error(['Invalid argument supplied to disallow, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }

    // skip if prop is undefined
    if ((0, _isNil3.default)(props[propName]) || props[propName] === false) return;

    // find disallowed props with values
    var disallowed = disallowedProps.reduce(function (acc, disallowedProp) {
      if (!(0, _isNil3.default)(props[disallowedProp]) && props[disallowedProp] !== false) {
        return [].concat(_toConsumableArray(acc), [disallowedProp]);
      }
      return acc;
    }, []);

    if (disallowed.length > 0) {
      return new Error(['Prop `' + propName + '` in `' + componentName + '` conflicts with props: `' + disallowed.join('`, `') + '`.', 'They cannot be defined together, choose one or the other.'].join(' '));
    }
  };
};

/**
 * Ensure a prop adherers to multiple prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
var every = exports.every = function every(validators) {
  return function (props, propName, componentName) {
    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to every, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var errors = (0, _flow3.default)((0, _map3.default)(function (validator) {
      if (typeof validator !== 'function') {
        throw new Error('every() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
      }
      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }), _compact3.default)(validators);

    // we can only return one error at a time
    return errors[0];
  };
};

/**
 * Ensure a prop adherers to at least one of the given prop type validators.
 * @param {function[]} validators An array of propType functions.
 */
var some = exports.some = function some(validators) {
  return function (props, propName, componentName) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
      rest[_key2 - 3] = arguments[_key2];
    }

    if (!Array.isArray(validators)) {
      throw new Error(['Invalid argument supplied to some, expected an instance of array.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var errors = (0, _compact3.default)((0, _map3.default)(validators, function (validator) {
      if (!(0, _isFunction3.default)(validator)) {
        throw new Error('some() argument "validators" should contain functions, found: ' + typeOf(validator) + '.');
      }
      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }));

    // fail only if all validators failed
    if (errors.length === validators.length) {
      var error = new Error('One of these validators must pass:');
      error.message += '\n' + (0, _map3.default)(errors, function (err, i) {
        return '[' + (i + 1) + ']: ' + err.message;
      }).join('\n');
      return error;
    }
  };
};

/**
 * Ensure a validator passes only when a component has a given propsShape.
 * @param {object} propsShape An object describing the prop shape.
 * @param {function} validator A propType function.
 */
var givenProps = exports.givenProps = function givenProps(propsShape, validator) {
  return function (props, propName, componentName) {
    for (var _len3 = arguments.length, rest = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
      rest[_key3 - 3] = arguments[_key3];
    }

    if (!(0, _isPlainObject3.default)(propsShape)) {
      throw new Error(['Invalid argument supplied to givenProps, expected an object.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    if (typeof validator !== 'function') {
      throw new Error(['Invalid argument supplied to givenProps, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    var shouldValidate = (0, _keys3.default)(propsShape).every(function (key) {
      var val = propsShape[key];
      // require propShape validators to pass or prop values to match
      return typeof val === 'function' ? !val.apply(undefined, [props, key, componentName].concat(rest)) : val === props[propName];
    });

    if (!shouldValidate) return;

    var error = validator.apply(undefined, [props, propName, componentName].concat(rest));

    if (error) {
      // poor mans shallow pretty print, prevents JSON circular reference errors
      var prettyProps = '{ ' + (0, _keys3.default)((0, _pick3.default)((0, _keys3.default)(propsShape), props)).map(function (key) {
        var val = props[key];
        var renderedValue = val;
        if (typeof val === 'string') renderedValue = '"' + val + '"';else if (Array.isArray(val)) renderedValue = '[' + val.join(', ') + ']';else if ((0, _isObject3.default)(val)) renderedValue = '{...}';

        return key + ': ' + renderedValue;
      }).join(', ') + ' }';

      error.message = 'Given props ' + prettyProps + ': ' + error.message;
      return error;
    }
  };
};

/**
 * Define prop dependencies by requiring other props.
 * @param {string[]} requiredProps An array of required prop names.
 */
var demand = exports.demand = function demand(requiredProps) {
  return function (props, propName, componentName) {
    if (!Array.isArray(requiredProps)) {
      throw new Error(['Invalid `requiredProps` argument supplied to require, expected an instance of array.', ' See `' + propName + '` prop in `' + componentName + '`.'].join(''));
    }

    // skip if prop is undefined
    if (props[propName] === undefined) return;

    var missingRequired = requiredProps.filter(function (requiredProp) {
      return props[requiredProp] === undefined;
    });
    if (missingRequired.length > 0) {
      return new Error('`' + propName + '` prop in `' + componentName + '` requires props: `' + missingRequired.join('`, `') + '`.');
    }
  };
};

/**
 * Ensure a component can render as a node passed as a prop value in place of children.
 */
var contentShorthand = exports.contentShorthand = function contentShorthand() {
  return every([disallow(['children']), _react.PropTypes.node]).apply(undefined, arguments);
};

/**
 * Item shorthand is a description of a component that can be a literal,
 * a props object, or an element.
 */
var itemShorthand = exports.itemShorthand = function itemShorthand() {
  return every([disallow(['children']), _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.node, _react.PropTypes.object])]).apply(undefined, arguments);
};

/**
 * Collection shorthand ensures a prop is an array of item shorthand.
 */
var collectionShorthand = exports.collectionShorthand = function collectionShorthand() {
  return every([disallow(['children']), _react.PropTypes.arrayOf(itemShorthand)]).apply(undefined, arguments);
};

/**
 * Show a deprecated warning for component props with a help message and optional validator.
 * @param {string} help A help message to display with the deprecation warning.
 * @param {function} [validator] A propType function.
 */
var deprecate = exports.deprecate = function deprecate(help, validator) {
  return function (props, propName, componentName) {
    for (var _len4 = arguments.length, args = Array(_len4 > 3 ? _len4 - 3 : 0), _key4 = 3; _key4 < _len4; _key4++) {
      args[_key4 - 3] = arguments[_key4];
    }

    if (typeof help !== 'string') {
      throw new Error(['Invalid `help` argument supplied to deprecate, expected a string.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
    }

    // skip if prop is undefined
    if (props[propName] === undefined) return;

    // deprecation error and help
    var error = new Error('The `' + propName + '` prop in `' + componentName + '` is deprecated.');
    if (help) error.message += ' ' + help;

    // add optional validation error message
    if (validator) {
      if (typeof validator === 'function') {
        var validationError = validator.apply(undefined, [props, propName, componentName].concat(args));
        if (validationError) {
          error.message = error.message + ' ' + validationError.message;
        }
      } else {
        throw new Error(['Invalid argument supplied to deprecate, expected a function.', 'See `' + propName + '` prop in `' + componentName + '`.'].join(' '));
      }
    }

    return error;
  };
};