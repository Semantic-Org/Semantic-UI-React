import cx from 'classnames'
import React from 'react'

import * as common from 'test/specs/commonTests'
import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'

describe('BreadcrumbDivider', () => {
  common.isConformant(BreadcrumbDivider)
  common.implementsIconProp(BreadcrumbDivider, {
    shorthandDefaultProps: elProps => ({
      className: cx(elProps.className, 'divider'),
    }),
  })
  common.rendersChildren(BreadcrumbDivider)

  it('renders as a div by default', () => {
    shallow(<BreadcrumbDivider />)
      .should.have.tagName('div')
  })
})
