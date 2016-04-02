import React from 'react'

import Modal from 'src/modules/Modal/Modal'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalFooter from 'src/modules/Modal/ModalFooter'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import * as common from 'test/specs/commonTests'

describe('Modal', () => {
  common.isConformant(Modal)
  common.hasUIClassName(Modal)
  common.rendersChildren(Modal)
  common.hasSubComponents(Modal, [ModalHeader, ModalContent, ModalFooter])

  it('should default ref to be "modal"', () => {
    Modal.defaultProps.ref.should.equal('modal')
  })
  it('should initially have a state where `isShown` is false', () => {
    deprecatedRender(<Modal />).first().state.isShown.should.equal(false)
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
})

describe('ModalHeader', () => {
  common.isConformant(Modal)
  common.rendersChildren(Modal)
})

describe('ModalContent', () => {
  common.isConformant(Modal)
  common.rendersChildren(Modal)
})

describe('ModalFooter', () => {
  common.isConformant(Modal)
  common.rendersChildren(Modal)
})
