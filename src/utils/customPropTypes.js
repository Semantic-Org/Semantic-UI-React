import _ from 'lodash';

let customPropTypes = {
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
