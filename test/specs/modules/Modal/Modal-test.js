import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Modal from 'src/modules/Modal/Modal'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalActions from 'src/modules/Modal/ModalActions'
import ModalDescription from 'src/modules/Modal/ModalDescription'
import Portal from 'src/addons/Portal/Portal'

import { assertNodeContains, assertBodyClasses, assertBodyContains, domEvent } from 'test/utils'
import * as common from 'test/specs/commonTests'
import isBrowser from 'src/lib/isBrowser'

// ----------------------------------------
// Wrapper
// ----------------------------------------
let wrapper

// we need to unmount the modal after every test to remove it from the document
// wrap the render methods to update a global wrapper that is unmounted after each test
const wrapperMount = (...args) => (wrapper = mount(...args))
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('Modal', () => {
  beforeEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
    wrapper = undefined

    const dimmer = document.querySelector('.ui.dimmer')
    const modal = document.querySelector('.ui.modal')

    if (dimmer) dimmer.parentNode.removeChild(dimmer)
    if (modal) modal.parentNode.removeChild(modal)
  })

  common.isConformant(Modal, { rendersPortal: true })
  common.hasSubcomponents(Modal, [ModalHeader, ModalContent, ModalActions, ModalDescription])
  common.hasValidTypings(Modal)

  common.implementsShorthandProp(Modal, {
    propKey: 'header',
    ShorthandComponent: ModalHeader,
    mapValueToProps: content => ({ content }),
  })
  common.implementsShorthandProp(Modal, {
    propKey: 'content',
    ShorthandComponent: ModalContent,
    mapValueToProps: content => ({ content }),
  })

  // Heads up!
  //
  // Our commonTests do not currently handle wrapped components.
  // Nor do they handle components rendered to the body with Portal.
  // The Modal is wrapped in a Portal, so we manually test a few things here.

  it('renders a Portal', () => {
    expect(wrapperShallow(<Modal open />).type()).toBe(Portal)
  })

  it('renders to the document body', () => {
    wrapperMount(<Modal open />)
    assertBodyContains('.ui.modal')
  })

  it('renders child text', () => {
    wrapperMount(<Modal open>child text</Modal>)

    expect(document.querySelector('.ui.modal').innerText).toBe('child text')
  })

  it('renders child components', () => {
    const child = <div data-child />
    wrapperMount(<Modal open>{child}</Modal>)

    expect(document.querySelector('.ui.modal').querySelector('[data-child]')).not.toBe(null)
  })

  it("spreads the user's style prop on the Modal", () => {
    const style = { marginTop: '1em', top: 0 }

    wrapperMount(<Modal open style={style} />)
    const element = document.querySelector('.ui.modal')

    expect(element.style).toHaveProperty('marginTop', '1em')
    expect(element.style).toHaveProperty('top', '0px')
  })

  describe('actions', () => {
    it('closes the modal on action click', () => {
      wrapperMount(<Modal actions={['OK']} defaultOpen />)

      assertBodyContains('.ui.modal')
      domEvent.click('.ui.modal .actions .button')
      assertBodyContains('.ui.modal', false)
    })

    it('calls shorthand onActionClick callback', () => {
      const onActionClick = jest.fn()
      const modalActions = { onActionClick, actions: [{ key: 'ok', content: 'OK' }] }
      wrapperMount(<Modal actions={modalActions} defaultOpen />)

      expect(onActionClick).not.toHaveBeenCalled()
      domEvent.click('.ui.modal .actions .button')
      expect(onActionClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('onActionClick', () => {
    it('is called when an action is clicked', () => {
      const onActionClick = jest.fn()
      const props = { actions: ['OK'], defaultOpen: true, onActionClick }

      wrapperMount(<Modal {...props} />)
      domEvent.click('.ui.modal .actions .button')

      expect(onActionClick).toHaveBeenCalledTimes(1)
      expect(onActionClick).toHaveBeenCalledWith({}, props)
    })
  })

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Modal />)
      assertBodyContains('.ui.modal.open', false)
    })

    it('is passed to Portal open', () => {
      expect(shallow(<Modal open />).find('Portal').prop('open')).toBe(true)

      expect(shallow(<Modal open={false} />).find('Portal').prop('open')).toBe(false)
    })

    it('is not passed to Modal', () => {
      expect(
        shallow(<Modal open />)
          .find('Portal')
          .children()
      .prop('open')).toBeUndefined()

      expect(
        shallow(<Modal open={false} />)
          .find('Portal')
          .children().prop('open')).toBeUndefined()
    })

    it('does not show the modal when false', () => {
      wrapperMount(<Modal open={false} />)
      assertBodyContains('.ui.modal', false)
    })

    it('does not show the dimmer when false', () => {
      wrapperMount(<Modal open={false} />)
      assertBodyContains('.ui.dimmer', false)
    })

    it('shows the dimmer when true', () => {
      wrapperMount(<Modal open dimmer />)
      assertBodyContains('.ui.dimmer')
    })

    it('shows the modal when true', () => {
      wrapperMount(<Modal open />)
      assertBodyContains('.ui.modal')
    })

    it('shows the modal and dimmer on changing from false to true', () => {
      wrapperMount(<Modal open={false} />)
      assertBodyContains('.ui.modal', false)
      assertBodyContains('.ui.dimmer', false)

      wrapper.setProps({ open: true })

      assertBodyContains('.ui.modal')
      assertBodyContains('.ui.dimmer')
    })

    it('hides the modal and dimmer on changing from true to false', () => {
      wrapperMount(<Modal open />)
      assertBodyContains('.ui.modal')
      assertBodyContains('.ui.dimmer')

      wrapper.setProps({ open: false })

      assertBodyContains('.ui.modal', false)
      assertBodyContains('.ui.dimmer', false)
    })
  })

  describe('basic', () => {
    it('adds basic to the modal className', () => {
      wrapperMount(<Modal basic open />)
      assertBodyContains('.ui.basic.modal')
    })
  })

  describe('size', () => {
    const sizes = ['fullscreen', 'large', 'mini', 'small', 'tiny']

    sizes.forEach((size) => {
      it(`adds the "${size}" to the modal className`, () => {
        wrapperMount(<Modal size={size} open />)
        assertBodyContains(`.ui.${size}.modal`)
      })
    })
  })

  describe('dimmer', () => {
    describe('defaults', () => {
      it('is set to true by default', () => {
        expect(Modal.defaultProps.dimmer).toBe(true)
      })

      it('is present by default', () => {
        wrapperMount(<Modal open />)
        assertBodyContains('.ui.dimmer')
      })
    })

    describe('true', () => {
      it('adds/removes body classes "dimmable dimmed" on mount/unmount', () => {
        assertBodyClasses('dimmable dimmed', false)

        wrapperMount(<Modal open dimmer />)
        assertBodyClasses('dimmable dimmed')

        wrapper.unmount()
        assertBodyClasses('dimmable dimmed', false)
      })

      it('adds a dimmer to the body', () => {
        wrapperMount(<Modal open dimmer />)
        assertBodyContains('.ui.page.modals.dimmer.transition.visible.active')
      })
    })

    describe('blurring', () => {
      it('adds/removes body classes "dimmable dimmed blurring" on mount/unmount', () => {
        assertBodyClasses('dimmable dimmed blurring', false)

        wrapperMount(<Modal open dimmer='blurring' />)
        assertBodyClasses('dimmable dimmed blurring')

        wrapper.unmount()
        assertBodyClasses('dimmable dimmed blurring', false)
      })

      it('adds a dimmer to the body', () => {
        wrapperMount(<Modal open dimmer='blurring' />)
        assertBodyContains('.ui.page.modals.dimmer.transition.visible.active')
      })
    })

    describe('inverted', () => {
      it('adds/removes body classes "dimmable dimmed" on mount/unmount', () => {
        assertBodyClasses('dimmable dimmed', false)

        wrapperMount(<Modal open dimmer />)
        assertBodyClasses('dimmable dimmed')

        wrapper.unmount()
        assertBodyClasses('dimmable dimmed', false)
      })

      it('adds an inverted dimmer to the body', () => {
        wrapperMount(<Modal open dimmer='inverted' />)
        assertBodyContains('.ui.inverted.page.modals.dimmer.transition.visible.active')
      })
    })
  })

  describe('onOpen', () => {
    it('is called on trigger click', () => {
      const onOpen = jest.fn()
      wrapperMount(<Modal onOpen={onOpen} trigger={<div id='trigger' />} />)

      wrapper.find('#trigger').simulate('click')
      expect(onOpen).toHaveBeenCalledTimes(1)
    })

    it('is not called on body click', () => {
      const onOpen = jest.fn()
      wrapperMount(<Modal onOpen={onOpen} />)

      domEvent.click(document.body)
      expect(onOpen).not.toHaveBeenCalled()
    })
  })

  describe('onClose', () => {
    let onOpen

    beforeEach(() => {
      onOpen = jest.fn()
    })

    it('is called on dimmer click', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      domEvent.click('.ui.dimmer')
      expect(onOpen).toHaveBeenCalledTimes(1)
    })

    it('is called on click outside of the modal', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      domEvent.click(document.querySelector('.ui.modal').parentNode)
      expect(onOpen).toHaveBeenCalledTimes(1)
    })

    it('is not called on click inside of the modal', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      domEvent.click(document.querySelector('.ui.modal'))
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is not called on body click', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      domEvent.click(document.body)
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is called when pressing escape', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      domEvent.keyDown(document, { key: 'Escape' })
      expect(onOpen).toHaveBeenCalledTimes(1)
    })

    it('is not called when the open prop changes to false', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      wrapper.setProps({ open: false })
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is not called when open changes to false programmatically', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen />)

      wrapper.setProps({ open: false })
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is not called on dimmer click when closeOnDimmerClick is false', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen closeOnDimmerClick={false} />)

      domEvent.click('.ui.dimmer')
      expect(onOpen).not.toHaveBeenCalled()
    })

    it('is not called on body click when closeOnDocumentClick is false', () => {
      wrapperMount(<Modal onClose={onOpen} defaultOpen closeOnDocumentClick={false} />)

      domEvent.click(document.body)
      expect(onOpen).not.toHaveBeenCalled()
    })
  })

  describe('closeOnEscape', () => {
    it('closes the modal when Escape is pressed by default', () => {
      wrapperMount(<Modal defaultOpen closeOnEscape />)

      assertBodyContains('.ui.dimmer')
      domEvent.keyDown(document, { key: 'Escape' })
      assertBodyContains('.ui.dimmer', false)
    })

    it('closes the modal when true and Escape is pressed', () => {
      wrapperMount(<Modal defaultOpen closeOnEscape />)

      assertBodyContains('.ui.dimmer')
      domEvent.keyDown(document, { key: 'Escape' })
      assertBodyContains('.ui.dimmer', false)
    })

    it('does not close the modal when false and Escape is pressed', () => {
      wrapperMount(<Modal defaultOpen closeOnEscape={false} />)

      assertBodyContains('.ui.dimmer')
      domEvent.keyDown(document, { key: 'Escape' })
      assertBodyContains('.ui.dimmer')
    })
  })

  describe('closeOnDocumentClick', () => {
    it('is false by default', () => {
      expect(Modal.defaultProps.closeOnDocumentClick).toBe(false)
    })
    it('closes the modal on document click when true', () => {
      wrapperMount(<Modal defaultOpen closeOnDocumentClick />)

      assertBodyContains('.ui.dimmer')
      domEvent.click(document.body)
      assertBodyContains('.ui.dimmer', false)
    })
    it('does not close the modal on document click when false', () => {
      wrapperMount(<Modal defaultOpen closeOnDocumentClick={false} />)

      assertBodyContains('.ui.dimmer')
      domEvent.click(document.body)
      assertBodyContains('.ui.dimmer')
    })
  })

  describe('mountNode', () => {
    it('render modal within mountNode', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      wrapperMount(
        <Modal mountNode={mountNode} open>
          foo
        </Modal>,
      )
      assertNodeContains(mountNode, '.ui.modal')
    })
  })

  describe('closeIcon', () => {
    it('is not present by default', () => {
      wrapperMount(<Modal open>foo</Modal>)
      assertBodyContains('.ui.modal .icon', false)
    })

    it('defaults to `close` when boolean', () => {
      wrapperMount(
        <Modal open closeIcon>
          foo
        </Modal>,
      )
      assertBodyContains('.ui.modal .icon.close')
    })

    it('is present when passed', () => {
      wrapperMount(
        <Modal open closeIcon='bullseye'>
          foo
        </Modal>,
      )
      assertBodyContains('.ui.modal .icon.bullseye')
    })

    it('triggers onClose when clicked', () => {
      const onOpen = jest.fn()

      wrapperMount(
        <Modal onClose={onOpen} open closeIcon='bullseye'>
          foo
        </Modal>,
      )
      domEvent.click('.ui.modal .icon.bullseye')
      expect(onOpen).toHaveBeenCalledTimes(1)
    })
  })

  describe('scrolling', () => {
    const innerHeight = window.innerHeight

    afterEach(() => {
      document.body.classList.remove('scrolling')
    })

    afterAll(() => {
      window.innerHeight = innerHeight
    })

    it('does not add the scrolling class to the body by default', () => {
      wrapperMount(<Modal open />)
      assertBodyClasses('scrolling', false)
    })

    it('adds the scrolling class to the body when taller than the window', (done) => {
      window.innerHeight = 10
      wrapperMount(<Modal open>foo</Modal>)

      requestAnimationFrame(() => {
        assertBodyClasses('scrolling')
        done()
      })
    })

    it('adds/removes the scrolling class to the body when the window grows/shrinks', (done) => {
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

    it('adds the scrolling class to the body after re-open', (done) => {
      assertBodyClasses('scrolling', false)

      window.innerHeight = 10
      wrapperMount(<Modal defaultOpen>foo</Modal>)

      requestAnimationFrame(() => {
        assertBodyClasses('scrolling')
        domEvent.click('.ui.dimmer')

        assertBodyClasses('scrolling', false)

        wrapper.setProps({ open: true })
        requestAnimationFrame(() => {
          assertBodyClasses('scrolling')
          done()
        })
      })
    })

    it('removes the scrolling class from the body on unmount', (done) => {
      assertBodyClasses('scrolling', false)

      window.innerHeight = 10
      wrapperMount(<Modal open>foo</Modal>)

      requestAnimationFrame(() => {
        assertBodyClasses('scrolling')
        wrapper.unmount()

        assertBodyClasses('scrolling', false)
        done()
      })
    })
  })

  describe('server-side', () => {
    beforeAll(() => {
      isBrowser.override = false
    })

    afterAll(() => {
      isBrowser.override = null
    })

    it('renders empty content when trigger is not a valid component', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(<Modal />)
      expect(markup).toBe('')
    })

    it('renders a valid trigger component', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(<Modal trigger={<div id='trigger' />} />)
      expect(markup).toBe('<div id="trigger"></div>')
    })
  })
})
