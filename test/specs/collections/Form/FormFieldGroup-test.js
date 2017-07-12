import FormGroup from 'src/collections/Form/FormGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('FormGroup', () => {
  common.isConformant(FormGroup)
  common.rendersChildren(FormGroup)

  common.implementsWidthProp(FormGroup, SUI.WIDTHS, {
    canEqual: true,
    propKey: 'widths',
  })

  common.propKeyOnlyToClassName(FormGroup, 'grouped')
  common.propKeyOnlyToClassName(FormGroup, 'inline')
})
