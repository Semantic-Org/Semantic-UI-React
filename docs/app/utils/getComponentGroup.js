import _ from 'lodash/fp'
import * as semanticUIReact from 'src'

const getComponentGroup = (docInfo, componentName) => ({
  [componentName]: {
    description: _.get('dockblock.description', docInfo[componentName]),
    props: _.get('props', docInfo[componentName]),
  },
  ..._.flow(
    _.filter(component => _.get('_meta.parent', component) === componentName),
    _.map('_meta.name'),
    _.map(name => ({
      name,
      description: _.get('dockblock.description', docInfo[name]),
      props: _.get('props', docInfo[name]),
    })),
    _.keyBy('name'),
  )(semanticUIReact),
})

export default getComponentGroup
