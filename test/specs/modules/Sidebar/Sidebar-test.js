import React, { Component, PropTypes } from 'react'

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

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    return (
      <div>
        <Sidebar
          visible={this.state.visible}
          closable
          toggleVisibility={this.toggleVisibility}
        >
          <div className='inside' />
        </Sidebar>
      </div>
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
    SidebarComponent.should.have.prop('visible', true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    document.body.click()

    SidebarComponent.should.have.prop('visible', false)
  })

  it('doesn\'t close when clicking on element inside Sidebar', () => {
    const wrapper = mount(<TestComponent visible />)
    const SidebarComponent = wrapper.find('Sidebar')
    SidebarComponent.should.have.prop('visible', true)
    SidebarComponent.find('.inside').simulate('click')
    SidebarComponent.should.have.prop('visible', true)
  })

  it('close Sidebar after opening and then clicking outside', () => {
    const wrapper = mount(<TestComponent />)
    const SidebarComponent = wrapper.find('Sidebar')
    SidebarComponent.should.have.prop('visible', false)
    wrapper.setState({ visible: true })
    SidebarComponent.should.have.prop('visible', true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    document.body.click()

    SidebarComponent.should.have.prop('visible', false)
  })
})
