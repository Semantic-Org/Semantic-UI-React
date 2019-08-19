import _ from 'lodash/fp'

import { getComponentPathname } from '../../src/utils'
import requireInfo from './requireInfo'

/**
 * Returns a the info.json files for another component's @see tags.
 *
 * @param {Object} componentInfo
 * @returns {{}[]}
 */
const getInfoForSeeTags = _.flow(
  _.get('docblock.tags'),
  _.filter((tag) => tag.title === 'see'),
  _.map((tag) => {
    const displayName = tag.description
    const referenceInfo = requireInfo(displayName)

    return {
      displayName,
      to: getComponentPathname(referenceInfo),
    }
  }),
)

export default getInfoForSeeTags
