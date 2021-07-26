import HeaderSubheader from 'src/elements/Header/HeaderSubheader'
import * as common from 'test/specs/commonTests'

describe('HeaderSubheader', () => {
  common.isConformant(HeaderSubheader)
  common.forwardsRef(HeaderSubheader)
  common.rendersChildren(HeaderSubheader)
})
