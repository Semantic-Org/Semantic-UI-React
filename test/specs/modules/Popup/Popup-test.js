import _ from 'lodash'
import React from 'react'

import Portal from 'src/addons/Portal/Portal'
import { SUI } from 'src/lib'
import Popup, { POSITIONS } from 'src/modules/Popup/Popup'
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
  didFind.should.equal(isPresent, `${didFind ? 'Found' : 'Did not find'} "${selector}" in the ${node}.`)
}
const assertInBody = (...args) => assertIn(document.body, ...args)

describe('Popup', () => {
  beforeEach(() => {
    wrapper = undefined
    document.body.innerHTML = ''
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.hasSubComponents(Popup, [PopupHeader, PopupContent])
  common.hasValidTypings(Popup)

  // Heads up!
  //
  // Our commonTests do not currently handle wrapped components.
  // Nor do they handle components rendered to the body with Portal.
  // The Popup is wrapped in a Portal, so we manually test a few things here.

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

    document.querySelector('.ui.popup.visible')
      .innerText
      .should.equal('child text')
  })

  it('renders child components', () => {
    const child = <div data-child />
    wrapperMount(<Popup open>{child}</Popup>)

    document
      .querySelector('.ui.popup.visible')
      .querySelector('[data-child]')
      .should.not.equal(null, 'Popup did not render the child component.')
  })

  it('should add className to the Popup wrapping node', () => {
    wrapperMount(<Popup className='some-class' open />)
    assertInBody('.ui.popup.visible.some-class')
  })

  describe('offest', () => {
    it('accepts an offest to the left', () => {
      wrapperMount(
        <Popup
          offset={50}
          position='bottom right'
          content='foo'
          trigger={<button>foo</button>}
        />,
      )

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')
    })
    it('accepts an offest to the right', () => {
      wrapperMount(
        <Popup
          offset={50}
          position='bottom left'
          content='foo'
          trigger={<button>foo</button>}
        />,
      )

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')
    })
  })

  describe('position', () => {
    POSITIONS.forEach((position) => {
      it('is always within the viewport', () => {
        wrapperMount(
          <Popup
            content='_'
            position={position}
            trigger={<button>foo</button>}
            on='click'
          />,
        )
        wrapper.find('button').simulate('click')

        const rect = document.querySelector('.popup.ui').getBoundingClientRect()
        const { top, right, bottom, left } = rect

        expect(top).to.be.at.least(0)
        expect(left).to.be.at.least(0)
        expect(bottom).to.be.at.most(document.documentElement.clientHeight)
        expect(right).to.be.at.most(document.documentElement.clientWidth)
      })
      it('is the original if no position fits within the viewport', () => {
        wrapperMount(
          <Popup
            content='_'
            position={position}
            trigger={<button>foo</button>}
            on='click'
            offset={999}
          />,
        )
        wrapper.find('button').simulate('click')
        const selectedPosition = wrapper.state('position')

        expect(selectedPosition).to.equal(position)
      })
    })
  })

  describe('hoverable', () => {
    it('can be set to stay visible while hovering the popup', () => {
      shallow(<Popup hoverable open />)
        .find('Portal')
        .should.have.prop('closeOnPortalMouseLeave', true)
    })
  })

  describe('hide on scroll', () => {
    it('hides on window scroll', () => {
      const trigger = <button>foo</button>
      wrapperMount(<Popup hideOnScroll content='foo' trigger={trigger} />)

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')

      document.body.scrollTop = 100

      const evt = document.createEvent('CustomEvent')
      evt.initCustomEvent('scroll', false, false, null)

      window.dispatchEvent(evt)

      assertInBody('.ui.popup.visible', false)
    })
  })

  describe('trigger', () => {
    it('it appears on click', () => {
      const trigger = <button>foo</button>
      wrapperMount(<Popup on='click' content='foo' header='bar' trigger={trigger} />)

      wrapper.find('button').simulate('click')
      assertInBody('.ui.popup.visible')
    })

    it('it appears on hover', (done) => {
      const trigger = <button>foo</button>
      wrapperMount(<Popup content='foo' trigger={trigger} />)

      wrapper.find('button').simulate('mouseenter')
      setTimeout(() => {
        assertInBody('.ui.popup.visible')
        done()
      }, 51)
    })

    it('it appears on focus', () => {
      const trigger = <input type='text' />
      wrapperMount(<Popup on='focus' content='foo' trigger={trigger} />)

      wrapper.find('input').simulate('focus')
      assertInBody('.ui.popup.visible')
    })

    it('it appears on multiple', (done) => {
      const trigger = <button>foo</button>
      const button = wrapperMount(<Popup on={['click', 'hover']} content='foo' header='bar' trigger={trigger} />)
        .find('button')

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

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Popup />)
      assertInBody('.ui.popup.visible', false)
    })

    it('is passed to Portal open', () => {
      shallow(<Popup open />)
        .find('Portal')
        .should.have.prop('open', true)

      shallow(<Popup open={false} />)
        .find('Portal')
        .should.have.prop('open', false)
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

  describe('basic', () => {
    it('adds basic to the popup className', () => {
      wrapperMount(<Popup basic open />)
      assertInBody('.ui.basic.popup.visible')
    })
  })

  describe('flowing', () => {
    it('adds flowing to the popup className', () => {
      wrapperMount(<Popup flowing open />)
      assertInBody('.ui.flowing.popup.visible')
    })
  })

  describe('inverted', () => {
    it('adds inverted to the popup className', () => {
      wrapperMount(<Popup inverted open />)
      assertInBody('.ui.inverted.popup.visible')
    })
  })

  describe('wide', () => {
    it('adds wide to the popup className', () => {
      wrapperMount(<Popup wide open />)
      assertInBody('.ui.wide.popup.visible')
    })
  })

  describe('very wide', () => {
    it('adds very wide to the popup className', () => {
      wrapperMount(<Popup wide='very' open />)
      assertInBody('.ui.very.wide.popup.visible')
    })
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

  describe('onClose', () => {
    let spy

    beforeEach(() => {
      spy = sandbox.spy()
      wrapperMount(<Popup onClose={spy} defaultOpen />)
    })

    it('is not called on click inside of the popup', () => {
      domEvent.click(document.querySelector('.ui.popup'))
      spy.should.not.have.been.calledOnce()
    })

    it('is called on body click', () => {
      domEvent.click('body')
      spy.should.have.been.calledOnce()
    })

    it('is called when pressing escape', () => {
      domEvent.keyDown(document, { key: 'Escape' })
      spy.should.have.been.calledOnce()
    })

    it('is not called when the open prop changes to false', () => {
      wrapper.setProps({ open: false })
      spy.should.not.have.been.called()
    })
  })
})
