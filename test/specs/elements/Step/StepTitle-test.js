import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'

describe('StepTitle', () => {
  common.isConformant(StepTitle)
  common.implementsCreateMethod(StepTitle)
  common.rendersChildren(StepTitle)
})
