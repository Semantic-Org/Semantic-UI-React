import ModalHeader from 'src/modules/Modal/ModalHeader'
import * as common from 'test/specs/commonTests'

describe('ModalHeader', () => {
  common.isConformant(ModalHeader)
  common.forwardsRef(ModalHeader)
  common.rendersChildren(ModalHeader)

  common.implementsCreateMethod(ModalHeader)
})
