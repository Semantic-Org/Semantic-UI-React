import StickyContext from 'src/modules/Sticky/StickyContext'
import * as common from 'test/specs/commonTests'

describe('StickyContext', () => {
  common.isConformant(StickyContext)
  common.rendersChildren(StickyContext)
})
