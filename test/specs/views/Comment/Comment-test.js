import Comment from 'src/views/Comment/Comment'
import * as common from 'test/specs/commonTests'

describe('Comment', () => {
  common.isConformant(Comment)
  common.rendersChildren(Comment)
  common.hasSubComponents(Comment, [])
})
