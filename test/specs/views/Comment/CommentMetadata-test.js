import * as common from 'test/specs/commonTests'
import CommentMetadata from 'src/views/Comment/CommentMetadata'

describe('CommentMetadata', () => {
  common.isConformant(CommentMetadata)
  common.rendersChildren(CommentMetadata)
})
