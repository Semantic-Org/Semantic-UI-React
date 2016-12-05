import React from 'react'
import _ from 'lodash'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'

describe('Sidebar', () => {
  common.isConformant(Sidebar)
  common.rendersChildren(Sidebar)
  common.hasUIClassName(Sidebar)

  common.propKeyOnlyToClassName(Sidebar, 'visible')
  common.propValueOnlyToClassName(Sidebar, 'width')
  common.propValueOnlyToClassName(Sidebar, 'animation')

  it('renders a <div /> element', () => {
    shallow(<Sidebar />)
      .should.have.tagName('div')
  })
  it('renders children of the sidebar', () => {
    const wrapper = mount(<Sidebar><span /></Sidebar>)
    wrapper.children().at(0).should.have.tagName('span')
  })
  it('adds direction value to className', () => {
    _.each(_.get(Sidebar, '_meta.props.direction'), propValue => {
      shallow(<Sidebar direction={propValue} />).should.have.className(propValue)
    })
  })
})
