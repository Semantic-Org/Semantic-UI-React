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
  common.isConformant(Sidebar)
  common.hasUIClassName(Sidebar)
  common.rendersChildren(Sidebar)

  common.propKeyOnlyToClassName(Sidebar, 'visible')

  common.propValueOnlyToClassName(Sidebar, 'animation', [
    'overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along',
  ])
  common.propValueOnlyToClassName(Sidebar, 'direction', ['top', 'right', 'bottom', 'left'])
  common.propValueOnlyToClassName(Sidebar, 'width', ['very thin', 'thin', 'wide', 'very wide'])

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
