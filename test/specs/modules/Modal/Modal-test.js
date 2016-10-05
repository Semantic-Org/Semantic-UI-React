import _ from 'lodash'
import React from 'react'

import Modal from 'src/modules/Modal/Modal'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalActions from 'src/modules/Modal/ModalActions'
import ModalDescription from 'src/modules/Modal/ModalDescription'
import Portal from 'src/addons/Portal/Portal'

import { keyboardKey } from 'src/lib'
import { domEvent, sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

// ----------------------------------------
// Wrapper
// ----------------------------------------
let wrapper

// we need to unmount the modal after every test to remove it from the document
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

const assertIn = (node, selector, isPresent = true) => {
  const didFind = node.querySelector(selector) !== null
  didFind.should.equal(isPresent, `${didFind ? 'Found' : 'Did not find'} "${selector}" in the ${node}.`)
}

const assertInBody = (...args) => assertIn(document.body, ...args)

const assertBodyClasses = (...rest) => {
  const hasClasses = typeof rest[rest.length - 1] === 'boolean' ? rest.pop() : true

  rest.forEach(className => {
    const didFind = document.body.classList.contains(className)
    const message = [
      `document.body ${didFind ? 'has' : 'does not have'} class "${className}".`,
      `It has class="${document.body.classList}"`,
    ].join(' ')

    didFind.should.equal(hasClasses, message)
  })
}

describe('Modal', () => {
  beforeEach(() => {
    wrapper = undefined
    document.body.innerHTML = ''
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  common.hasSubComponents(Modal, [ModalHeader, ModalContent, ModalActions, ModalDescription])

  // Heads up!
  //
  // Our commonTests do not currently handle wrapped components.
  // Nor do they handle components rendered to the body with Portal.
  // The Modal is wrapped in a Portal, so we manually test a few things here.

  it('renders a Portal', () => {
    wrapperShallow(<Modal open />)
      .type()
      .should.equal(Portal)
  })

  it('renders to the document body', () => {
    wrapperMount(<Modal open />)
    assertInBody('.ui.modal')
  })

  it('renders child text', () => {
    wrapperMount(<Modal open>child text</Modal>)

    document.querySelector('.ui.modal')
      .innerText
      .should.equal('child text')
  })

  it('renders child components', () => {
    const child = <div data-child />
    wrapperMount(<Modal open>{child}</Modal>)

    document
      .querySelector('.ui.modal')
      .querySelector('[data-child]')
      .should.not.equal(null, 'Modal did not render the child component.')
  })

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Modal />)
      assertInBody('.ui.modal.open', false)
    })

    it('is passed to Portal open', () => {
      shallow(<Modal open />)
        .find('Portal')
        .should.have.prop('open', true)

      shallow(<Modal open={false} />)
        .find('Portal')
        .should.have.prop('open', false)
    })

    it('is not passed to Modal', () => {
      shallow(<Modal open />)
        .find('Portal')
        .children()
        .should.not.have.prop('open')

      shallow(<Modal open={false} />)
        .find('Portal')
        .children()
        .should.not.have.prop('open')
    })

    it('does not show the modal when false', () => {
      wrapperMount(<Modal open={false} />)
      assertInBody('.ui.modal', false)
    })

    it('does not show the dimmer when false', () => {
      wrapperMount(<Modal open={false} />)
      assertInBody('.ui.dimmer', false)
    })

    it('shows the dimmer when true', () => {
      wrapperMount(<Modal open dimmer />)
      assertInBody('.ui.dimmer')
    })

    it('shows the modal when true', () => {
      wrapperMount(<Modal open />)
      assertInBody('.ui.modal')
    })

    it('shows the modal and dimmer on changing from false to true', () => {
      wrapperMount(<Modal open={false} />)
      assertInBody('.ui.modal', false)
      assertInBody('.ui.dimmer', false)

      wrapper.setProps({ open: true })

      assertInBody('.ui.modal')
      assertInBody('.ui.dimmer')
    })

    it('hides the modal and dimmer on changing from true to false', () => {
      wrapperMount(<Modal open />)
      assertInBody('.ui.modal')
      assertInBody('.ui.dimmer')

      wrapper.setProps({ open: false })

      assertInBody('.ui.modal', false)
      assertInBody('.ui.dimmer', false)
    })
  })

  describe('basic', () => {
    it('adds basic to the modal className', () => {
      wrapperMount(<Modal basic open />)
      assertInBody('.ui.basic.modal')
    })
  })

  describe('size', () => {
    it('defines prop options in _meta', () => {
      Modal._meta.props.should.have.any.keys('size')
      Modal._meta.props.size.should.be.an('array')
    })

    it('adds the size to the modal className', () => {
      Modal._meta.props.size.forEach(size => {
        wrapperMount(<Modal size={size} open />)
        assertInBody(`.ui.${size}.modal`)
      })
    })
  })

  describe('dimmer', () => {
    describe('defaults', () => {
      it('is set to true by default', () => {
        Modal.defaultProps.dimmer
          .should.equal(true)
      })

      it('is present by default', () => {
        wrapperMount(<Modal open />)
        assertInBody('.ui.dimmer')
      })
    })

    describe('true', () => {
      it('adds classes "dimmable dimmed" to the body', () => {
        wrapperMount(<Modal open dimmer />)
        assertBodyClasses('dimmable', 'dimmed')
      })

      it('adds a dimmer to the body', () => {
        wrapperMount(<Modal open dimmer />)
        assertInBody('.ui.page.modals.dimmer.transition.visible.active')
      })
    })

    describe('false', () => {
      it('does not render a dimmer', () => {
        wrapperMount(<Modal open dimmer={false} />)
        assertBodyClasses('dimmable', 'dimmed', 'blurring', false)
      })

      it('does not add any dimmer classes to the body', () => {
        wrapperMount(<Modal open dimmer={false} />)
        assertBodyClasses('dimmable', 'dimmed', 'blurring', false)
      })
    })

    describe('blurring', () => {
      it('adds class "dimmable dimmed blurring" to the body', () => {
        wrapperMount(<Modal open dimmer='blurring' />)
        assertBodyClasses('dimmable', 'dimmed', 'blurring')
      })

      it('adds a dimmer to the body', () => {
        wrapperMount(<Modal open dimmer='blurring' />)
        assertInBody('.ui.page.modals.dimmer.transition.visible.active')
      })
    })

    describe('inverted', () => {
      it('adds class "dimmable dimmed" to the body', () => {
        wrapperMount(<Modal open dimmer='inverted' />)
        assertBodyClasses('dimmable', 'dimmed')
        assertBodyClasses('inverted', false)
      })

      it('adds an inverted dimmer to the body', () => {
        wrapperMount(<Modal open dimmer='inverted' />)
        assertInBody('.ui.inverted.page.modals.dimmer.transition.visible.active')
      })
    })
  })

  describe('onClose', () => {
    let spy

    beforeEach(() => {
      spy = sandbox.spy()
      wrapperMount(<Modal onClose={spy} defaultOpen />)
    })

    it('is called on dimmer click', () => {
      domEvent.click('.ui.dimmer')
      spy.should.have.been.calledOnce()
    })

    it('is called on click outside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal').parentNode)
      spy.should.have.been.calledOnce()
    })

    it('is not called on click inside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal'))
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

    it('is not called when pressing a key other than "Escape"', () => {
      _.each(keyboardKey, (val, key) => {
        // skip Escape key
        if (val === keyboardKey.Escape) return

        domEvent.keyDown(document, { key })
        spy.should.not.have.been.called(`onClose was called when pressing "${key}"`)
      })
    })

    it('is not called when the open prop changes to false', () => {
      wrapper.setProps({ open: false })
      spy.should.not.have.been.called()
    })
  })

  describe('with configurable close behaviours, onClose', () => {
    let spy

    beforeEach(() => {
      spy = sandbox.spy()
      wrapperMount(<Modal onClose={spy} open closeOnEscape={false} closeOnDocumentClick={false} />)
    })

    it('is not called on dimmer click', () => {
      domEvent.click('.ui.dimmer')
      spy.should.not.have.been.calledOnce()
    })

    it('is not called on click outside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal').parentNode)
      spy.should.not.have.been.calledOnce()
    })

    it('is not called on click inside of the modal', () => {
      domEvent.click(document.querySelector('.ui.modal'))
      spy.should.not.have.been.calledOnce()
    })

    it('is not called on body click', () => {
      domEvent.click('body')
      spy.should.not.have.been.calledOnce()
    })

    it('is not called when pressing escape', () => {
      domEvent.keyDown(document, { key: 'Escape' })
      spy.should.not.have.been.calledOnce()
    })

    it('is not called when pressing a key other than "Escape"', () => {
      _.each(keyboardKey, (val, key) => {
        // skip Escape key
        if (val === keyboardKey.Escape) return

        domEvent.keyDown(document, { key })
        spy.should.not.have.been.called(`onClose was called when pressing "${key}"`)
      })
    })

    it('is not called when the open prop changes to false', () => {
      wrapper.setProps({ open: false })
      spy.should.not.have.been.called()
    })
  })

  describe('mountNode', () => {
    it('render modal within mountNode', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      wrapperMount(<Modal mountNode={mountNode} open>foo</Modal>)
      assertIn(mountNode, '.ui.modal')
    })
  })

  describe('scrolling', () => {
    afterEach(() => {
      document.body.classList.remove('scrolling')
    })

    it('does not add the scrolling class to the body by default', () => {
      wrapperMount(<Modal open />)
      assertBodyClasses('scrolling', false)
    })

    it('adds the scrolling class to the body when taller than the window', (done) => {
      wrapperMount(<Modal open>foo</Modal>)

      window.innerHeight = 10

      requestAnimationFrame(() => {
        assertBodyClasses('scrolling')
        done()
      })
    })

    it('removes the scrolling class from the body when the window grows taller', (done) => {
      assertBodyClasses('scrolling', false)

      wrapperMount(<Modal open>foo</Modal>)
      window.innerHeight = 10

      requestAnimationFrame(() => {
        assertBodyClasses('scrolling')
        window.innerHeight = 10000

        requestAnimationFrame(() => {
          assertBodyClasses('scrolling', false)
          done()
        })
      })
    })
  })
})
