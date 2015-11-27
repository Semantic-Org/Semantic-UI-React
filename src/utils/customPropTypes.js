import {Children} from 'react';
import _ from 'lodash';

const customPropTypes = {
  /*
   * Ensures children are of a set of types
   * Similar to `oneOfType` built-in validator
   * @param {Array<string>} allowedTypes Collection of allowed Stardust component types
   * @returns {Array} containing children of the specified type
   */
  ofComponentTypes: (allowedTypes) => {
    return (props, propName, componentName) => {
      const {children} = props;
      const disallowed = Children.map(children, child => {
        return _.includes(allowedTypes, _.get(child, 'type._meta.name')) ? null : child;
      });
      if (disallowed && disallowed.length !== 0) {
        return new Error(
          `\`${componentName}\` should only have children of type \`${allowedTypes}\`.`
        );
      }
    };
  },
  /*
   * Verifies exclusivity of a given prop
   * @param {string} exclusives property used for exclusivity check
   * @throws {Error} if named prop not mutually exclusive
   * @returns no-op
   */
  mutuallyExclusive: exclusives => {
    return (props, propName, componentName) => {
      _.forEach(exclusives, exclusiveProp => {
        if (props[propName] && props[exclusiveProp]) {
          return new Error(
            `\`${componentName}\` should only have one of type \`${propName}\` or \`${exclusiveProp}\` not both.`
          );
        }
      });
    };
  },
};

export default customPropTypes;
