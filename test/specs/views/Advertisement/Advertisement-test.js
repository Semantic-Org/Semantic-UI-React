import Advertisement from 'src/views/Advertisement/Advertisement'
import * as common from 'test/specs/commonTests'

describe('Advertisement', () => {
  common.isConformant(Advertisement)
  common.hasUIClassName(Advertisement)
  common.rendersChildren(Advertisement)
})
