import FeedLabel from 'src/views/Feed/FeedLabel'
import * as common from 'test/specs/commonTests'

describe('FeedLabel', () => {
  common.isConformant(FeedLabel)
  common.rendersChildren(FeedLabel)

  common.implementsHTMLImageProp(FeedLabel)
  common.implementsIconProp(FeedLabel)
})
