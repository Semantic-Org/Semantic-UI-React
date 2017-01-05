import * as common from 'test/specs/commonTests'
import CommentAuthor from 'src/views/Comment/CommentAuthor'

describe('CommentAuthor', () => {
  common.isConformant(CommentAuthor)
  common.rendersChildren(CommentAuthor)
})
