import CommentContent from 'src/views/Comment/CommentContent'
import * as common from 'test/specs/commonTests'

describe('CommentContent', () => {
  common.isConformant(CommentContent)
  common.rendersChildren(CommentContent)
})
