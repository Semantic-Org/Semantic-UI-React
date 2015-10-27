import _ from 'lodash';

/**
 * Returns an object consisting of props not defined in propTypes unless defined in defaultProps.
 * @param {*} instance The `this` keyword in a React Component class.
 * @returns {{}} A shallow copy of the prop object
 */
const getUnhandledProps = instance => {
  return _.omit(instance.props, (val, key) => {
    const inPropTypes = _.has(instance.constructor.propTypes, key);
    const inDefaultProps = _.has(instance.constructor.defaultProps, key);
    return inPropTypes && !inDefaultProps;
  });
};

export default getUnhandledProps;
