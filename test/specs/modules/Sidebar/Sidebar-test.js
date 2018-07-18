import React from 'react'

import Sidebar from 'src/modules/Sidebar/Sidebar'
import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'

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

  describe('onHide', () => {
    it('is called when the "visible" prop changes to "false"', () => {
      const onHide = jest.fn()
      const wrapper = mount(<Sidebar onHide={onHide} visible />)
      expect(onHide).have.not.been.called()

      wrapper.setProps({ visible: false })
      expect(onHide).have.been.calledOnce()
      expect(onHide).have.been.calledWithMatch(null, { visible: false })
    })

    it('is called when a click on the document was done', () => {
      const onHide = jest.fn()
      mount(<Sidebar onHide={onHide} visible />)
      expect(onHide).have.not.been.called()

      domEvent.click(document)
      expect(onHide).have.been.calledOnce()
      expect(onHide).have.been.calledWithMatch({}, { visible: false })
    })

    it('is called when a click on the document was done only once', () => {
      const onHide = jest.fn()
      const wrapper = mount(<Sidebar onHide={onHide} visible />)

      domEvent.click(document)
      wrapper.setProps({ visible: false })
      onHide.should.have.been.calledOnce()
    })

    it('is not called when a click was done inside the component', () => {
      const mountNode = document.createElement('div')
      const onHide = jest.fn()

      document.body.appendChild(mountNode)
      const wrapper = mount(
        <Sidebar onHide={onHide} visible>
          <div id='child' />
        </Sidebar>,
        { attachTo: mountNode },
      )

      domEvent.click('div#child')
      expect(onHide).have.not.been.called()

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('onHidden', () => {
    it('is called when the "visible" prop was changed to "false"', (done) => {
      const onHidden = jest.fn()
      const wrapper = mount(<Sidebar duration={0} onHidden={onHidden} visible />)

      expect(onHidden).have.not.been.called()
      wrapper.setProps({ visible: false })

      setTimeout(() => {
        expect(onHidden).have.been.calledOnce()
        expect(onHidden).have.been.calledWithMatch(null, { duration: 0, visible: false })

        done()
      }, 0)
    })
  })

  describe('onShow', () => {
    it('is called when the "visible" prop was changed to "true"', (done) => {
      const onShow = jest.fn()
      const wrapper = mount(<Sidebar duration={0} onShow={onShow} />)

      expect(onShow).have.not.been.called()
      wrapper.setProps({ visible: true })

      setTimeout(() => {
        expect(onShow).have.been.calledOnce()
        expect(onShow).have.been.calledWithMatch(null, { duration: 0, visible: true })

        done()
      }, 0)
    })
  })

  describe('onVisible', () => {
    it('is called when the "visible" prop changes to "true"', () => {
      const onVisible = jest.fn()
      const wrapper = mount(<Sidebar onVisible={onVisible} />)
      expect(onVisible).have.not.been.called()

      wrapper.setProps({ visible: true })
      expect(onVisible).have.been.calledOnce()
      expect(onVisible).have.been.calledWithMatch(null, { visible: true })
    })
  })
})
