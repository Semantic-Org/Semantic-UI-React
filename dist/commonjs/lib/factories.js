"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createShorthand = createShorthand;
exports.createShorthandFactory = createShorthandFactory;
exports.createHTMLParagraph = exports.createHTMLLabel = exports.createHTMLInput = exports.createHTMLImage = exports.createHTMLIframe = exports.createHTMLDivision = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isBoolean2 = _interopRequireDefault(require("lodash/isBoolean"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _clsx = _interopRequireDefault(require("clsx"));

var React = _interopRequireWildcard(require("react"));

var DEPRECATED_CALLS = {}; // ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */

function createShorthand(Component, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if ((0, _isNil2.default)(val) || (0, _isBoolean2.default)(val)) {
    return null;
  }

  var valIsString = (0, _isString2.default)(val);
  var valIsNumber = (0, _isNumber2.default)(val);
  var valIsFunction = (0, _isFunction2.default)(val);
  var valIsReactElement = /*#__PURE__*/React.isValidElement(val);
  var valIsPropsObject = (0, _isPlainObject2.default)(val);
  var valIsPrimitiveValue = valIsString || valIsNumber || (0, _isArray2.default)(val); // unhandled type return null

  /* eslint-disable no-console */

  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(['Shorthand value must be a string|number|array|object|ReactElement|function.', ' Use null|undefined|boolean for none', " Received " + typeof val + "."].join(''));
    }

    return null;
  }
  /* eslint-enable no-console */
  // ----------------------------------------
  // Build up props
  // ----------------------------------------


  var _options = options,
      _options$defaultProps = _options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps; // User's props

  var usersProps = valIsReactElement && val.props || valIsPropsObject && val || valIsPrimitiveValue && mapValueToProps(val); // Override props

  var _options2 = options,
      _options2$overridePro = _options2.overrideProps,
      overrideProps = _options2$overridePro === void 0 ? {} : _options2$overridePro;
  overrideProps = (0, _isFunction2.default)(overrideProps) ? overrideProps((0, _extends2.default)({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = (0, _extends2.default)({}, defaultProps, usersProps, overrideProps); // Merge className

  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = (0, _clsx.default)(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = (0, _uniq2.default)(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = (0, _extends2.default)({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if ((0, _isNil2.default)(props.key)) {
    var childKey = props.childKey;
    var _options3 = options,
        _options3$autoGenerat = _options3.autoGenerateKey,
        autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;

    if (!(0, _isNil2.default)(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey;
      delete props.childKey;
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val;
    }
  } // ----------------------------------------
  // Create Element
  // ----------------------------------------
  // Clone ReactElements


  if (valIsReactElement) {
    return /*#__PURE__*/React.cloneElement(val, props);
  }

  if (typeof props.children === 'function') {
    return props.children(Component, (0, _extends2.default)({}, props, {
      children: undefined
    }));
  } // Create ReactElements from built up props


  if (valIsPrimitiveValue || valIsPropsObject) {
    return /*#__PURE__*/React.createElement(Component, props);
  } // Call functions with args similar to createElement()
  // TODO: V3 remove the implementation


  if (valIsFunction) {
    if (process.env.NODE_ENV !== 'production') {
      if (!DEPRECATED_CALLS[Component]) {
        DEPRECATED_CALLS[Component] = true; // eslint-disable-next-line no-console

        console.warn("Warning: There is a deprecated shorthand function usage for \"" + Component + "\". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029");
      }
    }

    return val(Component, props, props.children);
  }
  /* eslint-enable react/prop-types */

} // ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */


function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================


var createHTMLDivision = /* #__PURE__ */createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
exports.createHTMLDivision = createHTMLDivision;
var createHTMLIframe = /* #__PURE__ */createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
exports.createHTMLIframe = createHTMLIframe;
var createHTMLImage = /* #__PURE__ */createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
exports.createHTMLImage = createHTMLImage;
var createHTMLInput = /* #__PURE__ */createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
exports.createHTMLInput = createHTMLInput;
var createHTMLLabel = /* #__PURE__ */createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
exports.createHTMLLabel = createHTMLLabel;
var createHTMLParagraph = /* #__PURE__ */createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});
exports.createHTMLParagraph = createHTMLParagraph;