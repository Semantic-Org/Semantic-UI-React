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

    wrapper.find('BreadcrumbDivider').should.have.length(1)
    wrapper.find('BreadcrumbSection').should.have.length(2)
  })

  it('renders defined divider with `divider` prop', () => {
    const wrapper = mount(<Breadcrumb sections={sections} divider='>' />)
    const divider = wrapper.find('BreadcrumbDivider').first()

    divider.text().should.to.equal('>')
  })

  it('renders divider as `Icon` with `icon` prop', () => {
    const icon = mount(<Breadcrumb sections={sections} icon='right mangle' />).find('Icon')

    icon.should.have.class('right mangle')
    icon.should.have.tagName('i')
  })
})
