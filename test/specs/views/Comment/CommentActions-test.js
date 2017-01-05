import * as common from 'test/specs/commonTests'
import CommentActions from 'src/views/Comment/CommentActions'

describe('CommentActions', () => {
  common.isConformant(CommentActions)
  common.rendersChildren(CommentActions)
})
