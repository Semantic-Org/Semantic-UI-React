import PlaceholderLine from 'src/elements/Placeholder/PlaceholderLine'
import * as common from 'test/specs/commonTests'

describe('PlaceholderLine', () => {
  common.isConformant(PlaceholderLine)
  common.forwardsRef(PlaceholderLine)

  common.propValueOnlyToClassName(PlaceholderLine, 'length', [
    'full',
    'very long',
    'long',
    'medium',
    'short',
    'very short',
  ])
})
