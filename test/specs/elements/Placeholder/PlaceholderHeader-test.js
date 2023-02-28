import PlaceholderHeader from 'src/elements/Placeholder/PlaceholderHeader'
import * as common from 'test/specs/commonTests'

describe('PlaceholderHeader', () => {
  common.isConformant(PlaceholderHeader)
  common.forwardsRef(PlaceholderHeader)
  common.rendersChildren(PlaceholderHeader)

  common.propKeyOnlyToClassName(PlaceholderHeader, 'image')
})
