import CommentAvatar from 'src/views/CommentAvatar/CommentAvatar' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentAvatar', () => { 
  common.isConformant(CommentAvatar) 
  common.rendersChildren(CommentAvatar) 
})
