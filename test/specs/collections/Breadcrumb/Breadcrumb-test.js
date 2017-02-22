import React from 'react'

import Breadcrumb from 'src/collections/Breadcrumb/Breadcrumb'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Breadcrumb', () => {
  common.isConformant(Breadcrumb)
  common.hasUIClassName(Breadcrumb)
  common.rendersChildren(Breadcrumb)

  it('renders a <div /> element', () => {
    shallow(<Breadcrumb />)
      .should.have.tagName('div')
  })

  const sections = [
    { content: 'Home', link: true },
    { content: 'T-Shirt', href: 'google.com' },
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

  it('generates a divider key from section props', () => {
    sandbox.spy(Breadcrumb.Divider, 'create')
    shallow(<Breadcrumb sections={sections} />)

    Breadcrumb.Divider.create.should.have.been.calledWithMatch({
      content: undefined,
      icon: undefined,
      key: 'content=Home|link=true',
    })

    Breadcrumb.Divider.create.restore()
  })

  it('generates a divider key from section key', () => {
    sandbox.spy(Breadcrumb.Divider, 'create')
    shallow(<Breadcrumb sections={[{ key: 'sectionA' }, { key: 'sectionB' }]} />)

    Breadcrumb.Divider.create.should.have.been.calledWithMatch({
      content: undefined,
      icon: undefined,
      key: 'sectionA_divider',
    })

    Breadcrumb.Divider.create.restore()
  })
})
