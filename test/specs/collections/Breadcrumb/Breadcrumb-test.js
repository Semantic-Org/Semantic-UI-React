import React from 'react'

import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import BreadcrumbDivider from 'src/collections/Breadcrumb/BreadcrumbDivider'
import BreadcrumbSection from 'src/collections/Breadcrumb/BreadcrumbSection'
import * as common from 'test/specs/commonTests'

describe('Breadcrumb', () => {
  common.isConformant(Breadcrumb)
  common.hasSubcomponents(Breadcrumb, [BreadcrumbDivider, BreadcrumbSection])
  common.hasUIClassName(Breadcrumb)
  common.rendersChildren(Breadcrumb, {
    rendersContent: false,
  })

  const sections = [
    { key: 'home', content: 'Home', link: true },
    { key: 't-shirt', content: 'T-Shirt', href: 'google.com' },
  ]

  it('renders children with `sections` prop', () => {
    const wrapper = shallow(<Breadcrumb sections={sections} />)

    expect(wrapper.find(BreadcrumbDivider)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbSection)).toHaveLength(2)
  })

  it('renders defined divider with `divider` prop', () => {
    const wrapper = mount(<Breadcrumb sections={sections} divider='>' />)
    const divider = wrapper.find(BreadcrumbDivider).first()

    expect(divider.text()).toBe('>')
  })
})
