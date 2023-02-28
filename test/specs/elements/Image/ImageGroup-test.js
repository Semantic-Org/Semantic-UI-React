import ImageGroup from 'src/elements/Image/ImageGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('ImageGroup', () => {
  common.isConformant(ImageGroup)
  common.forwardsRef(ImageGroup)
  common.hasUIClassName(ImageGroup)
  common.rendersChildren(ImageGroup)

  common.propValueOnlyToClassName(ImageGroup, 'size', SUI.SIZES)
})
