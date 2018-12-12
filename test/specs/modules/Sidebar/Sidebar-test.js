import React from 'react'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

const nestingLevel = 1

describe('Sidebar', () => {
  common.isConformant(Sidebar, { nestingLevel })
  common.hasUIClassName(Sidebar, { nestingLevel })
  common.rendersChildren(Sidebar, { nestingLevel })

  common.propKeyOnlyToClassName(Sidebar, 'visible', { nestingLevel })

  common.propValueOnlyToClassName(
    Sidebar,
    'animation',
    ['overlay', 'push', 'scale down', 'uncover', 'slide out', 'slide along'],
    { nestingLevel },
  )
  common.propValueOnlyToClassName(Sidebar, 'direction', ['top', 'right', 'bottom', 'left'], {
    nestingLevel,
  })
  common.propValueOnlyToClassName(Sidebar, 'width', ['very thin', 'thin', 'wide', 'very wide'], {
    nestingLevel,
  })

  describe('componentWillUnmount', () => {
    it('will call "clearTimeout"', () => {
      const clear = sandbox.spy(window, 'clearTimeout')
      const wrapper = mount(<Sidebar />)

      wrapper.setProps({ visible: true })
      clear.should.have.been.calledOnce()
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
    it('is passed to the EventStack component', () => {
      const target = document.createElement('div')

      const wrapper = shallow(<Sidebar target={target} visible />)
      const stack = wrapper.find('EventStack')

      stack.should.have.prop('target', target)
    })
  })
})
