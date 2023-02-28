import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Modal from 'src/modules/Modal/Modal'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalActions from 'src/modules/Modal/ModalActions'
import ModalDescription from 'src/modules/Modal/ModalDescription'
import ModalDimmer from 'src/modules/Modal/ModalDimmer'
import Portal from 'src/addons/Portal/Portal'

import {
  assertNodeContains,
  assertBodyContains,
  assertWithTimeout,
  domEvent,
  sandbox,
} from 'test/utils'
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
    if (wrapper && wrapper.unmount) {
      try {
        wrapper.unmount()
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    wrapper = undefined

    const dimmer = document.querySelector('.ui.dimmer')
    const modal = document.querySelector('.ui.modal')

    if (dimmer) dimmer.parentNode.removeChild(dimmer)
    if (modal) modal.parentNode.removeChild(modal)
  })

  common.isConformant(Modal, { rendersPortal: true })
  common.hasSubcomponents(Modal, [
    ModalHeader,
    ModalContent,
    ModalActions,
    ModalDescription,
    ModalDimmer,
  ])
  common.hasValidTypings(Modal)

  common.implementsShorthandProp(Modal, {
    autoGenerateKey: false,
    propKey: 'header',
    ShorthandComponent: ModalHeader,
    mapValueToProps: (content) => ({ content }),
    rendersPortal: true,
    requiredProps: { open: true },
  })
  common.implementsShorthandProp(Modal, {
    autoGenerateKey: false,
    propKey: 'content',
    ShorthandComponent: ModalContent,
    mapValueToProps: (content) => ({ content }),
    rendersPortal: true,
    requiredProps: { open: true },
  })

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
    assertBodyContains('.ui.modal')
  })

  it('renders child text', () => {
    wrapperMount(<Modal open>child text</Modal>)

    document.querySelector('.ui.modal').innerText.should.equal('child text')
  })

  it('renders child components', () => {
    const child = <div data-child />
    wrapperMount(<Modal open>{child}</Modal>)

    document
      .querySelector('.ui.modal')
      .querySelector('[data-child]')
      .should.not.equal(null, 'Modal did not render the child component.')
  })

  it("spreads the user's style prop on the Modal", () => {
    const style = { marginTop: '1em', top: 0 }

    wrapperMount(<Modal open style={style} />)
    const element = document.querySelector('.ui.modal')

    element.style.should.have.property('marginTop', '1em')
    element.style.should.have.property('top', '0px')
  })

  describe('actions', () => {
    it('closes the modal on action click', () => {
      wrapperMount(<Modal actions={['OK']} defaultOpen />)

      assertBodyContains('.ui.modal')
      domEvent.click('.ui.modal .actions .button')
      assertBodyContains('.ui.modal', false)
    })

    it('calls shorthand onActionClick callback', () => {
      const onActionClick = sandbox.spy()
      const modalActions = { onActionClick, actions: [{ key: 'ok', content: 'OK' }] }
      wrapperMount(<Modal actions={modalActions} defaultOpen />)

      onActionClick.should.not.have.been.called()
      domEvent.click('.ui.modal .actions .button')
      onActionClick.should.have.been.calledOnce()
    })
  })

  describe('onActionClick', () => {
    it('is called when an action is clicked', () => {
      const onActionClick = sandbox.spy()
      const props = { actions: ['OK'], defaultOpen: true, onActionClick }

      wrapperMount(<Modal {...props} />)
      domEvent.click('.ui.modal .actions .button')

      onActionClick.should.have.been.calledOnce()
      onActionClick.should.have.been.calledWithMatch({}, props)
    })
  })

  describe('open', () => {
    it('is not open by default', () => {
      wrapperMount(<Modal />)
      assertBodyContains('.ui.modal.open', false)
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
    const sizes = ['mini', 'tiny', 'small', 'large', 'fullscreen']

    sizes.forEach((size) => {
      it(`adds the "${size}" to the modal className`, () => {
        wrapperMount(<Modal size={size} open />)
        assertBodyContains(`.ui.${size}.modal`)
      })
    })
  })

  describe('dimmer', () => {
    it('renders ModalDimmer by default', () => {
      wrapperMount(<Modal open />)
      wrapper.should.have.descendants('ModalDimmer')
    })

    it('renders ModalDimmer when is "true"', () => {
      wrapperMount(<Modal open dimmer />)
      wrapper.should.have.descendants('ModalDimmer')
    })

    it('passes "blurring" to ModalDimmer', () => {
      wrapperMount(<Modal open dimmer='blurring' />)
      wrapper.find('ModalDimmer').should.have.prop('blurring', true)
    })

    it('passes "inverted" to ModalDimmer', () => {
      wrapperMount(<Modal open dimmer='inverted' />)
      wrapper.find('ModalDimmer').should.have.prop('inverted', true)
    })

    describe('object', () => {
      it('passes props to a dimmer element', () => {
        wrapperMount(<Modal open dimmer={{ className: 'bar', id: 'dimmer', inverted: true }} />)

        wrapper.find('ModalDimmer').should.have.prop('inverted', true)
        wrapper.find('.dimmer').should.have.className('bar')
        wrapper.find('.dimmer').should.have.prop('id', 'dimmer')
      })
    })
  })

  describe('onOpen', () => {
    it('is called on trigger click', () => {
      const onOpen = sandbox.spy()
      wrapperMount(<Modal onOpen={onOpen} trigger={<div id='trigger' />} />)

      wrapper.find('#trigger').simulate('click')
      onOpen.should.have.been.calledOnce()
      onOpen.should.have.been.calledWithMatch({ type: 'click' }, { open: true })
    })

    it('is not called on body click', () => {
      const onOpen = sandbox.spy()
      wrapperMount(<Modal onOpen={onOpen} />)

      domEvent.click(document.body)
      onOpen.should.not.have.been.called()
    })
  })

  describe('onClose', () => {
    it('is called on dimmer click', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.click('.ui.dimmer')
      onClose.should.have.been.calledOnce()
      onClose.should.have.been.calledWithMatch({}, { open: false })
    })

    it('is called on click outside of the modal', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.click(document.querySelector('.ui.modal').parentNode)
      onClose.should.have.been.calledOnce()
    })

    it('is not called on mousedown inside and mouseup outside of the modal', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.mouseDown(document.querySelector('.ui.modal'))
      domEvent.click(document.querySelector('.ui.modal').parentNode)
      onClose.should.not.have.been.called()
    })

    it('is not called on click inside of the modal', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.click(document.querySelector('.ui.modal'))
      onClose.should.not.have.been.called()
    })

    it('is not called on body click', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.click(document.body)
      onClose.should.not.have.been.calledOnce()
    })

    it('is called when pressing escape', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      domEvent.keyDown(document, { key: 'Escape' })
      onClose.should.have.been.calledOnce()
    })

    it('is not called when the open prop changes to false', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      wrapper.setProps({ open: false })
      onClose.should.not.have.been.called()
    })

    it('is not called when open changes to false programmatically', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen />)

      wrapper.setProps({ open: false })
      onClose.should.not.have.been.called()
    })

    it('is not called on dimmer click when closeOnDimmerClick is false', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen closeOnDimmerClick={false} />)

      domEvent.click('.ui.dimmer')
      onClose.should.not.have.been.called()
    })

    it('is not called on body click when closeOnDocumentClick is false', () => {
      const onClose = sandbox.spy()
      wrapperMount(<Modal onClose={onClose} defaultOpen closeOnDocumentClick={false} />)

      domEvent.click(document.body)
      onClose.should.not.have.been.called()
    })

    it('handles unmount without errors', () => {
      function ControlledExample() {
        const [open, setState] = React.useState(true)

        return (
          <>
            {open && <Modal open onClose={() => setState(false)} />}
            <button id='close-button' />
          </>
        )
      }

      wrapperMount(<ControlledExample />)
      assertBodyContains('.ui.modal')

      domEvent.keyDown(document, { key: 'Escape' })
      assertBodyContains('.ui.modal', false)
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
      Modal.defaultProps.closeOnDocumentClick.should.equal(false)
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
      const spy = sandbox.spy()

      wrapperMount(
        <Modal onClose={spy} open closeIcon='bullseye'>
          foo
        </Modal>,
      )
      domEvent.click('.ui.modal .icon.bullseye')
      spy.should.have.been.calledOnce()
    })
  })

  describe('scrolling', () => {
    const innerHeight = window.innerHeight

    afterEach(() => {
      document.body.classList.remove('scrolling')
    })

    after(() => {
      window.innerHeight = innerHeight
    })

    it('does not pass "scrolling" by default', () => {
      wrapperMount(<Modal open />)
      wrapper.find('ModalDimmer').should.have.prop('scrolling', false)
    })

    it('does not pass "scrolling" when equal to the window height', (done) => {
      /* 101 is `padding * 2 + 1, see Modal/utils */
      const height = window.innerHeight - 101

      wrapperMount(
        <Modal open style={{ height }}>
          foo
        </Modal>,
      )

      requestAnimationFrame(() => {
        wrapper.update()
        wrapper.find('ModalDimmer').should.have.prop('scrolling', false)

        done()
      })
    })

    it('passes "scrolling" when taller than the window', (done) => {
      window.innerHeight = 10
      wrapperMount(<Modal open>foo</Modal>)

      requestAnimationFrame(() => {
        wrapper.update()
        wrapper.find('ModalDimmer').should.have.prop('scrolling', true)

        done()
      })
    })

    it('passes "scrolling" when the window grows/shrinks', (done) => {
      wrapperMount(
        <Modal open>
          <span />
        </Modal>,
      )
      window.innerHeight = 10

      assertWithTimeout(
        () => {
          wrapper.update()
          wrapper.find('ModalDimmer').should.have.prop('scrolling', true)

          window.innerHeight = 10000
        },
        () =>
          assertWithTimeout(() => {
            wrapper.update()
            wrapper.find('ModalDimmer').should.have.prop('scrolling', false)
          }, done),
      )
    })
  })

  describe('server-side', () => {
    before(() => {
      isBrowser.override = false
    })

    after(() => {
      isBrowser.override = null
    })

    it('renders empty content when trigger is not a valid component', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(<Modal />)
      markup.should.equal('')
    })

    it('renders a valid trigger component', () => {
      const markup = ReactDOMServer.renderToStaticMarkup(<Modal trigger={<div id='trigger' />} />)
      markup.should.equal('<div id="trigger"></div>')
    })
  })
})
