import PlaceholderImage from 'src/elements/Placeholder/PlaceholderImage'
import * as common from 'test/specs/commonTests'

describe('PlaceholderImage', () => {
  common.isConformant(PlaceholderImage)
  common.forwardsRef(PlaceholderImage)

  common.propKeyOnlyToClassName(PlaceholderImage, 'square')
  common.propKeyOnlyToClassName(PlaceholderImage, 'rectangular')
})
