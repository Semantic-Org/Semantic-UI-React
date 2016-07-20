import React from 'react'
import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('BreadcrumbSection', () => {
  common.isConformant(BreadcrumbSection)
  common.rendersChildren(BreadcrumbSection)
  common.propKeyOnlyToClassName(BreadcrumbSection, 'active')

  it('renders as a div by default', () => {
    shallow(<BreadcrumbSection>Home</BreadcrumbSection>)
      .should.have.tagName('div')
  })

  describe('link prop', () => {
    it('is should be `a` when has prop link', () => {
      shallow(<BreadcrumbSection link>Home</BreadcrumbSection>)
        .should.have.tagName('a')
    })
  })

  describe('href prop', () => {
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

  describe('onClick prop', () => {
    it('can be omitted', () => {
      const click = () => mount(<BreadcrumbSection>Home</BreadcrumbSection>).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (event) on click', () => {
      const handleClick = sandbox.spy()
      const section = mount(<BreadcrumbSection onClick={handleClick}>Home</BreadcrumbSection>)

      section.should.have.tagName('a')
      section.simulate('click')

      handleClick.should.have.been.calledOnce()
      handleClick.should.have.been.calledWithMatch({})
    })
  })
})
