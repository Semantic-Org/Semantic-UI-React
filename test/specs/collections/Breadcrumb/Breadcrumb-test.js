import React from 'react'

import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'

describe('Breadcrumb', () => {
  common.isConformant(Breadcrumb)
  common.forwardsRef(Breadcrumb)
  common.forwardsRef(Breadcrumb, { requiredProps: { children: <span /> } })
  common.hasSubcomponents(Breadcrumb, [BreadcrumbDivider, BreadcrumbSection])
  common.hasUIClassName(Breadcrumb)
  common.rendersChildren(Breadcrumb, {
    rendersContent: false,
  })

  it('renders a <div /> element', () => {
    shallow(<Breadcrumb />).should.have.tagName('div')
  })

  const sections = [
    { key: 'home', content: 'Home', link: true },
    { key: 't-shirt', content: 'T-Shirt', href: 'example.com' },
  ]

  it('renders children with `sections` prop', () => {
    const wrapper = shallow(<Breadcrumb sections={sections} />)

    wrapper.should.have.exactly(1).descendants(BreadcrumbDivider)
    wrapper.should.have.exactly(2).descendants(BreadcrumbSection)
  })

  it('renders defined divider with `divider` prop', () => {
    const wrapper = mount(<Breadcrumb sections={sections} divider='>' />)
    const divider = wrapper.find(BreadcrumbDivider).first()

    divider.should.contain.text('>')
  })
})
