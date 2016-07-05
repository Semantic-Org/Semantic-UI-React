import React from 'react'
import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

describe('BreadcrumbSection', () => {
  common.isConformant(Breadcrumb.Section)
  common.rendersChildren(Breadcrumb.Section)

  describe('active', () => {
    it('is not by default', () => {
      const section = shallow(<Breadcrumb.Section>Home</Breadcrumb.Section>)

      section.should.not.have.className('active')
      section.should.have.tagName('div')
    })

    it('is should be active by prop', () => {
      const section = shallow(<Breadcrumb.Section active>Home</Breadcrumb.Section>)

      section.should.have.className('active')
      section.should.have.tagName('div')
    })
  })

  describe('link prop', () => {
    it('is not by default', () => {
      shallow(<Breadcrumb.Section>Home</Breadcrumb.Section>)
        .should.have.tagName('div')
    })

    it('is should be active by prop', () => {
      const section = shallow(<Breadcrumb.Section link>Home</Breadcrumb.Section>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('#')
    })
  })

  describe('href prop', () => {
    it('is not by default', () => {
      const section = shallow(<Breadcrumb.Section>Home</Breadcrumb.Section>)

      section.should.have.tagName('div')
      section.should.not.have.attr('href')
    })

    it('is should have attr when prop', () => {
      const section = shallow(<Breadcrumb.Section href='http://google.com'>Home</Breadcrumb.Section>)

      section.should.have.tagName('a')
      section.should.have.attr('href').and.equal('http://google.com')
    })
  })

  describe('onclick prop', () => {
    it('is not by default', () => {
      shallow(<Breadcrumb.Section>Home</Breadcrumb.Section>)
        .should.have.tagName('div')
    })

    it('is should run click by prop', () => {
      const handleClick = sandbox.spy()
      const wrapper = shallow(<Breadcrumb.Section onClick={handleClick}>Home</Breadcrumb.Section>)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href').and.equal('#')

      wrapper.simulate('click')
      handleClick.should.have.been.calledOnce()
    })

    it('is shouldn not run click by prop, if prop not function', () => {
      const handleClick = sandbox.spy()
      const wrapper = shallow(<Breadcrumb.Section onClick='test'>Home</Breadcrumb.Section>)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href').and.equal('#')

      wrapper.simulate('click')
      handleClick.should.have.callCount(0)
    })
  })
})
