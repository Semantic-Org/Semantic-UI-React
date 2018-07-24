import MessageHeader from 'src/collections/Message/MessageHeader'
import * as common from 'test/specs/commonTests'

describe('MessageHeader', () => {
  common.isConformant(MessageHeader)
  common.implementsCreateMethod(MessageHeader)
  common.rendersChildren(MessageHeader)
})
