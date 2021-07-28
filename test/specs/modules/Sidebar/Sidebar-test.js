import React from 'react'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'
import { assertWithTimeout, domEvent, sandbox } from 'test/utils'

describe('Sidebar', () => {
  common.isConformant(Sidebar)
  common.forwardsRef(Sidebar)
  common.hasUIClassName(Sidebar)
  common.rendersChildren(Sidebar)

  common.propKeyOnlyToClassName(Sidebar, 'visible')

  common.propValueOnlyToClassName(Sidebar, 'animation', [
    'overlay',
    'push',
    'scale down',
    'uncover',
    'slide out',
    'slide along',
  ])
  common.propValueOnlyToClassName(Sidebar, 'direction', ['top', 'right', 'bottom', 'left'])
  common.propValueOnlyToClassName(Sidebar, 'width', ['very thin', 'thin', 'wide', 'very wide'])

  describe('componentWillUnmount', () => {
    it('will call "clearTimeout"', (done) => {
      const clear = sandbox.spy(window, 'clearTimeout')
      const wrapper = mount(<Sidebar />)

      // start animation
      wrapper.setProps({ visible: true })
      wrapper.unmount()

      assertWithTimeout(() => {
        clear.should.have.been.called()
      }, done)
    })
  })

  describe('onHide', () => {
    it('is called when the "visible" prop changes to "false"', () => {
      const onHide = sandbox.spy()
      const wrapper = mount(<Sidebar onHide={onHide} visible />)
      onHide.should.have.not.been.called()

      wrapper.setProps({ visible: false })
      onHide.should.have.been.calledOnce()
      onHide.should.have.been.calledWithMatch(null, { visible: false })
    })

    it('is called when a click on the document was done', () => {
      const onHide = sandbox.spy()
      mount(<Sidebar onHide={onHide} visible />)
      onHide.should.have.not.been.called()

      domEvent.click(document)
      onHide.should.have.been.calledOnce()
      onHide.should.have.been.calledWithMatch({}, { visible: false })
    })

    it('is called when a click on the document was done only once', () => {
      const onHide = sandbox.spy()
      const wrapper = mount(<Sidebar onHide={onHide} visible />)

      domEvent.click(document)
      wrapper.setProps({ visible: false })
      onHide.should.have.been.calledOnce()
    })

    it('is not called when a click was done inside the component', () => {
      const mountNode = document.createElement('div')
      const onHide = sandbox.spy()

      document.body.appendChild(mountNode)
      const wrapper = mount(
        <Sidebar onHide={onHide} visible>
          <div id='child' />
        </Sidebar>,
        { attachTo: mountNode },
      )

      domEvent.click('div#child')
      onHide.should.have.not.been.called()

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('onHidden', () => {
    it('is called when the "visible" prop was changed to "false"', (done) => {
      Sidebar.animationDuration = 0
      const onHidden = sandbox.spy()
      const wrapper = mount(<Sidebar onHidden={onHidden} visible />)

      onHidden.should.have.not.been.called()
      wrapper.setProps({ visible: false })

      setTimeout(() => {
        onHidden.should.have.been.calledOnce()
        onHidden.should.have.been.calledWithMatch(null, { visible: false })

        done()
      }, 0)
    })
  })

  describe('onShow', () => {
    it('is called when the "visible" prop was changed to "true"', (done) => {
      Sidebar.animationDuration = 0
      const onShow = sandbox.spy()
      const wrapper = mount(<Sidebar onShow={onShow} />)

      onShow.should.have.not.been.called()
      wrapper.setProps({ visible: true })

      setTimeout(() => {
        onShow.should.have.been.calledOnce()
        onShow.should.have.been.calledWithMatch(null, { visible: true })

        done()
      }, 0)
    })
  })

  describe('onVisible', () => {
    it('is called when the "visible" prop changes to "true"', () => {
      const onVisible = sandbox.spy()
      const wrapper = mount(<Sidebar onVisible={onVisible} />)
      onVisible.should.have.not.been.called()

      wrapper.setProps({ visible: true })
      onVisible.should.have.been.calledOnce()
      onVisible.should.have.been.calledWithMatch(null, { visible: true })
    })
  })

  describe('target', () => {
    it('is passed to the EventListener component', () => {
      const target = document.createElement('div')

      const wrapper = shallow(<Sidebar target={target} visible />)
      const listener = wrapper.find('EventListener')

      listener.should.have.prop('target').that.eql(target)
    })
  })
})
