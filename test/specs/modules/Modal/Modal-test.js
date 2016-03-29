import React from 'react'
import { Modal } from 'stardust'

describe('Modal', () => {
  it('should default ref to be "modal"', () => {
    Modal.defaultProps.ref.should.equal('modal')
  })
  it('should initially have a state where `isShown` is false', () => {
    deprecatedRender(<Modal />).first().state.isShown.should.equal(false)
  })
  it('should render children', () => {
    deprecatedRender(<Modal>Hello</Modal>).assertText('Hello')
  })
  it('sets isShown true', () => {
    const modal = deprecatedRender(<Modal />).first()
    modal.showModal()
    modal.state.isShown.should.equal(true)
  })
  it('sets isShown false', () => {
    const modal = deprecatedRender(<Modal />).first()
    modal.hideModal()
    modal.state.isShown.should.equal(false)
  })
  describe('ModalHeader', () => {
    it('should render children', () => {
      deprecatedRender(<Modal.Header>Hello</Modal.Header>).assertText('Hello')
    })
  })
  describe('ModalContent', () => {
    it('should render children', () => {
      deprecatedRender(<Modal.Content>Hello</Modal.Content>).assertText('Hello')
    })
  })
  describe('ModalFooter', () => {
    it('should render children', () => {
      deprecatedRender(<Modal.Footer>Hey You</Modal.Footer>).assertText('Hey You')
    })
  })
})
