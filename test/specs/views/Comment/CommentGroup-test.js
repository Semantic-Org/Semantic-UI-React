import * as common from 'test/specs/commonTests'
import CommentGroup from 'src/views/Comment/CommentGroup'

describe('CommentGroup', () => {
  common.isConformant(CommentGroup)
  common.rendersChildren(CommentGroup)

  common.propKeyOnlyToClassName(CommentGroup, 'collapsed')
  common.propKeyOnlyToClassName(CommentGroup, 'minimal')
  common.propKeyOnlyToClassName(CommentGroup, 'threaded')
})
