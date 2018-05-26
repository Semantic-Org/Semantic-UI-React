import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'

class TestComponent extends Component {
  static propTypes = {
    visible: PropTypes.bool,
  }

  static defaultProps = {
    visible: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      visible: props.visible,
    }
  }

  handleBlur = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <Sidebar
        visible={this.state.visible}
        onSidebarBlur={this.handleBlur}
      >
        <div className='inside' />
      </Sidebar>
    )
  }
}

describe('Sidebar', () => {
  it('has ui className', () => {
    const wrapper = mount(<TestComponent visible />)
    const SidebarComponent = wrapper.find('Sidebar')
    common.hasUIClassName(SidebarComponent)
  })

  it('renders a <div /> element', () => {
    shallow(<Sidebar />)
      .should.have.tagName('div')
  })

  it('close Sidebar when clicking outside', () => {
    const wrapper = mount(<TestComponent visible />)
    const SidebarComponent = wrapper.find('Sidebar')
    SidebarComponent.should.have.className('visible')
    document.body.click()
    SidebarComponent.should.not.have.className('visible')
  })

  it('doesn\'t close when clicking on element inside Sidebar', () => {
    const wrapper = mount(<TestComponent visible />)
    const SidebarComponent = wrapper.find('Sidebar')
    SidebarComponent.should.have.className('visible')
    SidebarComponent.find('.inside').simulate('click')
    SidebarComponent.should.have.className('visible')
  })

  it('doesn\'t close when clicking on Sidebar', () => {
    const wrapper = mount(<TestComponent visible />)
    const SidebarComponent = wrapper.find('Sidebar')

    SidebarComponent.should.have.className('visible')
    SidebarComponent.simulate('click')
    SidebarComponent.should.have.className('visible')
  })

  it('close Sidebar after opening and then clicking outside', () => {
    const wrapper = mount(<TestComponent />)
    const SidebarComponent = wrapper.find('Sidebar')

    SidebarComponent.should.not.have.className('visible')

    wrapper.setState({ visible: true })
    SidebarComponent.should.have.className('visible')

    document.body.click()
    SidebarComponent.should.not.have.className('visible')
  })
})
