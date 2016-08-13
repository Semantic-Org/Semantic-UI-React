import CommentAuthor from 'src/views/CommentAuthor/CommentAuthor' 
import * as common from 'test/specs/commonTests' 
describe.only('CommentAuthor', () => { 
  common.isConformant(CommentAuthor) 
  common.rendersChildren(CommentAuthor) 
})
