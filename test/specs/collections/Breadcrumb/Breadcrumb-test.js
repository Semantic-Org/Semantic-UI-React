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

  it('renders children with `sections` prop', () => {
    const sections = [
      { text: 'Home', link: true },
      { text: 'T-Shirt', href: 'google.com' },
    ]
    const wrapper = shallow(<Breadcrumb sections={sections} />)

    wrapper.find('BreadcrumbDivider').should.have.length(1)
    wrapper.find('BreadcrumbSection').should.have.length(2)
  })
})
