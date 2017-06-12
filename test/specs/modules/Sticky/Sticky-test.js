import Sticky from 'src/modules/Sticky/Sticky'
import StickyContext from 'src/modules/Sticky/StickyContext'
import * as common from 'test/specs/commonTests'

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky)
  common.hasSubComponents(Sticky, [StickyContext])
})
