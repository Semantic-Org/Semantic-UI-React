import _ from 'lodash/fp'

import * as semanticUIReact from 'src'
import { META } from 'src/lib'

const parentComponents = _.flow(_.filter(META.isParent), _.sortBy('_meta.name'))(semanticUIReact)

export default parentComponents
