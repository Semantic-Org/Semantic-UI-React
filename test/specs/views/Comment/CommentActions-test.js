import CommentActions from 'src/views/Comment/CommentActions'
import * as common from 'test/specs/commonTests'

describe('CommentActions', () => {
  common.isConformant(CommentActions)
  common.rendersChildren(CommentActions)
})
