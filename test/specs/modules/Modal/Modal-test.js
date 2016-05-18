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

  describe('initial state', () => {
    it('isShown is false', () => {
      shallow(<Modal />)
        .should.have.state('isShown', false)
    })
  })

  describe('showModal()', () => {
    it('sets isShown true', () => {
      const modal = shallow(<Modal />)

      modal
        .instance()
        .showModal()

      modal
        .should.have.state('isShown', true)
    })
  })
  describe('hideModal()', () => {
    it('sets isShown false', () => {
      const modal = shallow(<Modal />)

      modal
        .instance()
        .hideModal()

      modal
        .should.have.state('isShown', false)
    })
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
