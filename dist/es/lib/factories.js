import _extends from "@babel/runtime/helpers/esm/extends";
import _uniq from "lodash/uniq";
import _isArray from "lodash/isArray";
import _isPlainObject from "lodash/isPlainObject";
import _isFunction from "lodash/isFunction";
import _isNumber from "lodash/isNumber";
import _isString from "lodash/isString";
import _isBoolean from "lodash/isBoolean";
import _isNil from "lodash/isNil";
import cx from 'clsx';
import * as React from 'react';
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

export function createShorthand(Component, mapValueToProps, val, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.');
  } // short circuit noop values


  if (_isNil(val) || _isBoolean(val)) {
    return null;
  }

  var valIsString = _isString(val);

  var valIsNumber = _isNumber(val);

  var valIsFunction = _isFunction(val);

  var valIsReactElement = /*#__PURE__*/React.isValidElement(val);

  var valIsPropsObject = _isPlainObject(val);

  var valIsPrimitiveValue = valIsString || valIsNumber || _isArray(val); // unhandled type return null

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
  overrideProps = _isFunction(overrideProps) ? overrideProps(_extends({}, defaultProps, usersProps)) : overrideProps; // Merge props

  /* eslint-disable react/prop-types */

  var props = _extends({}, defaultProps, usersProps, overrideProps); // Merge className


  if (defaultProps.className || overrideProps.className || usersProps.className) {
    var mergedClassesNames = cx(defaultProps.className, overrideProps.className, usersProps.className);
    props.className = _uniq(mergedClassesNames.split(' ')).join(' ');
  } // Merge style


  if (defaultProps.style || overrideProps.style || usersProps.style) {
    props.style = _extends({}, defaultProps.style, usersProps.style, overrideProps.style);
  } // ----------------------------------------
  // Get key
  // ----------------------------------------
  // Use key, childKey, or generate key


  if (_isNil(props.key)) {
    var childKey = props.childKey;
    var _options3 = options,
        _options3$autoGenerat = _options3.autoGenerateKey,
        autoGenerateKey = _options3$autoGenerat === void 0 ? true : _options3$autoGenerat;

    if (!_isNil(childKey)) {
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
    return props.children(Component, _extends({}, props, {
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

export function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.');
  }

  return function (val, options) {
    return createShorthand(Component, mapValueToProps, val, options);
  };
} // ============================================================
// HTML Factories
// ============================================================

export var createHTMLDivision = /* #__PURE__ */createShorthandFactory('div', function (val) {
  return {
    children: val
  };
});
export var createHTMLIframe = /* #__PURE__ */createShorthandFactory('iframe', function (src) {
  return {
    src: src
  };
});
export var createHTMLImage = /* #__PURE__ */createShorthandFactory('img', function (val) {
  return {
    src: val
  };
});
export var createHTMLInput = /* #__PURE__ */createShorthandFactory('input', function (val) {
  return {
    type: val
  };
});
export var createHTMLLabel = /* #__PURE__ */createShorthandFactory('label', function (val) {
  return {
    children: val
  };
});
export var createHTMLParagraph = /* #__PURE__ */createShorthandFactory('p', function (val) {
  return {
    children: val
  };
});