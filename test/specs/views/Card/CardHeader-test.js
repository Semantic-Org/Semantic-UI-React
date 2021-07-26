import _ from 'lodash'

import { SUI } from 'src/lib'
import CardHeader from 'src/views/Card/CardHeader'
import * as common from 'test/specs/commonTests'

describe('CardHeader', () => {
  common.isConformant(CardHeader)
  common.forwardsRef(CardHeader)
  common.rendersChildren(CardHeader)

  common.implementsTextAlignProp(CardHeader, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))
})
