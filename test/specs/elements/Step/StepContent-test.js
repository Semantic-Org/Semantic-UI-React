import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'
import faker from 'faker'
import React from 'react'

describe('StepContent', () => {
  common.isConformant(StepContent)
  common.forwardsRef(StepContent)
  common.forwardsRef(StepContent, { requiredProps: { content: faker.lorem.word() } })
  common.forwardsRef(StepContent, { requiredProps: { children: <span /> } })
  common.rendersChildren(StepContent)

  common.implementsCreateMethod(StepContent)
  common.implementsShorthandProp(StepContent, {
    autoGenerateKey: false,
    propKey: 'title',
    ShorthandComponent: StepTitle,
    mapValueToProps: (content) => ({ content }),
  })
  common.implementsShorthandProp(StepContent, {
    autoGenerateKey: false,
    propKey: 'description',
    ShorthandComponent: StepDescription,
    mapValueToProps: (content) => ({ content }),
  })
})
