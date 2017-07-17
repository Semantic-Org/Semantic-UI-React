import MenuMenu from 'src/collections/Menu/MenuMenu'
import * as common from 'test/specs/commonTests'

describe('MenuMenu', () => {
  common.isConformant(MenuMenu)
  common.rendersChildren(MenuMenu)

  common.propValueOnlyToClassName(MenuMenu, 'position', ['left', 'right'])
})
