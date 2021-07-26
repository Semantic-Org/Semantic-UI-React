import faker from 'faker'
import React from 'react'

import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbDivider', () => {
  common.isConformant(BreadcrumbDivider)
  common.forwardsRef(BreadcrumbDivider)
  common.forwardsRef(BreadcrumbDivider, { requiredProps: { content: faker.lorem.word() } })
  common.rendersChildren(BreadcrumbDivider)

  common.implementsIconProp(BreadcrumbDivider, {
    autoGenerateKey: false,
    shorthandDefaultProps: {
      className: 'divider',
    },
  })

  it('renders as a div by default', () => {
    shallow(<BreadcrumbDivider />).should.have.tagName('div')
  })
})
