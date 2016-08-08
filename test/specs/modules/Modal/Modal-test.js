import React from 'react'

import Modal from 'src/modules/Modal/Modal'
import ModalHeader from 'src/modules/Modal/ModalHeader'
import ModalContent from 'src/modules/Modal/ModalContent'
import ModalActions from 'src/modules/Modal/ModalActions'
import * as common from 'test/specs/commonTests'

describe('Modal', () => {
  common.isConformant(Modal)
  common.hasUIClassName(Modal)
  common.rendersChildren(Modal)
  common.hasSubComponents(Modal, [ModalHeader, ModalContent, ModalActions])

  common.propKeyOnlyToClassName(Modal, 'active')
  common.propKeyOnlyToClassName(Modal, 'basic')
  common.propValueOnlyToClassName(Modal, 'size')

  it('renders a <div /> element', () => {
    shallow(<Modal />)
      .should.have.tagName('div')
  })
})
