import StepDescription from 'src/elements/Step/StepDescription'
import * as common from 'test/specs/commonTests'

describe('StepDescription', () => {
  common.isConformant(StepDescription)
  common.implementsCreateMethod(StepDescription)
  common.rendersChildren(StepDescription)
})
