import _ from 'lodash'

import { SUI } from 'src/lib'
import CardMeta from 'src/views/Card/CardMeta'
import * as common from 'test/specs/commonTests'

describe('CardMeta', () => {
  common.isConformant(CardMeta)
  common.forwardsRef(CardMeta)
  common.rendersChildren(CardMeta)

  common.implementsTextAlignProp(CardMeta, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))
})
