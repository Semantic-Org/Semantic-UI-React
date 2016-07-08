import React from 'react'
import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import * as common from 'test/specs/commonTests'

describe('Breadcrumb', () => {
  common.isConformant(Breadcrumb)
  common.hasUIClassName(Breadcrumb)
  common.rendersChildren(Breadcrumb)

  it('renders a <div /> element', () => {
    shallow(<Breadcrumb />)
      .should.have.tagName('div')
  })

  const sections = [
    { text: 'Home', link: true },
    { text: 'T-Shirt', href: 'google.com' },
  ]

  it('renders children with `sections` prop', () => {
    const wrapper = shallow(<Breadcrumb sections={sections} />)

    wrapper.should.have.exactly(1).descendants('BreadcrumbDivider')
    wrapper.should.have.exactly(2).descendants('BreadcrumbSection')
  })

  it('renders defined divider with `divider` prop', () => {
    const wrapper = mount(<Breadcrumb sections={sections} divider='>' />)
    const divider = wrapper.find('BreadcrumbDivider').first()

    divider.should.contain.text('>')
  })
})
