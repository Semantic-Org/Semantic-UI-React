import DropdownItem from 'src/modules/Dropdown/DropdownItem'
import * as common from 'test/specs/commonTests'

describe('DropdownItem', () => {
  common.isConformant(DropdownItem)
  common.implementsShorthandProp(DropdownItem, {
    propKey: 'description',
    ShorthandComponent: 'span',
    mapValueToProps: val => ({
      className: 'description',
      children: val,
    }),
  })
  common.rendersChildren(DropdownItem)
  common.propKeyOnlyToClassName(DropdownItem, 'selected')
  common.propKeyOnlyToClassName(DropdownItem, 'active')
})
