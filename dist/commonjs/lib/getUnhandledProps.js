'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Push all `source` array elements to the `target` array if they don't already exist in `target`.
 *
 * @param {Array} source - An array of elements to add to the `target`
 * @param {Array} target - An array to receive unique elements from the `source`
 * @returns {Array} Mutated `target` array
 */
var pushUnique = function pushUnique(source, target) {
  return source.forEach(function (x) {
    if (target.indexOf(x) === -1) target.push(x);
  });
};

/**
 * Returns an object consisting of props beyond the scope of the Component.
 * Useful for getting and spreading unknown props from the user.
 * @param {function} Component A function or ReactClass.
 * @param {object} props A ReactElement props object
 * @returns {{}} A shallow copy of the prop object
 */
var getUnhandledProps = function getUnhandledProps(Component, props) {
  var autoControlledProps = Component.autoControlledProps,
      defaultProps = Component.defaultProps,
      propTypes = Component.propTypes;
  var handledProps = Component.handledProps;

  // ----------------------------------------
  // Calculate handledProps once and cache
  // ----------------------------------------

  if (!handledProps) {
    handledProps = [];

    if (autoControlledProps) pushUnique(autoControlledProps, handledProps);
    if (defaultProps) pushUnique(Object.keys(defaultProps), handledProps);
    if (propTypes) pushUnique(Object.keys(propTypes), handledProps);

    Component.handledProps = handledProps;
  }

  // ----------------------------------------
  // Return _unhandled_ props
  // ----------------------------------------
  return Object.keys(props).reduce(function (acc, prop) {
    if (prop === 'childKey') return acc;
    if (handledProps.indexOf(prop) === -1) acc[prop] = props[prop];
    return acc;
  }, {});
};

exports.default = getUnhandledProps;