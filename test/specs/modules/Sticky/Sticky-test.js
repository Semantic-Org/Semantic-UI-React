import Sticky from 'src/modules/Sticky/Sticky'
import * as common from 'test/specs/commonTests'

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky)
})
