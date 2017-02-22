import CommentAuthor from 'src/views/Comment/CommentAuthor'
import * as common from 'test/specs/commonTests'

describe('CommentAuthor', () => {
  common.isConformant(CommentAuthor)
  common.rendersChildren(CommentAuthor)
})
