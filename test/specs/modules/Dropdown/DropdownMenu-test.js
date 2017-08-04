import DropdownMenu from 'src/modules/Dropdown/DropdownMenu'
import * as common from 'test/specs/commonTests'

describe('DropdownMenu', () => {
  common.isConformant(DropdownMenu)
  common.rendersChildren(DropdownMenu)

  common.propKeyOnlyToClassName(DropdownMenu, 'scrolling')
})
