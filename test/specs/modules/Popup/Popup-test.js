import _ from 'lodash'
import React from 'react'

import Portal from 'src/addons/Portal/Portal'
import { SUI } from 'src/lib'
import Popup from 'src/modules/Popup/Popup'
import { positionsMapping } from 'src/modules/Popup/lib/positions'
import PopupHeader from 'src/modules/Popup/PopupHeader'
import PopupContent from 'src/modules/Popup/PopupContent'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

// ----------------------------------------
// Wrapper
// ----------------------------------------
let wrapper

// we need to unmount the Popup after every test to remove it from the document
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

const assertIn = (node, selector, isPresent = true) => {
  const didFind = node.querySelector(selector) !== null
  didFind.should.equal(
    isPresent,
    `${didFind ? 'Found' : 'Did not find'} "${selector}" in the ${node}.`,
  )
}
const assertInBody = (...args) => assertIn(document.body, ...args)

describe('Popup', () => {
  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.isConformant(Popup, { rendersChildren: false, rendersPortal: true })
  common.hasSubcomponents(Popup, [PopupHeader, PopupContent])

  // Heads up!
  //
  // Our commonTests do not currently handle wrapped components.
  // Nor do they handle components rendered to the body with Portal.
  // The Popup is wrapped in a Portal, so we manually test a few things here.

  describe('children', () => {
    it('renders a Portal', () => {
      wrapperShallow(<Popup />)
        .type()
        .should.equal(Portal)
    })

    it('renders to the document body', () => {
      wrapperMount(<Popup open />)
      assertInBody('.ui.popup.visible')
    })

    it('renders child text', () => {
      wrapperMount(<Popup open>child text</Popup>)

      document.querySelector('.ui.popup.visible').innerText.should.equal('child text')
    })

    it('renders child components', () => {
      const child = <div data-child />
      wrapperMount(<Popup open>{child}</Popup>)

      document
        .querySelector('.ui.popup.visible')
        .querySelector('[data-child]')
        .should.not.equal(null, 'Popup did not render the child component.')
    })
  })

  describe('className', () => {
    it('should add className to the wrapping node', () => {
      wrapperMount(<Popup className='some-class' open />)
      assertInBody('.ui.popup.visible.some-class')
    })
  })

  describe('basic', () => {
    it('adds basic to the popup className', () => {
      wrapperMount(<Popup basic open />)
      assertInBody('.ui.basic.popup.visible')
    })
  })

  describe('disabled', () => {
    it('is not disabled by default', () => {
      shallow(<Popup />)
        .find('Portal')
        .should.exist()
    })

    it('does not render Portal if disabled', () => {
      shallow(<Popup disabled />)
        .find('Portal')
        .should.not.exist()
    })

    it('does not render Portal even with open prop', () => {
      shallow(<Popup open disabled />)
        .find('Portal')
        .should.not.exist()
    })
  })

  describe('eventsEnabled ', () => {
    it(`is "true" by default`, () => {
      wrapperMount(<Popup open />)
      wrapper.should.have.prop('eventsEnabled', true)

      const modifiers = wrapper.find('Popper').prop('modifiers')
      const eventListeners = _.find(modifiers, (m) => m.name === 'eventListeners')

      eventListeners.should.have.property('options').deep.include({ scroll: true, resize: true })
    })

    it(`can be set to "false"`, () => {
      wrapperMount(<Popup eventsEnabled={false} open />)

      const modifiers = wrapper.find('Popper').prop('modifiers')
      const eventListeners = _.find(modifiers, (m) => m.name === 'eventListeners')

      eventListeners.should.have.property('options').deep.include({ scroll: false, resize: false })
    })
  })

  describe('flowing', () => {
    it('adds flowing to the popup className', () => {
      wrapperMount(<Popup flowing open />)
      assertInBody('.ui.flowing.popup.visible')
    })
  })

  describe('hideOnScroll', () => {
    const trigger = <button>foo</button>

    it('hides on window scroll', () => {
      wrapperMount(<Popup content='foo' hideOnScroll trigger={<button>foo</button>} />)

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')

      domEvent.scroll(window)
      assertInBody('.ui.popup.visible', false)
    })

    it('is called with (e, props) when scroll', () => {
      const onClose = sandbox.spy()

      wrapperMount(<Popup content='foo' hideOnScroll onClose={onClose} trigger={trigger} />)

      wrapper.find('button').simulate('click')
      domEvent.scroll(window)

      onClose.should.have.been.calledOnce()
      onClose.should.have.been.calledWithMatch({}, { content: 'foo', onClose, trigger })
    })

    it('not hide on scroll from inside a popup', () => {
      const onClose = sandbox.spy()
      const child = <div data-child />

      wrapperMount(
        <Popup hideOnScroll onClose={onClose} trigger={trigger}>
          {child}
        </Popup>,
      )
      wrapper.find('button').simulate('click')

      domEvent.scroll(document.querySelector('[data-child]'))
      onClose.should.not.have.been.called()

      domEvent.scroll(window)
      onClose.should.have.been.calledOnce()
    })
  })

  describe('hoverable', () => {
    it('can be set to stay visible while hovering the popup', () => {
      shallow(<Popup hoverable open />)
        .find('Portal')
        .should.have.prop('closeOnPortalMouseLeave', true)
    })
  })

  describe('inverted', () => {
    it('adds inverted to the popup className', () => {
      wrapperMount(<Popup inverted open />)
      assertInBody('.ui.inverted.popup.visible')
    })
  })

  describe('offset', () => {
    it('passes values to Popper', () => {
      wrapperMount(<Popup content='foo' open offset={[50, 100]} position='bottom right' />)

      const modifiers = wrapper.find('Popper').prop('modifiers')
      const offset = _.find(modifiers, (m) => m.name === 'offset')

      offset.should.have.property('options').deep.include({ offset: [50, 100] })
    })
  })

  describe('onClose', () => {
    it('is not called on click inside of the popup', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Popup defaultOpen onClose={onClose} />)

      domEvent.click('.ui.popup')
      onClose.should.not.have.been.calledOnce()
    })

    it('is called on body click', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Popup defaultOpen onClose={onClose} />)

      domEvent.click('body')
      onClose.should.have.been.calledOnce()
    })

    it('is called when pressing escape', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Popup defaultOpen onClose={onClose} />)

      domEvent.keyDown(document, { key: 'Escape' })
      onClose.should.have.been.calledOnce()
    })

    it('is not called when the open prop changes to false', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Popup defaultOpen onClose={onClose} />)

      wrapper.setProps({ open: false })
      onClose.should.not.have.been.called()
    })
  })

  describe('onOpen', () => {
    it('is called on trigger click', () => {
      const onOpen = sandbox.spy()
      wrapperMount(
        <Popup onOpen={onOpen} trigger={<div id='trigger' />}>
          <p />
        </Popup>,
      )

      wrapper.find('#trigger').simulate('click')
      onOpen.should.have.been.calledOnce()
      onOpen.should.have.been.calledWithMatch({}, { open: true })
    })
  })

  describe('onClose', () => {
    it('is called on body click', () => {
      const onClose = sandbox.spy()
      wrapperMount(
        <Popup defaultOpen onClose={onClose} trigger={<div />}>
          <p />
        </Popup>,
      )

      domEvent.click(document.body)
      onClose.should.have.been.called()
      onClose.should.have.been.calledWithMatch({}, { open: false })
    })
  })

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Popup />)
      assertInBody('.ui.popup.visible', false)
    })

    it('is passed to Portal open', () => {
      wrapperShallow(<Popup open />)
      wrapper.find('Portal').should.have.prop('open', true)

      wrapperShallow(<Popup open={false} />)
      wrapper.find('Portal').should.have.prop('open', false)
    })

    it('does not show the popup when false', () => {
      wrapperMount(<Popup open={false} />)
      assertInBody('.ui.popup.visible', false)
    })

    it('shows the popup on changing from false to true', () => {
      wrapperMount(<Popup open={false} />)
      assertInBody('.ui.popup.visible', false)

      wrapper.setProps({ open: true })
      assertInBody('.ui.popup.visible')
    })

    it('hides the popup on changing from true to false', () => {
      wrapperMount(<Popup open />)
      assertInBody('.ui.popup.visible')

      wrapper.setProps({ open: false })
      assertInBody('.ui.popup.visible', false)
    })
  })

  describe('pinned', () => {
    it(`is "true" by default`, () => {
      wrapperMount(<Popup open />)

      wrapper
        .find('Popper')
        .should.have.prop('modifiers')
        .deep.include({ name: 'flip', enabled: true })
    })

    it(`disables "flip" modifier in PopperJS when is "true"`, () => {
      wrapperMount(<Popup open pinned />)

      wrapper
        .find('Popper')
        .should.have.prop('modifiers')
        .deep.include({ name: 'flip', enabled: false })
    })

    it(`enables "flip" modifier in PopperJS when is "false"`, () => {
      wrapperMount(<Popup open pinned={false} />)

      wrapper
        .find('Popper')
        .should.have.prop('modifiers')
        .deep.include({ name: 'flip', enabled: true })
    })
  })

  describe('position', () => {
    _.forEach(positionsMapping, (placement, position) => {
      it(`passes the "${position}" as "${placement}" to Popper`, () => {
        wrapperMount(<Popup open position={position} />)

        wrapper.find('Popper').should.have.prop('placement', placement)
      })
    })
  })

  describe('positionFixed', () => {
    it(`is not defiend by default`, () => {
      wrapperMount(<Popup open />)

      wrapper.should.not.have.prop('positionFixed')
      wrapper.find('Popper').should.not.have.prop('positionFixed')
    })

    it(`can be set to "true"`, () => {
      wrapperMount(<Popup positionFixed open />)
      wrapper.find('Popper').should.have.prop('strategy', 'fixed')
    })
  })

  describe('popper', () => {
    it('passes a zIndex value from .popup', (done) => {
      wrapperMount(<Popup open style={{ zIndex: 5000 }} />)

      const popperElement = wrapper.find('Popper').childAt(0)
      const popperNode = popperElement.getDOMNode()

      setTimeout(() => {
        // zIndex transfer is done in a Popper modifier which will be executed in next frame
        popperNode.style.zIndex.should.be.equal('5000')
        done()
      }, 0)
    })

    it('zIndex passed to a shorthand wins', (done) => {
      wrapperMount(<Popup open popper={{ style: { zIndex: 100 } }} style={{ zIndex: 5000 }} />)

      const popperElement = wrapper.find('Popper').childAt(0)
      const popperNode = popperElement.getDOMNode()

      setTimeout(() => {
        // zIndex transfer is done in a Popper modifier which will be executed in next frame
        popperNode.style.zIndex.should.be.equal('100')
        done()
      }, 0)
    })

    it('additional props can be passed via shorthand', () => {
      wrapperMount(<Popup open popper={{ className: 'foo', id: 'bar' }} />)
      const popperElement = wrapper.find('Popper').childAt(0)

      popperElement.should.have.prop('className', 'foo')
      popperElement.should.have.prop('id', 'bar')
    })

    it('"style" prop is merged', () => {
      wrapperMount(<Popup open popper={{ style: { color: 'red', display: 'block' } }} />)
      const popperElement = wrapper.find('Popper').childAt(0)

      popperElement.should.have.style('color', 'red')
      popperElement.should.have.style('display', 'flex')
    })
  })

  describe('popperModifiers', () => {
    it('are passed to Popper', () => {
      const modifierOffset = { name: 'offset', options: { offset: [0, 10] } }
      const modifierPreventOverflow = { name: 'preventOverflow', options: { padding: 0 } }
      wrapperMount(<Popup popperModifiers={[modifierOffset, modifierPreventOverflow]} open />)

      wrapper
        .find('Popper')
        .should.have.prop('modifiers')
        .deep.include(modifierOffset)
        .deep.include(modifierPreventOverflow)
    })
  })

  describe('popperDependencies', () => {
    // TODO: find a way to implement these tests
    // it('will call "scheduleUpdate" if dependencies changed', () => {
    //   wrapperMount(<Popup popperDependencies={[1, 2, 3]} />)
    //   const scheduleUpdate = sandbox.spy(wrapper.instance(), 'handleUpdate')
    //
    //   wrapper.setProps({ popperDependencies: [2, 3, 4] })
    //   scheduleUpdate.should.have.been.calledOnce()
    // })
    //
    // it('will skip "scheduleUpdate" if dependencies are same', () => {
    //   wrapperMount(<Popup popperDependencies={[1, 2, 3]} />)
    //   const scheduleUpdate = sandbox.spy(wrapper.instance(), 'handleUpdate')
    //
    //   wrapper.setProps({ popperDependencies: [1, 2, 3] })
    //   scheduleUpdate.should.have.not.been.called()
    // })
  })

  describe('size', () => {
    const sizes = _.without(SUI.SIZES, 'medium', 'big', 'massive')

    sizes.forEach((size) => {
      it(`adds the ${size} to the popup className`, () => {
        wrapperMount(<Popup size={size} open />)
        assertInBody(`.ui.${size}.popup`)
      })
    })
  })

  describe('trigger', () => {
    it('opens Popup on click', () => {
      wrapperMount(<Popup on='click' content='foo' trigger={<button />} />)

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')
    })

    it('opens Popup on hover', (done) => {
      wrapperMount(<Popup content='foo' mouseEnterDelay={0} trigger={<button />} />)

      wrapper.find('button').simulate('mouseenter')
      setTimeout(() => {
        assertInBody('.ui.popup.visible')
        done()
      }, 1)
    })

    it('opens Popup on focus', () => {
      wrapperMount(<Popup on='focus' content='foo' trigger={<input />} />)

      wrapper.find('input').simulate('focus')
      assertInBody('.ui.popup.visible')
    })

    it('opens Popup on multiple', (done) => {
      wrapperMount(<Popup on={['click', 'hover']} content='foo' trigger={<button />} />)
      const button = wrapper.find('button')

      button.simulate('click')
      assertInBody('.ui.popup.visible')

      domEvent.click('body')

      button.simulate('mouseenter')
      setTimeout(() => {
        assertInBody('.ui.popup.visible')
        done()
      }, 51)
    })
  })

  describe('wide', () => {
    it('adds to the popup className', () => {
      wrapperMount(<Popup wide open />)
      assertInBody('.ui.wide.popup.visible')
    })

    it('adds "very" to the popup className', () => {
      wrapperMount(<Popup wide='very' open />)
      assertInBody('.ui.very.wide.popup.visible')
    })
  })
})
