import _ from 'lodash/fp'
import * as Stardust from 'src'

const getComponentGroup = (docInfo, componentName) => ({
  [componentName]: {
    description: _.get('docBlock.description', docInfo[componentName]),
    props: _.get('props', docInfo[componentName]),
  },
  ..._.flow(
    _.filter(component => _.get('_meta.parent', component) === componentName),
    _.map('_meta.name'),
    _.map(name => ({
      name,
      description: _.get('docBlock.description', docInfo[name]),
      props: _.get('props', docInfo[name]),
    })),
    _.keyBy('name'),
  )(Stardust),
})

export default getComponentGroup
