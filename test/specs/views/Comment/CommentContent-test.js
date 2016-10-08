import * as common from 'test/specs/commonTests'
import CommentContent from 'src/views/Comment/CommentContent'

describe('CommentContent', () => {
  common.isConformant(CommentContent)
  common.rendersChildren(CommentContent)
})
