import CommentText from 'src/views/Comment/CommentText'
import * as common from 'test/specs/commonTests'

describe('CommentText', () => {
  common.isConformant(CommentText)
  common.forwardsRef(CommentText)
  common.rendersChildren(CommentText)
})
