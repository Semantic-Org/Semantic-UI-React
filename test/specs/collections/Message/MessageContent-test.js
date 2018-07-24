import MessageContent from 'src/collections/Message/MessageContent'
import * as common from 'test/specs/commonTests'

describe('MessageContent', () => {
  common.isConformant(MessageContent)
  common.rendersChildren(MessageContent)
})
