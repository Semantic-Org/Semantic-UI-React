import React from 'react'
import HeaderSubheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('HeaderSubheader', () => {
  common.rendersChildren(HeaderSubheader)
  const wrapper = mount(<HeaderSubheader />)

  it('renders a <div /> element', () => {
    wrapper.should.have.tagName('div')
  })

  it('adds the sd-header-subheader class', () => {
    wrapper.should.have.className('sd-header-subheader')
  })

  it('adds the sub class', () => {
    wrapper.should.have.className('sub')
  })
})
