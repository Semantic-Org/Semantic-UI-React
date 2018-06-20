import _ from 'lodash'
import requireInfo from './requireInfo'

/**
 * Returns a subcomponent info.json files grouped by displayName.
 * @param {Object} componentInfo
 * @package {String[]} componentInfo.subcomponents
 * @returns {{}}
 */
const getSubcomponentsInfo = ({ subcomponents }) =>
  _.keyBy(_.map(subcomponents, subcomponent => requireInfo(subcomponent)), 'displayName')

export default getSubcomponentsInfo
