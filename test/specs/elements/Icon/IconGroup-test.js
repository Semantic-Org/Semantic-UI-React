import IconGroup from 'src/elements/icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe.only('IconGroup', () => {
  common.isConformant(IconGroup)
  common.rendersChildren(IconGroup)
})
