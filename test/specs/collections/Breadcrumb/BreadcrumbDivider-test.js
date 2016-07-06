import React from 'react'
import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbDivider', () => {
  common.isConformant(BreadcrumbDivider)
  common.rendersChildren(BreadcrumbDivider)

  it('renders as a div by default', () => {
    shallow(<BreadcrumbDivider />)
      .should.have.tagName('div')
  })

  describe('icon prop', () => {
    it('is not present by default', () => {
      shallow(<BreadcrumbDivider />)
        .should.not.have.tagName('i')
    })

    it('should rendered as i when has prop', () => {
      shallow(<BreadcrumbDivider icon='right mangle' />)
        .should.have.tagName('i')
    })

    it('should have class `divider`', () => {
      shallow(<BreadcrumbDivider icon='right mangle' />)
        .should.have.className('divider')
    })
  })
})
