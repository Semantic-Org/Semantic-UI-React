import DropdownMessage from 'src/modules/Dropdown/DropdownMessage'
import * as common from 'test/specs/commonTests'

const requiredProps = { type: 'noResultsMessage' }

describe('DropdownMessage', () => {
  common.isConformant(DropdownMessage, { requiredProps })

  common.implementsCreateMethod(DropdownMessage)
})
