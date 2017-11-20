import FeedUser from 'src/views/Feed/FeedUser'
import * as common from 'test/specs/commonTests'

describe('FeedUser', () => {
  common.isConformant(FeedUser)
  common.rendersChildren(FeedUser)
})
