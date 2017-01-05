import ImageGroup from 'src/elements/Image/ImageGroup'
import * as common from 'test/specs/commonTests'

describe('ImageGroup', () => {
  common.isConformant(ImageGroup)
  common.hasUIClassName(ImageGroup)
  common.rendersChildren(ImageGroup)

  common.propValueOnlyToClassName(ImageGroup, 'size')
})
