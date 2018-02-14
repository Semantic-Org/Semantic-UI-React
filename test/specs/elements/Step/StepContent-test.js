import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'

describe('StepContent', () => {
  common.isConformant(StepContent)
  common.rendersChildren(StepContent)

  common.implementsShorthandProp(StepContent, {
    propKey: 'title',
    ShorthandComponent: StepTitle,
    mapValueToProps: content => ({ content }),
  })
  common.implementsShorthandProp(StepContent, {
    propKey: 'description',
    ShorthandComponent: StepDescription,
    mapValueToProps: content => ({ content }),
  })
})
