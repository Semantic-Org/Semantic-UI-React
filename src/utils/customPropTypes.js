import {Children} from 'react';
import _ from 'lodash';

const customPropTypes = {
  /*
   * Ensures children are of a certain type
   * Similar to `oneOfType` built-in validator
   * @param {Array<string>} allowedTypes Collection of allowed types
   * @returns {Array} containing children of the specified type
   */
  childrenOfTypesOnly: (allowedTypes) => {
    return (props, propName, componentName) => {
      const {children} = props;
      const disallowed = Children.map(children, child => {
        return _.includes(allowedTypes, _.get(child, 'type._meta.name')) ? null : child;
      });
      if (disallowed && disallowed.length !== 0) {
        throw new Error(
          `\`${componentName}\` should only have children of type \`${allowedTypes}\`.`);
      }
    };
  },
  /*
   * Verifies exclusivity of a given prop type
   * @param {string} exclusives property used in exclusivity check
   * @throws {Error} if props not mutually exclusive
   * @returns no-op
   */
  mutuallyExclusive: exclusives => {
    return (props, propName, componentName) => {
      _.forEach(exclusives, exclusiveProp => {
        if (props[propName] && props[exclusiveProp]) {
          throw new Error(
            `\`${componentName}\` should only have one of type \`${propName}\` or \`${exclusiveProp}\` not both.`
          );
        }
      });
    };
  },
};

export default customPropTypes;
