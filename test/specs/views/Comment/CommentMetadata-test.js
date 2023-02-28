import CommentMetadata from 'src/views/Comment/CommentMetadata'
import * as common from 'test/specs/commonTests'

describe('CommentMetadata', () => {
  common.isConformant(CommentMetadata)
  common.forwardsRef(CommentMetadata)
  common.rendersChildren(CommentMetadata)
})
