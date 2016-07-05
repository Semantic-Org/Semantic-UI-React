import React from 'react'
import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('BreadcrumbSection', () => {
  common.isConformant(Breadcrumb.Section)
  common.rendersChildren(Breadcrumb.Section)
  common.propValueOnlyToClassName(Breadcrumb.Section, 'active')

  it('is div by default and does not have `href` attr', () => {
    const section = shallow(<Breadcrumb.Section>Home</Breadcrumb.Section>)

    section.should.have.tagName('div')
    section.should.not.have.attr('href')
  })

  describe('link prop', () => {
    it('is should be `a` when has prop link', () => {
      const section = shallow(<Breadcrumb.Section link>Home</Breadcrumb.Section>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('javascript:void(0)')
    })
  })

  describe('href prop', () => {
    it('is should have attr `href` when has prop', () => {
      const section = shallow(<Breadcrumb.Section href='http://google.com'>Home</Breadcrumb.Section>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('http://google.com')
    })
  })

  describe('onclick prop', () => {
    it('is should run click by prop', () => {
      const handleClick = sandbox.spy()
      const wrapper = shallow(<Breadcrumb.Section onClick={handleClick}>Home</Breadcrumb.Section>)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href').and.equal('javascript:void(0)')

      wrapper.simulate('click')
      handleClick.should.have.been.calledOnce()
    })
  })
})
