import ButtonContent from 'src/elements/Button/ButtonContent'
import * as common from 'test/specs/commonTests'

describe('ButtonContent', () => {
  common.isConformant(ButtonContent)
  common.forwardsRef(ButtonContent)
  common.rendersChildren(ButtonContent)

  common.propKeyOnlyToClassName(ButtonContent, 'hidden')
  common.propKeyOnlyToClassName(ButtonContent, 'visible')
})
