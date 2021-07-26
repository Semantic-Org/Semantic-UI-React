import _ from 'lodash'

import { SUI } from 'src/lib'
import CardDescription from 'src/views/Card/CardDescription'
import * as common from 'test/specs/commonTests'

describe('CardDescription', () => {
  common.isConformant(CardDescription)
  common.forwardsRef(CardDescription)
  common.rendersChildren(CardDescription)
  common.implementsTextAlignProp(CardDescription, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))
})
