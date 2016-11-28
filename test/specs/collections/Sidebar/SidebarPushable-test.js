import SidebarPushable from 'src/collections/Sidebar/SidebarPushable'
import * as common from 'test/specs/commonTests'

describe('SidebarPushable', () => {
  common.isConformant(SidebarPushable)
  common.rendersChildren(SidebarPushable)
})
