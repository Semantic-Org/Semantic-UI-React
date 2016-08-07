import ModalActions from 'src/modules/Modal/ModalActions'
import * as common from 'test/specs/commonTests'

describe('ModalActions', () => {
  common.isConformant(ModalActions)
  common.rendersChildren(ModalActions)
})
