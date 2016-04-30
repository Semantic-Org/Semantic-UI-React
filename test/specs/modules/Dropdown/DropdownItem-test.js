import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import * as common from 'test/specs/commonTests'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.propKeyOnlyToClassName(DropdownItem, 'selected')
  common.propKeyOnlyToClassName(DropdownItem, 'active')
})
