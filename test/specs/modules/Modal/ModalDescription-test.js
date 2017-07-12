import ModalDescription from 'src/modules/Modal/ModalDescription'
import * as common from 'test/specs/commonTests'

describe('ModalDescription', () => {
  common.isConformant(ModalDescription)
  common.rendersChildren(ModalDescription)
})
