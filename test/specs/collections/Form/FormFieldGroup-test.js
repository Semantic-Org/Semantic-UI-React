import FormGroup from 'src/collections/Form/FormGroup'
import * as common from 'test/specs/commonTests'

describe('FormGroup', () => {
  common.isConformant(FormGroup)
  common.rendersChildren(FormGroup)
  common.propKeyOnlyToClassName(FormGroup, 'grouped')
  common.propKeyOnlyToClassName(FormGroup, 'inline')
  common.implementsWidthProp(FormGroup, { propKey: 'widths', canEqual: true })
})
