import Buttons from 'src/elements/Button/Buttons'
import * as common from 'test/specs/commonTests'

describe('Buttons', () => {
  common.isConformant(Buttons)
  common.hasUIClassName(Buttons)
  common.rendersChildren(Buttons)
})
