import React from 'react'
import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbDivider', () => {
  common.isConformant(BreadcrumbDivider)
  common.implementsIconProp(BreadcrumbDivider, {
    requiredShorthandProps: {
      className: 'divider',
    },
  })
  common.rendersChildren(BreadcrumbDivider)

  it('renders as a div by default', () => {
    shallow(<BreadcrumbDivider />)
      .should.have.tagName('div')
  })
})
