import Placeholder from 'src/elements/Placeholder'
import PlaceholderHeader from 'src/elements/Placeholder/PlaceholderHeader'
import PlaceholderImage from 'src/elements/Placeholder/PlaceholderImage'
import PlaceholderLine from 'src/elements/Placeholder/PlaceholderLine'
import PlaceholderParagraph from 'src/elements/Placeholder/PlaceholderParagraph'
import * as common from 'test/specs/commonTests'

describe('Placeholder', () => {
  common.isConformant(Placeholder)
  common.forwardsRef(Placeholder)
  common.hasSubcomponents(Placeholder, [
    PlaceholderHeader,
    PlaceholderImage,
    PlaceholderLine,
    PlaceholderParagraph,
  ])
  common.hasUIClassName(Placeholder)
  common.rendersChildren(Placeholder)

  common.propKeyOnlyToClassName(Placeholder, 'fluid')
  common.propKeyOnlyToClassName(Placeholder, 'inverted')
})
