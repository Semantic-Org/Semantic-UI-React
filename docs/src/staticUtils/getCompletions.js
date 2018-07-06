import _ from 'lodash'

import getComponentMenu from './getComponentMenu'
import requireInfo from './requireInfo'

const getCompletions = () => {
  const components = []
  const props = []

  _.forEach(getComponentMenu(), ({ displayName }) => {
    const componentInfo = requireInfo(displayName)

    components.push(displayName)

    _.forEach(componentInfo.props, (prop) => {
      props.push(prop.name)
    })
  })

  return {
    components,
    props: _.uniq(props),
  }
}

export default getCompletions
