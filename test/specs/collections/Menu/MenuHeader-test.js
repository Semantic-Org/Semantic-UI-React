import MenuHeader from 'src/collections/Menu/MenuHeader'
import * as common from 'test/specs/commonTests'

describe('MenuHeader', () => {
  common.isConformant(MenuHeader)
  common.rendersChildren(MenuHeader)
})
