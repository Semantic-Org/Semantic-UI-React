import _ from 'lodash'

import { SUI } from 'src/lib'
import CommentGroup from 'src/views/Comment/CommentGroup'
import * as common from 'test/specs/commonTests'

describe('CommentGroup', () => {
  common.isConformant(CommentGroup)
  common.forwardsRef(CommentGroup)
  common.rendersChildren(CommentGroup)

  common.propKeyOnlyToClassName(CommentGroup, 'collapsed')
  common.propKeyOnlyToClassName(CommentGroup, 'minimal')
  common.propKeyOnlyToClassName(CommentGroup, 'threaded')

  common.propValueOnlyToClassName(CommentGroup, 'size', _.without(SUI.SIZES, 'medium'))
})
