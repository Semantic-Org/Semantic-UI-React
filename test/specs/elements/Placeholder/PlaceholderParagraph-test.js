import PlaceholderParagraph from 'src/elements/Placeholder/PlaceholderParagraph'
import * as common from 'test/specs/commonTests'

describe('PlaceholderParagraph', () => {
  common.isConformant(PlaceholderParagraph)
  common.rendersChildren(PlaceholderParagraph)
})
