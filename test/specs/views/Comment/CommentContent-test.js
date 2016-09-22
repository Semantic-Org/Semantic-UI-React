import CommentContent from 'src/views/CommentContent/CommentContent' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentContent', () => { 
  common.isConformant(CommentContent) 
  common.rendersChildren(CommentContent) 
})
