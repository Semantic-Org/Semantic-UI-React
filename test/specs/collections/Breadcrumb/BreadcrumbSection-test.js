import React from 'react'
import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)
  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  it('is div by default and does not have `href` attr', () => {
    const section = shallow(<BreadcrumbSection>Home</BreadcrumbSection>)

    section.should.have.tagName('div')
    section.should.not.have.attr('href')
  })

  describe('link prop', () => {
    it('is should be `a` when has prop link', () => {
      const section = shallow(<BreadcrumbSection link>Home</BreadcrumbSection>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('javascript:void(0)')
    })
  })

  describe('href prop', () => {
    it('is should have attr `href` when has prop', () => {
      const section = shallow(<BreadcrumbSection href='http://google.com'>Home</BreadcrumbSection>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('http://google.com')
    })
  })

  describe('onclick prop', () => {
    it('is should run click by prop', () => {
      const handleClick = sandbox.spy()
      const wrapper = shallow(<BreadcrumbSection onClick={handleClick}>Home</BreadcrumbSection>)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href').and.equal('javascript:void(0)')

      wrapper.simulate('click')
      handleClick.should.have.been.calledOnce()
    })
  })
})
