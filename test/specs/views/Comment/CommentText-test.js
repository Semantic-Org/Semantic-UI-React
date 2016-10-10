import * as common from 'test/specs/commonTests'
import CommentText from 'src/views/Comment/CommentText'

describe('CommentText', () => {
  common.isConformant(CommentText)
  common.rendersChildren(CommentText)
})
