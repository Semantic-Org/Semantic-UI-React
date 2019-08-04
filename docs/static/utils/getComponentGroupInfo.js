import _ from 'lodash'
import requireInfo from './requireInfo'

/**
 * Returns a component and subcomponents info.json files grouped by displayName.
 * @param {String} parentDisplayName
 * @returns {{}}
 */
const getComponentGroupInfo = (parentDisplayName) => {
  const componentInfo = requireInfo(parentDisplayName)
  const subcomponentsInfo = _.map(componentInfo.subcomponents, (subcomponent) =>
    requireInfo(subcomponent),
  )

  return _.keyBy([componentInfo, ...subcomponentsInfo], 'displayName')
}

export default getComponentGroupInfo
