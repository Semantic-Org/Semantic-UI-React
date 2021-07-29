import PopupContent from 'src/modules/Popup/PopupContent'
import * as common from 'test/specs/commonTests'

describe('PopupContent', () => {
  common.isConformant(PopupContent)
  common.forwardsRef(PopupContent)
  common.rendersChildren(PopupContent)

  common.implementsCreateMethod(PopupContent)
})
