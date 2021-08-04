import DropdownMenu from 'src/modules/Dropdown/DropdownMenu'
import * as common from 'test/specs/commonTests'

describe('DropdownMenu', () => {
  common.isConformant(DropdownMenu)
  common.forwardsRef(DropdownMenu)
  common.rendersChildren(DropdownMenu)

  common.propValueOnlyToClassName(DropdownMenu, 'direction', ['left', 'right'])
  common.propKeyOnlyToClassName(DropdownMenu, 'open', { className: 'visible' })
  common.propKeyOnlyToClassName(DropdownMenu, 'scrolling')
})
