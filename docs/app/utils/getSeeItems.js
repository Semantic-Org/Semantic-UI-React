import _ from 'lodash/fp'
import * as Stardust from 'src'

const getSeeItems = (docInfo, componentName) =>
  _.map(({ description }) => {
    const seeMeta = _.get('_meta', Stardust[description])

    if (!seeMeta) return null
    const { type, name } = seeMeta

    return { description, name, type }
  }, _.filter(['title', 'see'], _.get('docBlock.tags', docInfo[componentName])))

export default getSeeItems
