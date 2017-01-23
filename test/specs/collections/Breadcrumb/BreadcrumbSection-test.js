import React from 'react'

import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)

  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  it('renders as a div by default', () => {
    shallow(<BreadcrumbSection>Home</BreadcrumbSection>)
      .should.have.tagName('div')
  })

  describe('link', () => {
    it('is should be `a` when has prop link', () => {
      shallow(<BreadcrumbSection link>Home</BreadcrumbSection>)
        .should.have.tagName('a')
    })
  })

  describe('href', () => {
    it('is not present by default', () => {
      shallow(<BreadcrumbSection>Home</BreadcrumbSection>)
        .should.not.have.attr('href')
    })

    it('should have attr `href` when has prop', () => {
      const section = shallow(<BreadcrumbSection href='http://google.com'>Home</BreadcrumbSection>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('http://google.com')
    })
  })
})
