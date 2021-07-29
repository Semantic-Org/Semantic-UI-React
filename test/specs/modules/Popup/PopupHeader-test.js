import PopupHeader from 'src/modules/Popup/PopupHeader'
import * as common from 'test/specs/commonTests'

describe('PopupHeader', () => {
  common.isConformant(PopupHeader)
  common.forwardsRef(PopupHeader)
  common.rendersChildren(PopupHeader)

  common.implementsCreateMethod(PopupHeader)
})
