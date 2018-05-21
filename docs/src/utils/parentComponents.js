import _ from 'lodash/fp'

import * as semanticUIReact from 'src/index'
import { META } from 'src/lib/index'

const parentComponents = _.flow(_.filter(META.isParent), _.sortBy('_meta.name'))(semanticUIReact)

export default parentComponents
