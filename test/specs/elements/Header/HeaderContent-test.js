import HeaderContent from 'src/elements/Header/HeaderContent'
import * as common from 'test/specs/commonTests'

describe('HeaderContent', () => {
  common.isConformant(HeaderContent)
  common.rendersChildren(HeaderContent)
})
