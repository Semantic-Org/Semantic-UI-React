import React from 'react'
import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

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

  describe('onClick', () => {
    it('omitted when not defined', () => {
      const click = () => shallow(<BreadcrumbSection />).simulate('click')
      expect(click).to.not.throw()
    })

    it('is called with (event) on click', () => {
      const handleClick = sandbox.spy()
      const section = mount(<BreadcrumbSection onClick={handleClick} />)

      section.should.have.tagName('a')
      section.simulate('click')

      handleClick.should.have.been.calledOnce()
      handleClick.should.have.been.calledWithMatch({})
    })
  })
})
