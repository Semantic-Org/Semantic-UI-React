import FeedDate from 'src/views/Feed/FeedDate'
import * as common from 'test/specs/commonTests'

describe('FeedDate', () => {
  common.isConformant(FeedDate)
  common.forwardsRef(FeedDate)
  common.rendersChildren(FeedDate)
})
